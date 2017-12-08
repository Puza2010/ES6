'use strict';

//const sayHello = () => console.log('Hello world!');
//sayHello();

// Task 1 //
var sayHello = function sayHello(x, y) {
    return console.log(x + ' ' + y);
};
sayHello('Hello', 'World');

// Task 2 //
var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return console.log(a * b);
};
multiply(5);

// Task 3 //
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return args.forEach(function (arg) {
        return console.log(arg);
    });
};
average(5);

var sum = 0;

function logAllArguments() {
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum / arguments.length);
}

logAllArguments(5, 5, 2);

// Task 4 //
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

// Task 5 //

var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = array[2],
    lastname = array[4];


console.log(firstname, lastname);
