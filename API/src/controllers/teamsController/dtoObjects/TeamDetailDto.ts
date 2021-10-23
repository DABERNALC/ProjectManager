export default class TeamDetailDto {
    idTeam: any;
    name: any;
    liderId: any;
    Participants: any;
    proyects: Array<string>;
    constructor(idTeam: any, name: any,Participants: any,Proyects: Array<string>)
    {
        this.idTeam = idTeam;
        this.name = name;
        
        //this is an array of ParticipantAvatarDto
        this.Participants = Participants ;
        this.proyects = Proyects;
    }
}

