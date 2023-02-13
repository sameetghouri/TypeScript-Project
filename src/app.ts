// const anchor = document.querySelector('a')!;// "!" means that "a" is not null it will give some value 
// // if(anchor){
// // console.log(anchor.href)};
// console.log(anchor)

class Invoice {
    client:string;
    details:string;
    amount:number;

    constructor(c:string,d:string,a:number){
        this.client=c;
        this.details=d;
        this.amount=a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
const inOne = new Invoice('mario','work on the  website',250)
const inTwo = new Invoice('yoshi','work on the website',300)
console.log(inOne,inTwo)

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