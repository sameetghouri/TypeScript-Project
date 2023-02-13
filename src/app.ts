import {Invoice} from "./classes/invoice.js"
import {Payment} from "./classes/payment.js"
import {hasFormater} from "./interfaces/hasFormater.js"

// const anchor = document.querySelector('a')!;// "!" means that "a" is not null it will give some value 
// // if(anchor){
// // console.log(anchor.href)};
// console.log(anchor)


// const form = document.querySelector('form')
const form = document.querySelector('.new-item-form') as HTMLFormElement; //Type Casting. Casting an element's type

//inputs
const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc: hasFormater;
    if (type.value ==='invoice'){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    }else{
        doc =new Payment(tofrom.value,details.value,amount.valueAsNumber)
    }
    console.log(doc)
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber //ValueAsNumber would not turn the number into a string
    // )
})

//Classes

const inOne = new Invoice('mario','work on the  website',250)
const inTwo = new Invoice('yoshi','work on the website',300)

let invoices: Invoice[]=[];
invoices.push(inOne);
invoices.push(inTwo);

invoices.forEach(i =>{
    console.log(i.client,i.amount,i.format())
})

//Interface 
interface isPerson {
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;
} 
const me: isPerson={
    name : 'shaun',
    age:24,
    speak(text:string):void{
        console.log(text);
    },
    spend(amount:number):number{
        console.log('I spend',amount);
        return amount  
    }
};
// let someone: isPerson;
const greetPerson =(person:isPerson)=>{
    console.log('hello',person.name)
}
greetPerson(me)

// Formating
let docOne:hasFormater
let docTwo:hasFormater
docOne = new Invoice ('yoshi','web work',250);
docTwo = new Payment ('mario','web work',300);

let docs: hasFormater[]=[];
docs.push(docOne);
docs.push(docTwo);
console.log(docs)