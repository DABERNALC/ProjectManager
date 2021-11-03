export default class KanbanDto {
    name: any;
    color: any;
    projectId: any;
    toDo: any;
    doing: any;
    done: any;
    liderId: string;
    constructor(liderId:string,projectId:any,toDo:any,doing:any,done:any)
    {
        this.liderId = liderId,
        this.projectId  = projectId,
        this.toDo = toDo
        this.doing = doing
        this.done = done
    }
}

