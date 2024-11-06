import {ToDoListStore} from "./ToDoListStore.tsx";
import React from "react";

class RootStore {
    toDoListStore;

    constructor() {
        this.toDoListStore = new ToDoListStore();
    }
}
export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);