import CharacterRepository from './CharacterRepository.ts';
import {CharacterModel, WandModel} from './CharacterModel.ts';

export default class CharacterService {
    itemRepository; // private
    constructor() {
        this.itemRepository = new CharacterRepository();
    }

    getAllCharacters = async (): Promise<CharacterModel[]> => {
        const res = await this.itemRepository.getAllCharactersFromApi();
        return res.data.slice(0, 10).map((item: any) => {
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
}
