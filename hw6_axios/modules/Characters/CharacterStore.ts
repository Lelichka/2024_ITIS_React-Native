import {CharacterModel} from './CharacterModel.ts';
import {makeAutoObservable} from 'mobx';
import CharacterService from './CharacterService.ts';

export class CharacterStore {
    characters?: CharacterModel[];
    isLoading: boolean;
    characterService;

    constructor() {
        makeAutoObservable(this);
        this.characterService = new CharacterService();
        this.characters = [];
        this.isLoading = false;
    }

    getAllCharacters = async () => {
        this.setIsLoading({isLoading: true});
        this.characterService.getAllCharacters()
            .then(res => this.setCharacters(res))
            .catch(error => console.log(error))
            .finally(() => {
                this.setIsLoading({isLoading: false});
            });
    };

    private setIsLoading = ({isLoading: isLoading}: { isLoading: boolean }) => {
        this.isLoading = isLoading;
    };
    private setCharacters = (value: CharacterModel[]) => {
        this.characters = value;
    };
}
