import { arrowFunctionExpression } from "@babel/types";
import { IDbConection } from "../IDbConection";
import { DbConnection } from "../DbConnection";
import Teams from "../teamsComponent/Teams";

export default class teamsControllerSingleton {
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
  async createTeam(req: any):Promise<String> {
    //getting the parameters from the request
    const liderId = req.body.liderId;
    const teamName = req.body.teamName;
    const sqlStatement:String = `call createTeam('${teamName}',${liderId})`;
    //logic to create a team
    this.teams.addTeam(liderId, teamName);
    console.log(this.teams);
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
  async createParticipant(req: any): Promise<string> {

    

    //getting the parameters from the request
    const firebaseId = req.body.id;
    const email = req.body.correo;
    const name = req.body.nombre;
    const color = req.body.color;
    //sql statement
    const sqlStatement = `INSERT INTO participante (id, Correo, Nombre, Color) VALUES (${firebaseId}, '${email}', '${name}', '${color}')`;
    return new Promise<string>((resolve, reject) => {
      this.dbConection
      .makeQuery(sqlStatement)
      .then((response) => {
        console.log(response);
        resolve("ok");
      })
      .catch((error) => {
        
        reject(error.sqlMessage);
      });
    })
  }
}
