/*JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date
*/


/*
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let ar = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

console.log("Hello Ocean Academy");
console.log(10+10);

// DATATYPES
// "hello good morning" ------ String


var a=10; //-------Variable declaration and initialization
console.log(a); //-OutPut: 10
a=20;//-------------------------New declaration
console.log(a); //-OutPut: 20
a="Hello";//--------------------New declaration
console.log(a); //-OutPut: Hello

//------------------------------------------------------------
// CONSTANT VARIABLE CANNOT BE CHANGE ONCE DECLARED
const ab=20;
console.log("Constant variable is", ab);
/*b=30; // CAN NOT TO BE RE-DECLARE*/
//-------------------------------------------------------------------------------

/* 8 TYPES OF DATATYPES:


JAVASCRIPT TYPES ARE DYNAMIC*/
/*
 let x; // Undefiened
 x=5; // number
 x="John" // string

 // Single quotes or Double quotes
 
 var myVar='Hello, Welcome to "Ocean Academy"';
 
 console.log(myVar);
 console.log(typeof(myVar));
//result: Hello, Welcome to "Ocean Academy"
 
 var myVar1='Hello, Welcome to \'Ocean Academy\'';
 // \- escape character
 console.log(myVar1);
 console.log(typeof(myVar1));
//result: Hello, Welcome to 'Ocean Academy'

//EXPONENTIATION
var numberExponentiation =2**6;
// 2*2*2*2*2*2 = 64
console.log(numberExponentiation);
console.log(typeof(numberExponentiation));

//DIVISION
var numberDivision = 5/2;
// 5/2 = 2.5
console.log(numberDivision);
console.log(typeof(numberDivision));

var numberModule = 5%2;
// 5/2 = 2 + 1/2 so Remeinding number = 1
console.log(numberModule);
console.log(typeof(numberModule));

// INGRIMENT OPERATOR

var a=10;
console.log (a);
a++;  //post increment a=a+1
console.log(a); // a=11

var b=10;
console.log (b);
b--;  //post degrement b=b-1
console.log(b); // b=9

var c=10;
console.log (c);
++c;  //pre-increment c=c+1
console.log(c); // c=11

var d=10;
console.log (d);
d--;  //pre-degrement b=b-1
console.log(d); // d=9

var f=10;
var g=a; // f=g=10
console.log(g);

var h=10;
var j=++h; // a=11, h=j=11.
// toujours les opération commence par le valeur droite de "=".
console.log("h=", h);
console.log("j=", j);

var k=10;
var l=k++; // k b=10, l=11
console.log("k=", k); //k=10
console.log("l=", l);  // l=11t


// -------JavaScript Assignment Operators--------

var number =10;
number+=10;//number= number+10;
console.log(number); // number = 20

number-=number; // number= number-10; 
console.log(number); // number= 10;
number*= 10; // number=number*10;
console.log(number); //number=100

//----Compari
son--------------------------
// ------Comparison operator-----
var num=10;
var num1=120;
console.log(a==b); // False

var num2=10;
var num3=120;
console.log(a!=b); // True

var num4="10";
var num5=120;
console.log(a===b); // False - datatypes are different so False

var num6=110;
var num7=100;
console.log(num6>num7); //   110>100 --- True
console.log(num6<num7); //   110<100 --- False

var num8=110;
var num9=110;
console.log(num6>=num7); //   110>=100 --- True
console.log(num6<=num7); //   110=<100 --- False

*/


// _______________________________________________________________________

// ARRAY IS TO STRORE A COLLECTION OF STORAGES:
// Exemples: 
//let  a=[10, 20, 30, "Hello" ]; 
// Collections of values of differents types.
//dynamic type

/*console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);*/

// ==> Repeating code, to reduce the code we can use FOR LOOP

/*First Methode

let  a=[10, 20, 30, "Hello" ]; 
for(let i=0; i<4; i++){
    console.log(i);
    console.log(a[i]);
}
*/
/*
-----------------------------
//FOR IN LOOP

let  a=[10, 20, 30, "Hello" ]; 
for(let i in a){
    console.log(i);
} 
------------------------------ */

// FOR OF LOOP
/*
let  a=[10, 20, 30, "Hello" ]; 
for(let i of a){
    console.log(i);
} */


// ____________________________________________________
/*  JavaScript Array Methods:

Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
The methods are listed in the order they appear in this tutorial page
*/

