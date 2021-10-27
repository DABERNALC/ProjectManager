export default class KanbanDto {
    name: any;
    color: any;
    projectId: any;
    toDo: any;
    doing: any;
    done: any;
    constructor(projectId:any,toDo:any,doing:any,done:any)
    {
        this.projectId  = projectId,
        this.toDo = toDo
        this.doing = doing
        this.done = done
    }
}

