export default class ProjectDetailDto {
    idTeam: any;
    name: any;
    liderId: any;
    Participants: any;
    proyects: Array<string>;
    description: any;
    customer: string;
    teamName: string;
    teamId: string;
    projectId: any;
    constructor(projectId: any, name: any,description: any,customer: string,teamId:string)
    {
        this.projectId = projectId;
        this.name = name;
        this.description = description;
        //this is an array of ParticipantAvatarDto
        this.customer = customer ;
        this.teamId= teamId;
        
    }
}

