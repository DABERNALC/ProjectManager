import TeamDto from "./TeamDto";

export default class ParticipanteLoginDto {
    map: any;
    id: String;
    name: String;
    color: String;
    teams: TeamDto[];
    proyects: any[];
    constructor(id:String,name:String,color:String,teams:Array<TeamDto>,proyects:Array<any>)
    {
        this.id = id
        this.name = name
        this.color = color
        this.teams = teams; 
        this.proyects = proyects; 
    }
}

