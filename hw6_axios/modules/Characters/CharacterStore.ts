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
        const localCharacters = await this.characterService.getCharactersFromLocal();
        if (localCharacters) {
            this.setCharacters(localCharacters);
            this.setIsLoading({isLoading: false});
            return;
        }

        this.characterService.getAllCharacters()
            .then(res => this.setCharacters(res))
            .catch(error => {
                console.log(error);
                this.setCharacters([]);
            })
            .finally(() => {
                this.setIsLoading({isLoading: false});
            });
    };
    removeCharactersFromLocalStorage = async () => {
        await this.characterService.removeCharactersFromLocal();
        await this.getAllCharacters();
    };

    private setIsLoading = ({isLoading: isLoading}: { isLoading: boolean }) => {
        this.isLoading = isLoading;
    };
    private setCharacters = (value: CharacterModel[]) => {
        this.characters = value;
    };
}
