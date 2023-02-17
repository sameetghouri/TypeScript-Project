import {Invoice} from "./classes/invoice.js"
import { ListTemplate } from "./classes/listTemplate.js";
import {Payment} from "./classes/payment.js"
import {hasFormater} from "./interfaces/hasFormater.js"

// const anchor = document.querySelector('a')!;// "!" means that "a" is not null it will give some value 
// // if(anchor){
// // console.log(anchor.href)};
// console.log(anchor)/


// const form = document.querySelector('form')
const form = document.querySelector('.new-item-form') as HTMLFormElement; //Type Casting. Casting an element's type

//inputs
const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let values:[string,string,number]
    values =[tofrom.value,details.value,amount.valueAsNumber]
    let doc: hasFormater;
    if (type.value ==='invoice'){
        // doc =new Invoice(tofrom.value,details.value,amount.valueAsNumber)
        doc = new Invoice(...values)
    }else{
        // doc =new Payment(tofrom.value,details.value,amount.valueAsNumber)
        doc =new Payment(...values)
    }
    list.render(doc,type.value,'end')
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
 
//GENERICS
// const addUID1 = <T>(obj: T)=>{
// const addUID1 = <T extends object>(obj: T)=>{
    const addUID1 = <T extends {name:string}>(obj: T)=>{
    let uid= Math.floor(Math.random()*100);
    return {...obj, uid}
}
let doc1 = addUID1({name:'yoshi',age:25}); 

console.log(doc1.age)
//WITH INTERFACES
interface Resouce<T> {
    uid: number;
    resourceName:string;
    data:T;
}
const doc3: Resouce<object>={
    uid:1,
    resourceName:'person',
    data:{name:'shaun'}
}
const doc4: Resouce<string[]>={
    uid:12,
    resourceName:'shoppingList',
    data:['vege','tuna']
}
console.log(doc3,doc4)

//ENUMS
enum resoursetype{Book,Author,Film,Person}
interface Resouce1<T> {
    uid: number;
    resourceName:resoursetype;
    data:T;
}
const doc5: Resouce1<object>={
    uid:1,
    resourceName:resoursetype.Book,
    data:{name:'shaun'}
}
const doc6: Resouce1<string[]>={
    uid:12,
    resourceName:resoursetype.Person,
    data:['vege','tuna']
}
console.log(doc5,doc6)

//TUPLES
let tup: [string,number,boolean]=['ryu',25,true];
tup[0]='ken'

let student:[string,number];
student =['lee',285]
let studen1t:[string,number];
student =['lee',22]