// CONVERT DEGREE CELCIUS TO fahrenheit

// // Current temperature
// const kelvin = 293;

// // Convert Kelvin to Celsius
// const celsius= kelvin - 273;

// // Equation to calculate Fahrenheit 
// let fahrenheit = celsius* (9/5) + 32;

// // To round the result, without decimal
// fahrenheit = Math.floor(fahrenheit);

// // Printing Message : Using string interpolation
// console.log(`Temperature is ${fahrenheit}, degrees Fahrenheit.`);

// // -------------------------------------------------------------------

// // Find given number is positive or negative
// let number =10
// let result="";

// if (number>0) { 
//     result= "Positive"
    
// } else {
//     result = "negative"
// }
// console.log(result);
// // -----------------------------------------------------------------------

// // AGE COMPARASATION

// let age = 18;
// // age=40;
// let catogarie="";

// if (age >= 13 && age <= 19){
//     catogarie = "Teen Age"
// } else{
//     catogarie = "None teen age"
// }
// console.log(catogarie);
// // ___________________________________________

// // Number comparasation
// let c = prompt("Enter a C value");
// let d = prompt("Enter D value ");

// if (c>d){
//     console.log("C value is greater than D value");
// }
// else {
//     console.log("D value is greater than C value");
// }
// // _____________________________________________________
// // write a programm to check whether a number is divisible by 5 and 11 or not



// // _____________________________________________________________________________

// write a js programm to check whether a number is even or odd

// let number5 = prompt("Enter the cheking number:");
// if (number5 %2 ===0){
//     console.log("The number is even");
// }  
// else{
//     console.log("The number is odd");
// }

// ___________________________________________________________________________________

// Wrtite a js program to input week number and print week day. 

 



//_______________________________________________________________

/*Wrtite a js program to display "hello" if a number entered by user
is a multiple of 5, otherwise print "Bye".*/

// let multi = prompt("Enter a number");
// if (multi %5=== 0){
//     console.log("Hello");
// }
// else{
//     console.log("Bye");
// }

//3____________________________________________

// FOR LOOP

// let a = prompt("Enter a value:");
// a= parseInt(a)

// for( i=1; i<=a; i++){
   
//         console.log("number:", i)
//     }    

//___________________________________________
// let a = prompt("Enter a value:");
// a= parseInt(a)

// for( i=1; i<=a; i++){
//     if (i %2 === 0){
//         console.log("number:", i)
//     }
    
// }
// ____________________________________

// PRINT 1 TO "A" IF IS DIVISIBLE BY 3 print "FIZZ"
//IF    
// let a = prompt("Enter a value:");
// a= parseInt(a)

// for( i=1; i<=a; i++){
//      if (i %3 === 0 && i%5 ===0){
//          console.log("Fizz Buzz");  
   
//     }
//     else if(i%5 === 0){
//         console.log("Buzz");
//     }
//     else if (i % 3 === 0 ){
//         console.log("Fizz");
//     }
//     else{
//         console.log(i);
//     }   
// }

 //__________________________________________________

 //While Loop
 /* 
 n = parseInt(prompt("Enter a value:"));
let last =0;
while (n>0){
    last = n %10;
    console.log("last=", last)
    console.log("n=", n);
    n=parseInt(n/10);
    //125/10= 12.5 => 12
    //12/10=1.2 => 1
    //1/10 = 0.1 => 0
    }
*/




// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }
// ______________________________________________

// DO WHILE LOOP
// let i=0;
// do{
//     console.log(i);
// } while(i<10);

// _______________________________________________

// array[12,234, "Hello", true, [20, 40]]; //Collections of Datas

// // Object = {key:value, key:value}
// studentData = {"10AD10":{Name:"Siva", Age:20, Mark:458, Adress: "Saram"}}
// "10AD11":{Name:"Abi", Age:22, Mark:458, Adress: "Saram"};

// NESTED LOOP"

// for(i=0; i<=2; i++){
//     for (let j=0; j<2; j++){
//         console.log("i=", i, "j=", j);
//     }
// }

// _________________________________________________________________________
// Write a do-while loop that asks the user to enter two numbers. 
// The numbers should be added and the sum displayed. 
// The loop should ask the user whether he or she wishes to perform the operation again.
//  If so, the loop should repeat; otherwise it should terminate.

// a = parseInt(prompt("Enter a 'A' value:"));
// b = parseInt(prompt("Enter a 'B' value:"));
// let c= a+b;
/*
do{
    a = parseInt(prompt("Enter a 'A' value:"));
    b = parseInt(prompt("Enter a 'B' value:"));
    let c= a+b;
    console.log("The sum of A+B is", c);
    d = prompt("Do you want to try again ? Type Y to continu, To exist press any key:")
    

} while (d=='Y' || d=='y');
*/

