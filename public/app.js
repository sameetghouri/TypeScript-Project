import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
// const anchor = document.querySelector('a')!;// "!" means that "a" is not null it will give some value 
// // if(anchor){
// // console.log(anchor.href)};
// console.log(anchor)
// const form = document.querySelector('form')
const form = document.querySelector('.new-item-form'); //Type Casting. Casting an element's type
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber //ValueAsNumber would not turn the number into a string
    // )
});
//Classes
const inOne = new Invoice('mario', 'work on the  website', 250);
const inTwo = new Invoice('yoshi', 'work on the website', 300);
let invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
invoices.forEach(i => {
    console.log(i.client, i.amount, i.format());
});
const me = {
    name: 'shaun',
    age: 24,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend', amount);
        return amount;
    }
};
// let someone: isPerson;
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
// Formating
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'web work', 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
