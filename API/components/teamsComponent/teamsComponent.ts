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

  //this method creates a team and adds its first participant who should be the creator
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
  async getTeam(req: any): Promise<Object> {

    //getting the parameters from the request
    const teamID= req.query.TeamId;
    //sql statement
    const sqlStatement = `SELECT * FROM EQUIPO WHERE id="${teamID}"`;
    return new Promise<Object>((resolve, reject) => {
      this.dbConection
      .makeQuery(sqlStatement)
      .then((response:Object) => {
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        
        reject(error.sqlMessage);
      });
    })
  }
  //this method creates a participant
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
  addParticipantToTeam(req: any):Promise<String> {
   //getting the parameters from the request
   const teamId = req.body.teamId;
   var example  = "['102983','190238']";
   const participantsIds = req.body.participants.split("[")[1].split("]")[0].split(",");
   
    
  
   //sql statement
   let sqlStatement = `insert into participanteequipo (IDParticipante,IDEquipo) values `;
   participantsIds.forEach((participant: String, index: number) => {
     index != (participantsIds.length -1) ? sqlStatement += `(${participant},${teamId}),`: sqlStatement += `(${participant},${teamId});`
  });
  console.log(sqlStatement);
  
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
