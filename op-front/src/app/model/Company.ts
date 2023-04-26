import { Delatnost } from "./Delatnost";

export class Company {
    vlasnik: number;
    PIB:number;
    naziv: string;
    adresaSedista: string;
    mesto:string;
    postanskiBroj: string;
    delatnost: Delatnost;
    sediste: string;
    password: string;
    likvidirana: boolean;

    constructor(obj?: any){
        this.vlasnik = obj && obj.vlasnik || null;
        this.PIB = obj && obj.PIB || null;
        this.naziv = obj && obj.naziv || null;
        this.adresaSedista = obj && obj.adresaSedista || null;
        this.mesto = obj && obj.mesto || null;
        this.postanskiBroj = obj && obj.postanskiBroj || null;
        this.delatnost = obj && obj.delatnost || null;
        this.sediste = obj && obj.sediste || null;
        this.password = obj && obj.password || null;
        this.likvidirana = obj && obj.likvidirana || null;
    }
}
