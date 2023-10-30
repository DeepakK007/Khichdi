let a:number = 5;
let b:string = "Deepak Kumar";
console.log(a+b);
//declaring function in ts
function sum(a:number,b:number){
    return a+b
}
console.log(sum(6,11));
//optional parameters in function(Hoga to vahi datatype hoga nahi to nahi hoga)

function sub(a:number,b?:number){
    return b?a-b:a;
}
console.log(sub(11,6));//giving any other data type will leave to error
//Tuples
let address:[number,string,number];
address = [111,'delhi',25];
//object
let details : { // variable declaration
    name:String,
    age?:Number
}
details = {
    name:"Deepak Kumar",
    age:25
}
console.log("Tuple : "+address);
console.log("Object : "+details.name);
//inteface
interface Person {
    name:String,
    id:Number,
};
let p={name:'john',id:1};
console.log(p)
interface Student {
    name:String,
    rollNo:Number,
    age:Number
}
var p1 : Person | Student;
p1 = {name:"Jack",age:33,rollNo:1}// Union means you can have the values of either one of the or you can have both .
console.log(p1);
let p2 : Person & Student;
p2 = {name:"Jack",age:32,rollNo:1,id:6} // Intersection means you must have keys of both of them in interface
console.log(p2);