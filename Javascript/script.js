//word and keyword
// score=500;
// if;

//var constant let
var temp=30;
let good="man";
const pi=3.14;

//hoisting
// console.log(a,b); // a i.e value exist => undefine,b=> not defined , donot exist
// var a=12;
// //what a hoisting does is 
// var a;
// console.log(a)
// //var a=12
// // var a;
// a=12;

//types refrence and primitives
//refrence=>(),{},[]
//premitives eg
var a=12;
var b=a;
b=b+1;
console.log(a,b)

//refrence eg
var x=[1,2,3];
var y=x;
y.pop();
y.push(4);
console.log(x,y)


//conditional
no=4;
if(no>10){
    console.log("no is greater than 10");
}
else {
        if(no<10){
        console.log("no is less than 10");
    }

        else{
            console.log("enter valid no ")
        }
}


