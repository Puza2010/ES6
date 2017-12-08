//const sayHello = () => console.log('Hello world!');
//sayHello();

// Task 1 //
const sayHello = (x, y) => console.log(`${x} ${y}`);
sayHello('Hello', 'World');

// Task 2 //
const multiply = (a = 1, b = 1) => console.log(a * b);
multiply(5);

// Task 3 //
const average = (...args)=> args.forEach(arg => console.log(arg));
average(5);

var sum = 0;

function logAllArguments() {
    for (var i=0; i < arguments.length; i++) {
    	sum += arguments[i];
    }
    console.log(sum/arguments.length);
}

logAllArguments(5, 5, 2);

// Task 4 //
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

// Task 5 //

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,firstname, ,lastname] = array;

console.log(firstname, lastname);