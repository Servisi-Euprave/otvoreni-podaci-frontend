export class NSTJ{
    oznaka: string;
    naziv: string;

    constructor(obj? : any){
        this.oznaka = obj && obj.oznaka || null;
        this.naziv = obj && obj.naziv || null;
    }
}