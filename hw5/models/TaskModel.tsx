export class TaskModel {
    id: number;
    name : string = 'task';
    isCompleted : boolean = false;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}