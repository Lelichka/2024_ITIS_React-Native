import {CharacterStore} from "./modules/Characters/CharacterStore.ts";
import React from "react";
import {SpellsStore} from "./modules/Spells/SpellsStore.ts";

class RootStore {
    characterStore;
    spellsStore;
    constructor() {
        this.characterStore = new CharacterStore();
        this.spellsStore = new SpellsStore();
    }
}
export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
