import { DbConnection } from "../../components/DbConnection";
import TeamsControllerSingleton from "../../components/teamsComponent/teamsComponent";

export class TeamsController {
  async createParticipant(req: any, res: any) {
    const firebaseId = req.body.id;
    const dbConection = new DbConnection();
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

    const dbConection = new DbConnection();
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

    const dbConection = new DbConnection();
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
}
