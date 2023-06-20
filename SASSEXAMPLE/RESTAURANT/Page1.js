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
const b=20;
console.log("Constant variable is", b);
/*b=30; // CAN NOT TO BE RE-DECLARE*/
//-------------------------------------------------------------------------------

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