//--------------------------------------------------------

// ARRAY 
// const array= [10, 20, 30, 40, 50, 60]
// // console.log("array length", array.length);
// // for (let i=0; i<array; i++){
// // console.log(array[i]);
// // }
// //------------- ----------------
// var arrayString = array.tostring();
// console.log(arrayString);
// console.log(typeof arrayString);
// console.log(array.join("€"));

// ----------------------------
//PUSH => add/insert from last element
// POP => to delete last element
// SHIFT => to delete first element 
// UNSHIFT => add/insert element from first
// DELETE => delete only element but not the space

//------------------------------

// const number=[10, 20, 30];
// const words=["one", "two", "three"];
// const array=[true, false];
// const result =  number.concat(words, array);
// console.log(result);

//_______________________________
//FLAT
//_______________________________________
//Write a javascript program to multiply all the items in an array
/*
let a=[2,3, 4, 5, 6];
let b=1;
for (i=0; i< a.length; i++){
    b = b * a[i];
    console.log(b); 
    
}*/

//________________________________________________________
//Write a javascript program to get the smallest number from an array.

/*const num=[22, 43, 2, 9, 32, 21, 1];
let small = num[0];
for (let i=0; i <num.length; i++) {
    
    if (num[i] < small) {
        small = num[i];
    
    }
}
console.log(small, "is the smallest number.");
*/

//________________________________________________________________________

// Write a program that prompts the user to input a positive integer.
// It should then output a message indicating whether the number is a prime number.
/*
let numberPrime = prompt("Enter a  positive value higher than 2, to check if it's a 'Prime number'");
Prime = numberPrime; 

for (let i= 2; i < numberPrime; i++) {

    if (numberPrime % i !== 0) {
        Prime == true;
      

        // console.log("Number", Prime, "is a prime number.");
        // i++;
        // break; 
         

    }
    
    }
     */
    // if (numberPrime % i === 0)
    //     console.log("Number", Prime, "is NOT a prime number.");
    
    //-------------------------------------------------------------------------



//Write a Javascript script to generate and print a array that contains a number (between 1 and n) in the form (x, x*x).
/*
let n = prompt("Enter a positive value:");
var numbers = {};

for (let i= 1; i<n; i++);{
 numbers[i] == i**2;  
}
console.log(numbers);
*/
//-------------------------------------------------------------------------

//A JavaScript function is a block of code designed to perform a particular task.

//A JavaScript function is executed when "something" invokes it (calls it)
/*
// MUTLIPLICATION

function multiple(n){

let x = 1;
for (i=1; i<n; i++ ){
 x = x * i;
}
console.log(x);
}
multiple(50); // argument
multiple(5);
*/
//______________________
/*
function sub(){

    let a = prompt("Enter a 'A' value:");
    let b = prompt("Enter a 'B' value:");
let c = a-b;
console.log("a-b =", c)
}
sub();
*/

//Function  WITHOUT PARAMETERS---------------------
/* 
function isPair(){
let d = prompt("Check the number, if is pair or nor: ");
if ( d % 2 == 0){
    console.log(d, "is pair");
}
else{
    console.log(d, "is not pair");

}
}
isPair();
------------*/


//Function  WITH PARAMETERS-------------------------------
/*
function isPair(n){
    //let d = prompt("Check the number, if is pair or nor: ");
    if ( n % 2 == 0){
        console.log(n, "is pair");
    }
    else{
        console.log(n, "is not pair");
    
    }
    }
    isPair(52);
    isPair(101);
*/

//-----------FUNCTION RETURN-------
/* Sum of Polygon Angles //
Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
Examples

sumPolygon(3) ➞ 180

sumPolygon(4) ➞ 360

sumPolygon(6) ➞ 720

Notes:  n will always be greater than 2.
        The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
        */
/*
function polygonAngles (n){
let res = (n - 2) * 180;
	return (res);
       
}
console.log(polygonAngles(5));
console.log(polygonAngles(6));
*/
//_______________________________________________________
/* 
A student learning JavaScript was trying to make a function. 
His code should concatenate a passed string name with string "Edabit" and
 store it in a variable called result. He needs your help to fix this code.
nameString("Mubashir") ➞ "MubashirEdabit"
nameString("Matt") ➞ "MattEdabit"
nameString("javaScript") ➞ "javaScriptEdabit
 */

(function () {
}) ();

var subName = function(name){
    console.log(name+"Edabit");
}
subName ("Mubashir");
subName ("Matt");
subName ("Javascript");
