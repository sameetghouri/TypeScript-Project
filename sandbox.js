var character = 'mario';
var age = 30;
var isBlackBelt = false;
character = 'luigi';
age = 40;
isBlackBelt = true;
//Arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('load'); //can not assign the number value
var numbers = [10, 40, 50];
numbers.push(30); //can not assign the string value
var mixed = ['ken', 4, 'chuli', 9, 10];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3; //can assign the number or strings value
console.log(mixed);
//Objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40; //only assign number
ninja.name = 'ryu'; //only assign string
//ninja.skill= ['fighting','swimming'] -- can not assign a new property to a object
ninja = { name: 'yoshi', belt: 'blue', age: 25 };
//you can assign the object with the updated property values but properties must be same
//Explicit types
var chara;
var ag;
var isloggedin;
ag = 30;
isloggedin = true;
//arrays
var ninjas = []; //must initialize it with the empty array otherwise array.push won't work 
ninjas = ['yoshi', 'mario'];
//union types
var mix = [];
mix.push('hello');
mix.push(20);
mix.push(false);
console.log(mix);
var uid;
uid = "124";
uid = 124;
//objects
var ninjaone;
ninjaone = { name: "yoshi", age: 40 };
var ninjatwo;
ninjatwo = { name: 'mario', age: 23, belt: 'black' };
//Dynamic Values
var agv = 25;
agv = true;
console.log(agv);
agv = 'hello';
console.log(agv);
var mix2 = [];
mix2.push(75);
mix2.push('mario');
mix2.push(false);
console.log(mix2);
var ninjas2;
ninjas2 = { name: 'yoshi', age: 25 };
console.log(ninjas2);
ninjas2 = { name: 25, age: 'yoshi' };
console.log(ninjas2);
