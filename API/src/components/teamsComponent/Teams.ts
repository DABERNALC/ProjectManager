export default class Teams 
{
    teams: any[];
    constructor()
    {
        this.teams = [];
    }
    addTeam(liderId: any,teamName: any)
    {
        const team = {liderId,teamName}
        this.teams.push(team);
    }
    getTeams()
    {
        return this.teams;
    }
}

