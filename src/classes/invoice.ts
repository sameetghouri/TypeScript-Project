export class Invoice {
    // public client:string;
    // private details:string;
    // readonly amount:number;

    // constructor(c:string,d:string,a:number){
    //     this.client=c;
    //     this.details=d;
    //     this.amount=a;
    // }

    constructor(      // you have to use teh acesses modifiers to assign the values directly in the constructor parameters
        public client:string,
        private details:string,
        readonly amount:number
    ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
