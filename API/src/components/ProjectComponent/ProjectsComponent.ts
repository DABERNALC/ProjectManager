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

    const sqlStatement:String = `INSERT INTO proyecto (nombre,descripcion,nombreCliente,idEquipo) VALUES ('${name}','${description}', '${CustomerName}',${idTeam});`;

  
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
  isValidDate(date:string)
  {
    let result;
    let numbers =  date.split('-');
    result = date.split('-').length === 3 ? true:false;
    if(result)
      numbers.forEach((number:any,index)=>{
        number = Number(number)
        if(Number.isNaN(Number(number))) 
        {
          result = false;
          return false;
        }
          
        if(index === 1 && number>12)
        {
          result = false;
          return false;
        }
        if(index === 2 && number>31)
        {
          result = false;
          return false;
        }
          
      })
    return  result
  }
  addTask(req: any):Promise<String> {
    //getting the parameters from the request
    
    const description = req.body.Description;
    const proyectId = req.body.proyectId;
    const priority = req.body.priority;
    const participantId = req.body.participantId;
    const relevance = req.body.relevance;
    const date = req.body.date;

    if(!this.isValidDate(date)){
      return new Promise<String>((resolve, reject) => {
        reject("esa fecha no es valida");
      })
    }
      
    const sqlStatement:String = `INSERT INTO tarea (Descripcion,Estado,idParticipante,IDProyecto,Prioridad,FechaTarea) VALUES ('${description}',
    'pendiente', '${participantId}',${proyectId},'${priority}','${date}');`;

  
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
  updateTask(req: any) {
    //getting the parameters from the request
    
    const description = req.body.Description;
    
    const priority = req.body.priority;
    const participantId = req.body.participantId;
    const relevance = req.body.relevance;
    const date = req.body.date;
    const taskId = req.body.taskId;
    const state = req.body.state;

    const sqlStatement:String = `update tarea SET  Descripcion ="${description}" ,  Estado ="${state}" ,  IDParticipante = "${participantId}" , Prioridad= "${priority}"  ,  FechaTarea= "${date}"   WHERE   ID = ${taskId}`;
    if(!this.isValidDate(date)){
      return new Promise<String>((resolve, reject) => {
        reject("esa fecha no es valida");
      })
    }
  
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
  deleteTask(req: any) {
     //getting the parameters from the request
     const taskId = req.body.taskId;
     
 
     const sqlStatement:String = `DELETE FROM tarea WHERE ID = ${taskId};`;
   
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
