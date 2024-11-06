import {makeAutoObservable} from 'mobx';
import {TaskListModel} from '../models/TaskListModel.tsx';
import {TodoListService} from '../services/TodoListService.tsx';

export class ToDoListStore {
    taskListModel: TaskListModel | null = null;
    isLoading = false;
    toDoListService;

    constructor() {
        makeAutoObservable(this);
        this.toDoListService = new TodoListService();
    }

    getListObjectFromService = () => {
        const model = this.toDoListService.getAndPrepareDataForStore();
        this.setListModel(model);
    };

    addTask = (text: string) => {
        this.setIsLoading(true);
        const model = this.toDoListService.addTaskToList(this.taskListModel!, text);
        this.setListModel(model);
        this.setIsLoading(false);
    };

    deleteTask = (id: number) => {
        this.setIsLoading(true);
        const model = this.toDoListService.deleteTaskFromList(this.taskListModel!, id);
        this.setListModel(model);
        this.setIsLoading(false);
    };

    changeIsCompleted = (id: number) => {
        this.setIsLoading(true);
        const model = this.toDoListService.changeIsCompleted(this.taskListModel!, id);
        this.setListModel(model);
        this.setIsLoading(false);
    };
    setListModel = (value: TaskListModel) => {
        this.taskListModel = value;
    };
    setIsLoading = (value: boolean) => {
        this.isLoading = value;
    };
}
