const Team = require("../teamsComponent/Team") 
class Teams 
{
    constructor()
    {
        this.teams = [];
    }
    addTeam(liderId,teamName,teamTag)
    {
        const team = new Team(liderId, teamName,teamTag)
        this.teams.push(team);
    }
    getTeams()
    {
        return this.teams;
    }

}

module.exports = Teams;