export default class SubtasksDto {
  idProject: any;
  tasks: [];
  doingSubtasks: [];
  doneSubtasks: [];
  constructor(idProject: any, tasks: any, doingSubtasks: any, doneSubtasks: any) {
      this.idProject = idProject
      this.tasks= tasks
      this.doingSubtasks =doingSubtasks
      this.doneSubtasks =doneSubtasks
  }
}
