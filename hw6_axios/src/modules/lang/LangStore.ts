import LangService from './LangService.ts';
import {LangType} from './LangType.ts';
import {makeAutoObservable} from 'mobx';

export default class LangStore {
    langService: LangService;
    lang: LangType | undefined;
    constructor() {
        makeAutoObservable(this);
        this.langService = new LangService();
    }
    changeLang = async (newLang: LangType) => {
        this.setLang(newLang);
        await this.langService.changeLang(newLang);
    };
    getLang = async () => {
        if (!this.lang) {
            this.lang = await this.langService.getLang();
        }
        return this.lang;
    };

    setLang = (value: LangType) => {
        this.lang = value;
    };
}
