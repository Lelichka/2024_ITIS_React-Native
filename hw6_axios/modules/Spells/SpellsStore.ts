import {makeAutoObservable} from 'mobx';
import {SpellModel} from './SpellModel.ts';
import SpellsService from './SpellsService.ts';

export class SpellsStore {
    spells?: SpellModel[];
    isLoading: boolean;
    spellsService;

    constructor() {
        makeAutoObservable(this);
        this.spellsService = new SpellsService();
        this.spells = [];
        this.isLoading = false;
    }

    getAllSpells = async () => {
        this.setIsLoading({isLoading: true});

        this.spellsService.getAllSpells()
            .then(res => this.setSpells(res))
            .catch(error => {
                console.log(error);
                this.setSpells([]);
            })
            .finally(() => {
                this.setIsLoading({isLoading: false});
            });
    };

    private setIsLoading = ({isLoading: isLoading}: { isLoading: boolean }) => {
        this.isLoading = isLoading;
    };
    private setSpells = (value: SpellModel[]) => {
        this.spells = value;
    };
}
