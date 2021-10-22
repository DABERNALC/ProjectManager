import ProjectsControllerSingleton from "../../components/ProjectComponent/projectsComponent";
import { DbConnection } from "../../components/DbConnection";

export class ProjectsController {

  createProject(req: any, res: any) {
    const name = req.body.Name;

    const dbConection = new DbConnection();
    const projectComponent = new ProjectsControllerSingleton(dbConection);

    //manage api response
    projectComponent
      .createProject(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i created a project named: ${name} `,
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
