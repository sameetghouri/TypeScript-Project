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
