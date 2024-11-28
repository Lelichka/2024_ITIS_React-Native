export class CharacterModel{
    id: string;
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: Date;
    ancestry: string;
    wand: WandModel;
    image: string;

    constructor(id: string, name: string, species: string, gender: string, house: string, dateOfBirth: Date, ancestry: string, wand: WandModel, image: string) {
        this.id = id;
        this.name = name;
        this. species = species;
        this.gender = gender;
        this.house = house;
        this.dateOfBirth = dateOfBirth;
        this.ancestry = ancestry;
        this.wand = wand;
        this.image = image;
    }


}

export class WandModel{
    wood: string;
    core: string;
    length: number;
    constructor(wood: string, core: string, length: number) {
        this.wood = wood;
        this.core = core;
        this.length = length;
    }
}