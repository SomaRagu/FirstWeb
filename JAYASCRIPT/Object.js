/*
// var obj = { property:"value"}
var student = {rollNo: 101254, name:"Raguu", age:25, mark:450};

studentDetails=[{rollNo: 101254, name:"Raguu", age:25, mark:450},
{rollNo: 10125, name:"Raguu", age:25, mark:450}]

//var s=["Raguu", 25, 450, "Saram"]

console.log(student.name); 
console.log(student["name"]); // You can use both methods

// creats student
// update student
// name sof studen
var a= "mark";
console.log(student[a]);
*/
//-----------------------------------------------------
var student = {firstName: "Anbu", lastName:"Raguu", age:25, mark:450};

var arr = ["apple", "banana", "cherry"];
//add extra property and values
student.adress = "Pondicherry";


for (let i in student){
    console.log(i);
    console.log(student[i]);
}

