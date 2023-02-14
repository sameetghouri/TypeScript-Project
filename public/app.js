import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
// const anchor = document.querySelector('a')!;// "!" means that "a" is not null it will give some value 
// // if(anchor){
// // console.log(anchor.href)};
// console.log(anchor)/
// const form = document.querySelector('form')
const form = document.querySelector('.new-item-form'); //Type Casting. Casting an element's type
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        // doc =new Invoice(tofrom.value,details.value,amount.valueAsNumber)
        doc = new Invoice(...values);
    }
    else {
        // doc =new Payment(tofrom.value,details.value,amount.valueAsNumber)
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
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
//GENERICS
// const addUID1 = <T>(obj: T)=>{
// const addUID1 = <T extends object>(obj: T)=>{
const addUID1 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID1({ name: 'yoshi', age: 25 });
console.log(doc1.age);
const doc3 = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
const doc4 = {
    uid: 12,
    resourceName: 'shoppingList',
    data: ['vege', 'tuna']
};
console.log(doc3, doc4);
//ENUMS
var resoursetype;
(function (resoursetype) {
    resoursetype[resoursetype["Book"] = 0] = "Book";
    resoursetype[resoursetype["Author"] = 1] = "Author";
    resoursetype[resoursetype["Film"] = 2] = "Film";
    resoursetype[resoursetype["Person"] = 3] = "Person";
})(resoursetype || (resoursetype = {}));
const doc5 = {
    uid: 1,
    resourceName: resoursetype.Book,
    data: { name: 'shaun' }
};
const doc6 = {
    uid: 12,
    resourceName: resoursetype.Person,
    data: ['vege', 'tuna']
};
console.log(doc5, doc6);
//TUPLES
let tup = ['ryu', 25, true];
tup[0] = 'ken';
let student;
student = ['lee', 285];
