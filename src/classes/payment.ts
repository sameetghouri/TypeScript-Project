import {hasFormater} from '../interfaces/hasFormater.js'
export class Payment implements hasFormater {
   

    constructor(
        public recipient:string,
        private details:string,
        readonly amount:number
    ){}

    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}