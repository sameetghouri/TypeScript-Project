import { Invoice } from "./classes/invoice.js";
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
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber //ValueAsNumber would not turn the number into a string
    );
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
