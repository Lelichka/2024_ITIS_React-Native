import {CharacterStore} from "./modules/Characters/CharacterStore.ts";
import React from "react";

class RootStore {
    characterStore;
    constructor() {
        this.characterStore = new CharacterStore();
    }
}
export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);