class TeamDto {
    constructor(idTeam, name, liderId,Participants)
    {
        this.idTeam = idTeam;
        this.name = name;
        this.liderId = liderId ;
        //this is an array of ParticipantAvatarDto
        this.Participants = Participants ;
    }
}

module.exports = TeamDto;