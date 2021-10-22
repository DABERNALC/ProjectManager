import { IDbConection } from "../IDbConection";
import { DbConnection } from "../DbConnection";
import Teams from "../teamsComponent/Teams";

export default class ProjectsControllerSingleton {
  
  instance: any;
  teams: any;
  dbConection: IDbConection;
  constructor(DbConection:IDbConection) {
    const instance = this.instance;
    if (instance) {
      return instance;
    }
    this.teams = new Teams();
    this.instance = this;
    this.dbConection = DbConection;
  }

  //this method creates a project and adds the team who is working on it 
  async createProject(req: any):Promise<String> {
    //getting the parameters from the request
    const name = req.body.Name;
    const description = req.body.Description;
    const idTeam = req.body.IdTeam;
    const CustomerName= req.body.CustomerName;

    const sqlStatement:String = `INSERT INTO proyecto (nombre,descripcion,nombreCliente,idEquipo) VALUES ('${name}',
                                '${description}', '${CustomerName}',${idTeam});`;

  
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
    })

    
  }

}
