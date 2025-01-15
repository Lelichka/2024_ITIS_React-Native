import AxiosClient from '../../axios/AxiosClient.ts';

export default class SpellsRepository {
    apiClient;
    constructor() {
        this.apiClient = new AxiosClient();
    }
    getAllSpellsFromApi = async () => {
        return this.apiClient.get({ url: '/spells' });
    };
}
