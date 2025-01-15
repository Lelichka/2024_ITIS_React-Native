import SpellsRepository from "./SpellsRepository.ts";
import {SpellModel} from "./SpellModel.ts";


export default class SpellsService {
    spellsRepository;

    constructor() {
        this.spellsRepository = new SpellsRepository();
    }

    getAllSpells = async (): Promise<SpellModel[]> => {
        const res = await this.spellsRepository.getAllSpellsFromApi();
        const slicedRes = res.data.slice(0, 21);
        return slicedRes.map((item: any) => {
            return new SpellModel(item.id,
                item.name,
                item.description);
        });
    };
}
