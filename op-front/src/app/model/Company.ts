import { Delatnost } from "./Delatnost";
import { NSTJ } from "./NSTJ";
import { Person } from "./Person";

export class Company {
    vlasnik: Person;
    pib:number;
    naziv: string;
    adresaSedista: string;
    mesto:string;
    postanskiBroj: string;
    delatnost: Delatnost;
    sediste: NSTJ;

    constructor(obj?: any){
        this.vlasnik = obj && obj.vlasnik || null;
        this.pib = obj && obj.pib || null;
        this.naziv = obj && obj.naziv || null;
        this.adresaSedista = obj && obj.adresaSedista || null;
        this.mesto = obj && obj.mesto || null;
        this.postanskiBroj = obj && obj.postanskiBroj || null;
        this.delatnost = obj && obj.delatnost || null;
        this.sediste = obj && obj.sediste || null;
    }
}
