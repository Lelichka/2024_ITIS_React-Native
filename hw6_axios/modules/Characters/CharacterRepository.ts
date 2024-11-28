import AxiosClient from '../../axios/AxiosClient.ts';

export default class CharacterRepository {
    apiClient;
    constructor() {
        this.apiClient = new AxiosClient();
    }
    getAllCharactersFromApi = async () => {
        return this.apiClient.get({ url: '/characters' });
    };
}