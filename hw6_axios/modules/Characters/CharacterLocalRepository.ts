import LocalClient from '../../localStorage/LocalClient.ts';

export default class CharacterLocalRepository {
    localClient: LocalClient;
    tableName: string;
    constructor() {
        this.localClient = new LocalClient();
        this.tableName = 'characters';
    }
    getAllCharacters = () => {
        return this.localClient.get(this.tableName);
    };
    setCharacters = (data: any) => {
        return this.localClient.set(this.tableName, data);
    };
    removeAllCharacters = () => {
        return this.localClient.removeAll(this.tableName);
    };
}
