//day 1
console.log("hello");
console.error("DivisionByZero");
console.warn("yellow");
console.info("any info");
let a = 5;
const b = 10;
a = "hello";
var c = 2;

//day2
let bool = true;
let und;
let nul = null;
console.log(a);
console.log(b);
console.log(c);
console.log("----------------------------");
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(bool));
console.log(typeof(und));
console.log(typeof(nul));
console.log("----------------------------");
let age = 20;
if(age>=18){
    console.log("elegible");
}
else{
    console.log("not elegible");
}
console.log("----------------------------");
let ch = 2;
switch(ch){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        break;
}
console.log("----------------------------");
for(let i=0; i<5; i++){
    console.log("in for" + i);
}
console.log("----------------------------");
//array
let arr = [10, 20, 30, 40];
console.log(arr[0]);
arr.push(50);
console.log(arr);
arr.pop();
console.log(arr);

//object

let student = {
    name: "vikas",
    age: 27
}
console.log(student.name);
console.log(student.age);

//function

function add(p,q){
    return p+q;
}
console.log(add(2,4));

//arrow function
const multiply = (p,q)=> p*q;
console.log(multiply(4,8));

//date

let today = new Date();
console.log(today);

//Maths
console.log(Math.sqrt(25));
console.log(Math.pow(2,3));
console.log(Math.random());

//string
txt = "Hello world";
console.log(txt.length);
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());
console.log(txt.includes("Hello"));

//type conversion

let strnum = "123";
let convert = Number(strnum);
console.log(strnum+10);
console.log(convert+10);

console.log(typeof(strnum));
console.log(typeof(convert));

