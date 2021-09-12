const Teams = require("../teamsComponent/Teams");

class teamsControllerSingleton {
    constructor()
    {
      const instance = this.constructor.instance;
      if (instance) {
        return instance;
      }
      this.teams = new Teams();
      this.constructor.instance = this;
    }
    async createTeam(req,res){
        //getting the parameters from the request
        const liderId = req.query.liderId;
        const teamName = req.query.teamName;

        
        //logic to create a team
        this.teams.addTeam(liderId,teamName);
        //todo: llamar a la base de datos
        
        //regresar respuesta
        res.json({
            status:"ok",
            message:`i created the team "${teamName}""`,
            currentTeams: this.teams.getTeams()
        });
    }
    
}

module.exports =teamsControllerSingleton;