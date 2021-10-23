import { DbConnection } from "../../components/DbConnection";
import TeamsControllerSingleton from "../../components/teamsComponent/teamsComponent";
import teamsMapper from "./mappers/teamsMapper";

export class TeamsController {
  
  async createParticipant(req: any, res: any) {
    const firebaseId = req.body.id;
    const dbConection = DbConnection.getInstance();
    const teamsComponent = new TeamsControllerSingleton(dbConection);
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
    const teamsComponent = new TeamsControllerSingleton(dbConection);

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
    const teamName = req.body.teamName;

    const dbConection = DbConnection.getInstance();

    const teamsComponent = new TeamsControllerSingleton(dbConection);

    //manage api response
    teamsComponent
      .addParticipantToTeam(req)
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
  getTeam(req: any, res: any) {
    const teamId = req.query.TeamId;

    const dbConection = DbConnection.getInstance();

    const teamsComponent = new TeamsControllerSingleton(dbConection);
    const teamsMappers = new teamsMapper();
    //manage api response
    teamsComponent
      .getTeam(req)
      .then((team) => {
        
        res.json({
          ok: true,
          message: `here is the team with id : ${teamId} `,
          team: teamsMappers.getDto(team)
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
}