// ARRAY SLICE

/*const number = [10, 20, 30, 40, 50, 60];
const newNumber = number.slice(1, 6);
console.log(newNumber);

// ARRAY SPLICE
const number1 = [10, 20, 30, 40, 50, 60];
const newNumber1 = number1.slice(1, 6);
console.log(newNumber1);
number1.splice(5, 3, "Python", "Java", "Html");
console.log(number1);

// exemple :
const number2 = [10, 20, 30, 40, 50, 60];
const newNumber2 = number2.slice(1, 6);
console.log(newNumber2);
number2.splice(5, 0, "Python", "Java", "Html"); // (5?0)
console.log(number2); */
/*
var stringData = "Hello 'Good Morning'";
console.log(stringData);
console.log(string.lenght);
for ( let i=0; i<stringData.length; i++){
    console.log(stringData);
} */

//_____________________________________________________________________________

//STRING METHODS :

// const str = "Welcome Ocean Academy";
// console.log(str);

// console.log("String lenght=", str.length);
// /*
//JavaScript String slice() 
// slice(start, end)

// const newStr = str.slice(7,13);
// console.log("New string=", newStr);
// */
//-----------------
//JavaScript String substring()
// slice(start, end)
// const newStr = str.substring(-10, 8);
// const newStr = str.
// console.log();


//----------------------------------------------------
//Replacing String Content
// var text = "Hello welcome to ocean academy, ocean academy is a programming language training center.";
// var newText = text.replace(/ocean academy/ig, "OCEAN ACADEMY");
// // i for check and replace the first element only.
// // g for check and replace the global element only.
// //The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// //var newText = text.replace(/ocean academy/ig, "OCEAN ACADEMY");

// //var text = "Hello welcome to ocEAn academy, ocean aCAdemy is a programming language training center.";
// //var newText = text.replaceAll(/ocean academy/ig, "OCEAN ACADEMY");
// //If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.
// console.log(text);
// console.log(newText);
//---------------------------------66

//Converting to Upper and Lower Case
// var text = "Hello welcome to ocEAn academy, ocean aCAdemy is a programming language training center.";
// var newText = text.replaceAll(/ocean academy/ig, "OCEAN ACADEMY");
// console.log(text);
// var upperString=text.toLocaleLowerCase();
// var lowerString = text.toLocaleLowerCase();
// console.log(lowerString);

//-----------------------------------------
// JavaScript String concat()

// concat() joins two or more strings:
/*
var s1= "Hello";
var s2 = "Wordl";
// var result = s1.concat("", s2); 
//OR
var result = s1 + " "+s2;
console.log(result);
*/
//-----------------------------------------
// JavaScript String trim()

// The trim() method removes whitespace from both sides of a string:
/*
var text = "                         Hello Wordl";
console.log(text);
console.log(text.length);
var trimText = text.trim();
console.log(trimText);
console.log(trimText.length); */

//------------------------------------
// JavaScript String Padding

// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.
// JavaScript String padStart()

// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.

//  var text = "Hello";
//  var newText = str.padStart()

//  ------------------------------------------------
// JavaScript String charAt()

// The charAt() method returns the character at a specified index (position) in a string:
/*var str = "Hello welcome to Ocean Academy";
console.log(str);
console.log(str[5]);
console.log(str.charAt(8));
console.log(str.charCodeAt(10)); */

// Converting a String to an Array

// If you want to work with a string as an array, you can convert it to an array.
// JavaScript String split()

// A string can be converted to an array with the split() method
/*
console.log(str.split(" "));
console.log(result); */

//------------------------------------------------------
//BREAK AND CONTINUE
/*
var i = 0;
while (i<10){
    if (i==6){
        break;
    }
    console.log(i);
    i++;
}
*/
/*
var j = 0;
while (j<10){
    if (j==6){
        j++;
        continue;
    }
    console.log(j);
    j++;
}*/
























/*
// Current temperature
const kelvin = 293;

// Convert Kelvin to Celsius
const celsius= kelvin - 273;

// Equation to calculate Fahrenheit 
let fahrenheit = celsius* (9/5) + 32;

// To round the result, without decimal
fahrenheit = Math.floor(fahrenheit);

// Printing Message : Using string interpolation
console.log(`Temperature is ${fahrenheit}, degrees Fahrenheit.`);
*/

