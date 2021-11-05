import { IDbConection } from "../IDbConection";
import { DbConnection } from "../DbConnection";
import Teams from "./Teams";

export default class TeamsComponent {
  instance: any;
  teams: any;
  dbConection: IDbConection;
  
  constructor(DbConection: IDbConection) {
    const instance = this.instance;
    if (instance) {
      return instance;
    }
    this.teams = new Teams();
    this.instance = this;
    this.dbConection = DbConection;
  }
  getTeamsParticipant(req: any): Promise<any> {
    return new Promise<String[]>((resolve, reject) => {
      const participantId = req.query.participantId;

      const sqlStatement: String = `select participanteequipo.IDEquipo, proyecto.IDProyecto, proyecto.Nombre as nombreProyecto,proyecto.Descripcion,equipo.tag from participanteequipo left JOIN proyecto on proyecto.IDEquipo = participanteequipo.IDEquipo INNER JOIN equipo ON participanteequipo.IDEquipo = equipo.id where participanteequipo.IDParticipante = '${participantId}'; `;

      let answer: any = { participants: [] };
      this.dbConection
        .makeQuery(sqlStatement)
        .then(async (response: any) => {
          answer.proyectos = response;
          response = response.map((item: { IDEquipo: any }) => item.IDEquipo);
          var unique = response.filter(this.onlyUnique);
          
          if (unique.length > 0) {
            await unique.forEach((row: number, index: number) => {
              this.getTeamsParticipantsInfo(row).then((status) => {
                answer.participants = answer.participants.concat(status);
                
                if (unique.length - 1 == index) {
                  resolve(answer);
                }
              });
            });
          } else {
            
            
            answer.participants = [];
            resolve(answer);
          }
        })
        .catch((error) => {
          reject(error.sqlMessage);
        });
    });
  }

  onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }

  getTeamsParticipantsInfo(teamId: any): Promise<String[]> {
    return new Promise<String[]>((resolve, reject) => {
      const sqlStatement: String = `select * from  participanteequipo inner JOIN participante ON participanteequipo.IDParticipante = participante.ID where participanteequipo.IDEquipo = ${teamId}`;
      this.dbConection
        .makeQuery(sqlStatement)
        .then((response: any) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error.sqlMessage);
        });
    });
  }
  //this method creates a team and adds its first participant who should be the creator
  async createTeam(req: any): Promise<String> {
    //getting the parameters from the request
    const liderId = req.body.liderId;
    const teamName = req.body.teamName;
    
    const sqlStatement: String = `call createTeam('${teamName}','${liderId}')`;
    //logic to create a team
    this.teams.addTeam(liderId, teamName);
    //todo: llamar a la base de datos
    return new Promise<String>((resolve, reject) => {
      this.dbConection
        .makeQuery(sqlStatement)
        .then((response) => {
          
          
          resolve("ok");
        })
        .catch((error) => {
          reject(error.sqlMessage);
        });
    });
  }
  async getTeam(req: any): Promise<Object> {
    //getting the parameters from the request
    const teamID = req.query.TeamId;
    //sql statement
    const sqlStatement = `Call getEquipoDetails('${teamID}')`;
    return new Promise<Object>((resolve, reject) => {
      this.dbConection
        .makeQuery(sqlStatement)
        .then((response: Object) => {
          console.log("detalles", response);
          
          resolve(response);
        })
        .catch((error) => {
          reject(error.sqlMessage);
        });
    });
  }
  //this method creates a participant
  async createParticipant(req: any): Promise<string> {
    //getting the parameters from the request
    const firebaseId = req.body.id;
    const email = req.body.correo;
    const name = req.body.nombre;
    const color = req.body.color;
    //sql statement
    const sqlStatement = `INSERT INTO participante (id, Correo, Nombre, Color) VALUES ("${firebaseId}", '${email}', '${name}', '${color}')`;
    return new Promise<string>((resolve, reject) => {
      this.dbConection
        .makeQuery(sqlStatement)
        .then((response) => {
          resolve("ok");
        })
        .catch((error) => {
          reject(error.sqlMessage);
        });
    });
  }
  addParticipantToTeam(req: any): Promise<String> {
    //getting the parameters from the request
    const teamId = req.body.teamId;

    const participantId = req.body.participant;

    //sql statement
    let sqlStatement = `insert into participanteequipo (IDParticipante,IDEquipo) values ('${participantId}',${teamId});`;

    return new Promise<string>((resolve, reject) => {
      this.dbConection
        .makeQuery(sqlStatement)
        .then((response) => {
          resolve("ok");
        })
        .catch((error) => {
          reject(error.sqlMessage);
        });
    });
  }
  removeParticipantofTeam(req: any): Promise<String> {
    //getting the parameters from the request
    const teamId = req.body.teamId;

    const participantId = req.body.participant;

    //sql statement
    let sqlStatement = `delete from participanteequipo where IDParticipante = '${participantId}' and IDEquipo= ${teamId}`;

    return new Promise<string>((resolve, reject) => {
      this.dbConection
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
