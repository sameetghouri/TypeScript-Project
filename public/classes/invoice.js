export class Invoice {
    // public client:string;
    // private details:string;
    // readonly amount:number;
    // constructor(c:string,d:string,a:number){
    //     this.client=c;
    //     this.details=d;
    //     this.amount=a;
    // }
    constructor(// you have to use teh acesses modifiers to assign the values directly in the constructor parameters
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
