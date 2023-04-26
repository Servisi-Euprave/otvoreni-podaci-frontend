export class Person{
    name: string;
    lastname: string;
    JMBG: number;

    constructor(obj?: any){
        this.name = obj && obj.name || null;
        this.lastname = obj && obj.lastname || null;
        this.JMBG = obj && obj.JMBG || null;
    }
}