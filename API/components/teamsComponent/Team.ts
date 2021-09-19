class Team implements ITeams
{
    name: String;
    liderId: String;
    constructor(liderId: String,name: String)
    {
        this.liderId = liderId
        this.name = name
    }
}

module.exports = Team;