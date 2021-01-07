/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Dongchan Oh, Student ID: 128975190, Date: 2020-05-22
*
********************************************************************************/



/*****************************
* Task 1: Description as Comments
*****************************/
console.log("Infinity : Number data type which mean infinity number");
console.log("Example: "+ (12/0));

console.log("Undefined means data type of variable is not determined yet");
console.log("var x;\n" + "console.log(x);\n");
var x; 
console.log("The result is: " + console.log(x));

console.log("NaN means 'Not a Number' for Number data type\n");
console.log(100 / "Apple");  
console.log("\n\n");



/*****************************
* Task 2: Conversion
*****************************/
var val;
val = parseInt(1010, 2)
console.log("convert 1010 (binary) to decimal is " + val + "\n");

val = parseInt("AF", 16)
console.log("convert AF (hex) to decimal is " + val + "\n");

val = parseInt(713, 8)
console.log("convert 713 (Octal) to decimal is " + val + "\n");
console.log("\n\n");



/*****************************
* Task 3: Celsius and Fahrenheit temperatures
*****************************/
var celcius = 250;
var fahrenheit = celcius * 9/5 + 32;
console.log(celcius + "C is " + fahrenheit + "F");

fahrenheit = 400;
celcius = (fahrenheit - 32) * 5/9;
console.log(fahrenheit + "F is " + celcius + "C");
console.log("\n\n");



/*****************************
* Task 4: Larger or largest number
*****************************/
var input1 = 5, input2 = 12;
function largerNum(a, b){
    return Math.max(a, b);
}
var largerNum = largerNum(input1, input2);
console.log("The larger number of " + input1 + " and " + input2 + " is " + largerNum); 

input1 = 23; input2 = 45;
greaterNum = function(a, b){
    return Math.max(a, b);
}
console.log("The greater number of " + input1 + " and " + input2 + " is " + greaterNum(input1, input2)); 
console.log("\n\n");



/*****************************
* Task 5: Evaluator
*****************************/
function Evaluator(...args) {
    console.log(`number of arguments: ${args.length}`);

    var average = 0;
    for (var arg of args) {
      average += arg;
    }
    var result = ((average/args.length) >= 25) ? "true" : "false"; 
    console.log("Average of [" + args + "] is grater than or equal to 25: " + result + "\n"); 
}

Evaluator(Math.floor(Math.random()*50), Math.floor(Math.random()*50), Math.floor(Math.random()*50));
Evaluator(Math.floor(Math.random()*50), Math.floor(Math.random()*50), Math.floor(Math.random()*50));
Evaluator(Math.floor(Math.random()*50), Math.floor(Math.random()*50), Math.floor(Math.random()*50));
console.log("\n\n");



/*****************************
* Task 6: ShowMultiples
*****************************/
function showMultiples(num, numMultiples){
    for(var i = 1; i <= numMultiples; i++){
        console.log(num + " x " + i + " = " + (num*i)); 
    }
}
showMultiples(5,4)
console.log("\n");
showMultiples(7,5)
console.log("\n");
showMultiples(9,3)
console.log("\n\n");



/*****************************
* Task 7: Closure/Self Invoking
*****************************/
var Increment = (function(){
    var counter = 100;

    return{
        inner: function(){
            counter += 100;
        },
        returnCounter: function(){
            return counter;
        }
    }
})();

Increment.inner();
Increment.inner();
Increment.inner();
console.log(Increment.returnCounter() + " is the final value for the third call");