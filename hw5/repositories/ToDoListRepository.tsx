import {TaskModel} from "../models/TaskModel.tsx";

export default class ToDoListRepository {
    getListFromExternalStorage = () => {
        return {
            savedList : [new TaskModel(0, 'task1'), new TaskModel(1, 'task2')],
        }
    }
}