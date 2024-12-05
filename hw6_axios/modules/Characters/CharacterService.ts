import CharacterRepository from './CharacterRepository.ts';
import {CharacterModel, WandModel} from './CharacterModel.ts';
import CharacterLocalRepository from './CharacterLocalRepository.ts';

export default class CharacterService {
    characterRepository;
    localCharacterRepository;

    constructor() {
        this.characterRepository = new CharacterRepository();
        this.localCharacterRepository = new CharacterLocalRepository();
    }

    getAllCharacters = async (): Promise<CharacterModel[]> => {
        const res = await this.characterRepository.getAllCharactersFromApi();
        const slicedRes = res.data.slice(0, 11);
        await this.localCharacterRepository.setCharacters(slicedRes);
        return slicedRes.map((item: any) => {
            return new CharacterModel(item.id,
                item.name,
                item.species,
                item.gender,
                item.house,
                item.dateOfBirth,
                item.ancestry,
                new WandModel(item.wand.wood, item.wand.core, item.wand.length),
                item.image);
        });
    };
    getCharactersFromLocal = async (): Promise<CharacterModel[]> => {
        const localRes = await this.localCharacterRepository.getAllCharacters();
        return localRes ? localRes.map((item: any) => {
            return new CharacterModel(item.id,
                item.name,
                item.species,
                item.gender,
                item.house,
                item.dateOfBirth,
                item.ancestry,
                new WandModel(item.wand.wood, item.wand.core, item.wand.length),
                item.image);
        }) : null;
    };

    removeCharactersFromLocal = async () => {
        await this.localCharacterRepository.removeAllCharacters();
    };
}
