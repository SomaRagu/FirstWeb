

//A JavaScript function is a block of code designed to perform a particular task.

//A JavaScript function is executed when "something" invokes it (calls it).
/*
function myFunction() // Function declaration
{
    // function definition
    console.log("Hello, good morning");
}
myFunction(); // function calling or function invoking
myFunction();
------*/
//

/* ----
// default parameters or without parametere

console.log("Program strats:");
function add() //default parameters or without parametere
{
    var a=10;
    var b=20;
    var c=a+b;
    console.log("a+B", c); 

}
add()

console.log("Program end:");
*/


// ------
// With Parameters
/*
console.log("Program strats:");
function add(a, b) //With parametere
{
    
    let c=a+b;
    console.log("a+b", c); 

}
add(10, 20); // ARGUMENT
add ("Hello", " World")

console.log("Program end:");
*/

// -----FUNCTION RETURN-------
/*
console.log("Hello");
function add(a, b){
    c=a+b;
    return c;
    }

    var x = add(100, 200) + 400;
    console.log("x = ", x);
*/

//------- ANONYMOUS FUNCTION--------- 
/*
var a= function (){
    console.log("Hello world");
    console.log("anonymous function");
}
a();

var b= function (b){
    console.log("Hello Everybody, I am", b);
}
b("Raguu");



function myFunction (num){
    console.log("Hello, I am", num);
}
myFunction(37);

var result = function (num1, num2){
    return num1 + num2;
   
}
console.log(((2,4)));
*/

// ----ARROW FUNCTION
 var c= function(){
    console.log(("Hello Good Morning"));
 }
 c();

 // Same Code with Arrow function

var b=()=> {
    console.log("With Arrow function, Hello Good Morning");
}
b()
//--------

var c = function(){
    return "Hello"
}
console.log(c());

// in arrow function

var d=()=> "Arrow function Hello";
console.log(d());
//-------------
// ARROW FUNCTION WITH PARAMETER

var cube = (num)=> {
    var c=num**3;
    return c;
}
console.log("aresult is", cube(2));
// IN OTHER WAY

var cube2 = (num2)=> num2**3;
console.log("result", cube2(2));
//---------------

// OLD OR NORMAL WAY WITHOUT ARROW FUNCTION
// Named function
function cubeValue (n) {
var result2 = n**3;
return result2;
    }
    console.log(cubeValue(6));

//-----Anonymous function
var anonymousFunctionCube = function (n) {
    var result3= n**3;
    return result3;
}
console.log(anonymousFunctionCube(5));

// ----- SELF INVOCING FUNCTION---------

(function () {
    console.log("Hello world");
}) ();

var a = function(num1, num2){
    console.log(num1+num2);
}
a(2,4);


(function (n1, n2) {
    console.log(n1+n2);
}) (2,3);
//--------------------------//
// Commun changes in a ARRAY
var array = [10,20,30,40,50];
var newArray = [];
for (let eachData of array){
    newArray.push(eachData +2);
}
console.log(array);
console.log(newArray);

// USING  ".MAP" FUNCTIONS

function myFunction(n) {
    return n+2;
}

var result = array.map(myFunction);
console.log(result);
//--------------------------------------------//
// FILTER METHODS FUNCTION

/*
// WITHOUT USING FILTER METHODS
var array= [10, 11, 12, 13, 14, 15, 16 ];
var evenArray=[];
for (let eachData of array){
    if 
    (eachData %2==0){
        evenArray.push(eachData);
    }
}
console.log(evenArray);
*/
/*
//----WITH USING FILTER METHODS---
var array= [10, 11, 12, 13, 14, 15, 16 ];
function myFunction(n) {
    if (n %2) {
        return true;
    }
    else{
        return false;
    }
    var response = array.filter(myFunction);
    console.log(reponse);
}
*/
//----------------------------------------

// REDUCE METHODS FUNCTION
/*
//Without Using Reduce methods

var array= [10, 11, 12, 13, 14, 15, 16 ];
var temp=0;
for (let eachData of array ){
    temp= temp+eachData;
} 
console.log();

*/

// Using Methods Function
var array= [10, 11, 12, 13, 14, 15, 16 ];
function add(a, b) {
    return a+b;
}
var response2 = array.reduce(add);
console.log(response2);

//-----------------------------------------------//



