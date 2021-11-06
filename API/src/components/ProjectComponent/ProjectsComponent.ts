import { IDbConection } from "../IDbConection";
import { DbConnection } from "../DbConnection";
import Teams from "../teamsComponent/Teams";

export default class ProjectsComponent {
  
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
    const liderId =  req.body.liderId;
    const sqlStatement:String = `call createProject("${name}", "${description}","${CustomerName}",${idTeam},'${liderId}')`;

  
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
    ${relevance}, '${participantId}',${proyectId},'${priority}','${date}');`;

  
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
    const relevance = req.body.relevance;
    const date = req.body.date;
    const taskId = req.body.taskId;
   

    const sqlStatement:String = `update tarea SET  Descripcion ="${description}" , Prioridad= "${priority}"  ,  FechaTarea= "${date}"   WHERE   ID = ${taskId}`;
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
  updateProject(req: any) {
    //getting the parameters from the request
        
    const CustomerName = req.body.CustomerName;
    const Description = req.body.Description;
    const Name = req.body.Name;
    const projectId = req.body.projectId;
   

    const sqlStatement:String = `update proyecto SET  Descripcion ="${Description}" , Nombre= "${Name}"  ,  NombreCliente= "${CustomerName}"   WHERE   IDProyecto = ${projectId}`;
  
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
  updateSubtask(req: any) {
    //getting the parameters from the request
    
    const description = req.body.description;
  
    const subTaskId = req.body.subTaskId;
   

    const sqlStatement:String = `update subtarea SET  Descripcion ="${description}"    WHERE   ID = ${subTaskId}`;
  
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
  addSubtask(req: any) {
   //getting the parameters from the request
   const taskId = req.body.taskId;
   const description = req.body.description;
   
 
   const sqlStatement:String = `INSERT INTO subtarea (descripcion,idTarea,estado) VALUES ('${description}',${taskId},0);`;
 
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
  checkTask(req: any) {
    //getting the parameters from the request
   const subTaskId = req.body.subTaskId;
   
   
 
   const sqlStatement:String = `update subTarea SET  Estado =if(estado=0 , 1, 0) WHERE   subtarea.ID = ${subTaskId}; `;
 
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
  deleteSubTask(req: any) {
     //getting the parameters from the request
     const subTaskId = req.body.subTaskId;
     
 
     const sqlStatement:String = `DELETE FROM subtarea WHERE ID = ${subTaskId};`;
   
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
  getLider(projectId:any)
  {
 
     const sqlStatement:String = `select IDParticipante from liderproyecto where IDProyecto = ${projectId}`;
   
     //todo: llamar a la base de datos
     return new Promise<String>((resolve, reject) => {
       this.dbConection
       .makeQuery(sqlStatement)
       .then((response) => {
         
         resolve(response);
       })
       .catch((error) => {
         
         reject(error.sqlMessage);
       });
     })
  }
  getKanban(req: any) {
    //getting the parameters from the request
    const projectId = req.query.projectId;
     
 
    const sqlStatement:String = `Select tarea.id,tarea.Descripcion,tarea.prioridad,tarea.FechaTarea,participante.Color,participante.ID,(select IDParticipante from liderproyecto  where liderproyecto.IDProyecto =tarea.IDProyecto  ) as liderId  from tarea INNER JOIN participante on tarea.IDParticipante = participante.ID WHERE tarea.IDProyecto = "${projectId}";`;
  
    //todo: llamar a la base de datos
    return new Promise<String>((resolve, reject) => {
      this.dbConection
      .makeQuery(sqlStatement)
      .then((response) => {
        
        resolve(response);
      })
      .catch((error) => {
        
        reject(error.sqlMessage);
      });
    })
  }
  getProject(req: any) {
    //getting the parameters from the request
    const projectId = req.query.projectId;
     
 
    const sqlStatement:String = `select * from proyecto where IDProyecto = ${projectId}`;
  
    //todo: llamar a la base de datos
    return new Promise<String>((resolve, reject) => {
      this.dbConection
      .makeQuery(sqlStatement)
      .then((response) => {
        
        resolve(response);
      })
      .catch((error) => {
        
        reject(error.sqlMessage);
      });
    })
  }
  getSubtarea(idTarea:number) {
    //getting the parameters from the request
     
 
    const sqlStatement:String = `select * from subtarea where subtarea.IDTarea = ${idTarea};`;
  
    //todo: llamar a la base de datos
    return new Promise<String>((resolve, reject) => {
      this.dbConection
      .makeQuery(sqlStatement)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        
        reject(error.sqlMessage);
      });
    })
  }
  getSubTask(req: any) {
    //getting the parameters from the request
    const projectId = req.query.projectId;
     
 
    const sqlStatement:String = `select tarea.ID as idTask, tarea.Descripcion as taskDescription,IDProyecto,tarea.Inconvenientes, subtarea.ID, subtarea.Descripcion,subtarea.Estado,tarea.IDParticipante from tarea left join subtarea on subtarea.IDTarea = tarea.ID where tarea.IDProyecto =${projectId};`;
  
    //todo: llamar a la base de datos
    return new Promise<String>((resolve, reject) => {
      this.dbConection
      .makeQuery(sqlStatement)
      .then((response) => {
        
        resolve(response);
      })
      .catch((error) => {
        
        reject(error.sqlMessage);
      });
    })
  }
}
