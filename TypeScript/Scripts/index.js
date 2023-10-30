var a = 5;
var b = "Deepak Kumar";
console.log(a + b);
//declaring function in ts
function sum(a, b) {
    return a + b;
}
console.log(sum(6, 11));
//optional parameters in function(Hoga to vahi datatype hoga nahi to nahi hoga)
function sub(a, b) {
    return b ? a - b : a;
}
console.log(sub(11, 6)); //giving any other data type will leave to error
//Tuples
var address;
address = [111, 'delhi', 25];
//object
var details;
details = {
    name: "Deepak Kumar",
    age: 25
};
console.log("Tuple : " + address);
console.log("Object : " + details.name);
;
var p = { name: 'john', id: 1 };
console.log(p);
var p1;
p1 = { name: "Jack", age: 33, rollNo: 1 }; // Union means you can have the values of either one of the or you can have both
console.log(p1);
var p2;
p2 = { name: "Jack", age: 32, rollNo: 1, id: 6 }; // Intersection means you must have keys of both of them in interface
console.log(p2);
