export class Nabavka {
    id:string;
    procuring_entity_pi_b: string;
    procurement_plan_id: string;
    start_date: Date;
    end_date: string;
    procurement_name:string;
    description: string;
    winner_id: string;
    
    constructor(obj?: any){
        this.id = obj && obj.id || null;
        this.procuring_entity_pi_b = obj && obj.procuring_entity_pi_b || null;
        this.procurement_plan_id = obj && obj.procurement_plan_id || null;
        this.start_date = obj && obj.start_date || null;
        this.end_date = obj && obj.end_date || null;
        this.procurement_name = obj && obj.procurement_name || null;
        this.description = obj && obj.description || null;
        this.winner_id = obj && obj.winner_id || null;
    }
}