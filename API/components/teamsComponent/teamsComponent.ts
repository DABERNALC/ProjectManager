import Teams from "../teamsComponent/Teams"

export default class teamsControllerSingleton {
  instance: any;
  teams: any;
    constructor()
    {
      const instance = this.instance;
      if (instance) {
        return instance;
      }
      this.teams = new Teams();
      this.instance = this;
    }
    async createTeam(req:any){
        //getting the parameters from the request
        const liderId = req.body.liderId;
        const teamName = req.body.teamName;
        //logic to create a team
        this.teams.addTeam(liderId,teamName);
        console.log(this.teams)
        //todo: llamar a la base de datos
        
    }
    
}

