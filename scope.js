/*


Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:

    Block scope
    Function scope
    Global scope
    ---------------------

Block Scope

Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:
*/

var a = 10; //global scope

if(true){
    let b = 10; // block scope, le variable est disponible que à l'int"rieur de loop.
    console.log("b=", b);
}
console.log(b);
(function(){
    let c=30; // function scope
    console.log("inside the function", a+c);
}
)();

console.log(c);
