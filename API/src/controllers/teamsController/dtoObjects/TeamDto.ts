export default class TeamDto {
    idTeam: any;
    name: any;
    liderId: any;
    Participants: any;
    constructor(idTeam: any, name: any,Participants: any)
    {
        this.idTeam = idTeam;
        this.name = name;
        
        //this is an array of ParticipantAvatarDto
        this.Participants = Participants ;
    }
}

