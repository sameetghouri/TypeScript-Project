import {Invoice} from "./classes/invoice.js"
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
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber //ValueAsNumber would not turn the number into a string
    )
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

