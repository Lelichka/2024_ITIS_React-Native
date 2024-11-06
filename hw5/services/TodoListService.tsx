import ToDoListRepository from '../repositories/ToDoListRepository.tsx';
import {TaskListModel} from '../models/TaskListModel.tsx';
import {TaskModel} from '../models/TaskModel.tsx';

export class TodoListService {
    toDoListRepository;
    id: number = 0;
    constructor() {
        this.toDoListRepository = new ToDoListRepository();
    }

    getAndPrepareDataForStore = () => {
        const data = this.toDoListRepository.getListFromExternalStorage();

        const model = new TaskListModel();
        model.list = data.savedList;
        this.id = model.list.length;

        return model;
    };
    addTaskToList = (model: TaskListModel, name: string) => {
        const newId = this.id;
        this.id++;
        const newElement = new TaskModel(newId, name);
        model.list.push(newElement);
        return model;
    };
    deleteTaskFromList = (model : TaskListModel, id: number) => {
        let elemId = model.list.findIndex(task => task.id === id);
        model.list.splice(elemId, 1);
        return model;
    };

    changeIsCompleted = (model : TaskListModel, id: number) => {
        let elemId = model.list.findIndex(task => task.id === id);
        model.list[elemId].isCompleted = !model.list[elemId].isCompleted;
        return model;
    };
}
