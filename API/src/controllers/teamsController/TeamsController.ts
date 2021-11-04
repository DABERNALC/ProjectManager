import { DbConnection } from "../../components/DbConnection";
import TeamsComponent from "../../components/teamsComponent/TeamsComponent";
import ParticipantMapper from "./mappers/ParticipantMapper";
import teamsMapper from "./mappers/teamsMapper";

export class TeamsController {
  
  logIn(req: any, res: any) {
    const dbConection = DbConnection.getInstance();
    const teamsComponent = new TeamsComponent(dbConection);
    const participantMapper = new ParticipantMapper();
    const participantId = req.query.participantId;
    
    teamsComponent
      .getTeamsParticipant(req)
      .then(async (status) => {
        let dataMapped;
        await participantMapper.getDto(status,participantId).then((data)=> {
          dataMapped = data;
          
        }).catch(()=> {

        });
        res.json({
          ok: true,
          message: "todo ok",
          data: dataMapped
        });
      })
      .catch((error) => {
        
        res.json({
          ok: false,
          message: error,
        });
      });
      
  }
  
  async createParticipant(req: any, res: any) {
    const firebaseId = req.body.id;
    const dbConection = DbConnection.getInstance();
    const teamsComponent = new TeamsComponent(dbConection);
    let sqlStatus: string;

    //manage api response
    teamsComponent
      .createParticipant(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i created a participant with id: ${firebaseId} `,
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  createTeam(req: any, res: any) {
    const teamName = req.body.teamName;

    const dbConection = DbConnection.getInstance();
    const teamsComponent = new TeamsComponent(dbConection);

    //manage api response
    
    teamsComponent
      .createTeam(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i created a team named: ${teamName} `,
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  addParticipantToTeam(req: any, res: any) {
    const teamId = req.body.teamId;

    const dbConection = DbConnection.getInstance();

    const teamsComponent = new TeamsComponent(dbConection);
    const mensaje = "Se te ha agregó a un equipo, porfavor mira tus lista de equipos"
    const participant = req.body.participant;
    //manage api response
    teamsComponent
      .addParticipantToTeam(req)
      .then((status) => {
        this.createNotification(mensaje,participant).then(()=>{
          res.json({
            ok: true,
            message: `i added the participant to the : ${teamId} `,
          });
        }).catch((error)=>{
          res.json({
            ok: false,
            message: error,
          });
        });

        
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  removeParticipants(req: any, res: any) {
    const teamId = req.body.teamId;

    const dbConection = DbConnection.getInstance();

    const teamsComponent = new TeamsComponent(dbConection);
    const mensaje = "Se te ha agregó a un equipo, porfavor mira tus lista de equipos"
    const participant = req.body.participant;
    //manage api response
    teamsComponent
      .removeParticipantofTeam(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i remover the participant to the `,
        })

        
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  
  getTeam(req: any, res: any) {
    const teamId = req.query.TeamId;

    const dbConection = DbConnection.getInstance();

    const teamsComponent = new TeamsComponent(dbConection);
    const teamsMappers = new teamsMapper();
    //manage api response
    teamsComponent
      .getTeam(req)
      .then((team) => {
        console.log("team details", team);
        
        res.json({
          ok: true,
          message: `here is the team with id : ${teamId} `,
          team: teamsMappers.getDto(team),
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  createNotification(message:string,participant:string) {
    const dbConection = DbConnection.getInstance();
    const sqlStatement = `INSERT INTO notificacion (Descripcion,IDParticipante,Estado)VALUES ("${message}",${participant},0);	`;
    return new Promise<string>((resolve, reject) => {
      dbConection
        .makeQuery(sqlStatement)
        .then((response) => {
          resolve("ok");
        })
        .catch((error) => {
          reject(error.sqlMessage);
        });
    });
  }
  
}
