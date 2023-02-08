let character = 'mario';
let age = 30;
let isBlackBelt = false;

character = 'luigi';
age = 40;
isBlackBelt = true;

//Arrays
let names = ['luigi','mario', 'yoshi' ];
names.push ('load') //can not assign the number value

let numbers = [10,40,50]
numbers.push(30) //can not assign the string value

let mixed = ['ken',4,'chuli',9,10]
mixed.push('ryu')
mixed.push(10)
mixed[0]=3 //can assign the number or strings value
console.log(mixed)

//Objects
let ninja ={
    name:'mario',
    belt:'black',
    age:30
}

ninja.age = 40; //only assign number
ninja.name='ryu'; //only assign string
//ninja.skill= ['fighting','swimming'] -- can not assign a new property to a object
ninja ={name:'yoshi',belt:'blue', age:25}
//you can assign the object with the updated property values but properties must be same

//Explicit types
let chara:string;
let ag:number;
let isloggedin:boolean; 

ag=30;
isloggedin=true;

//arrays
let ninjas:string[] = [] //must initialize it with the empty array otherwise array.push won't work 
ninjas=['yoshi','mario']

//union types
let  mix:(string|number|boolean)[]=[];
mix.push('hello')
mix.push(20)
mix.push(false)
console.log(mix)

let uid: string|number;
uid="124";
uid=124;

//objects
let ninjaone: object;
ninjaone={name:"yoshi",age:40}

let ninjatwo:{
    name:string,
    age:number,
    belt:string
}
ninjatwo={name:'mario',age:23,belt:'black' }

//Dynamic Values
let agv:any = 25;
agv =true;
console.log(agv)
agv='hello'
console.log(agv)

let mix2: any[]=[];
mix2.push(75);
mix2.push('mario')
mix2.push(false)
console.log(mix2)

let ninjas2: {name:any, age:any};
ninjas2={name:'yoshi',age:25}
console.log(ninjas2)
ninjas2={name:25,age:'yoshi'}
console.log(ninjas2)



