// 1. Setting Types
var myString: any; // we should changed to type any, 9 is not a string
myString = "Bee stinger";
myString = 9;

/////////////////////|°|\\\\\\\\\\\\\\\\\\\\\

// 2. Setting the type for function parameters
function sayHello(name: any){// we should changed to type any, 9 is not a string
    return `Hello, ${name}!`;
}
console.log(sayHello("Kermit"));
console.log(sayHello(9));

/////////////////////|°|\\\\\\\\\\\\\\\\\\\\\

// 3. Optional Parameters
function fullName(firstName: string, lastName: string, middleName?: string){ //we should change the middleName and add ? to it to make it optional
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Jones"));

/////////////////////|°|\\\\\\\\\\\\\\\\\\\\\

// 4. Interfacing and Function Parameters
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 // edit from "belt" to "belts"
}
console.log(graduate(christine));
console.log(graduate(jay));

/////////////////////|°|\\\\\\\\\\\\\\\\\\\\\

// 5. Classes and function parameters
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string){
            this.fullName = `${firstName} ${lastName}`;
        }
   // debug(){      
   //    console.log("Console.log() is my friend.")
   // }
}
const shane = new Ninja("Shane", "Dawson"); //add the 2 parameters that is defined in the constructor
const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
}
function study(programmer: Ninja): string{
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(turing)); // because of the debug

/////////////////////|°|\\\\\\\\\\\\\\\\\\\\\

// 6. Arrow Functions
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => x * y;
// Nor is this working:
var math = (x, y) => [x + y, x * y, Math.abs(x - y)];//new 

var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}
   //fixed the function added brackets
/////////////////////|°|\\\\\\\\\\\\\\\\\\\\\

// 7. Arrow functions and 'this'
class Elephant {
    constructor(public age: number){}
    birthday = function(){
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)