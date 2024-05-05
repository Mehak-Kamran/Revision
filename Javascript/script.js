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
// var a=12;
// var b=a;
// b=b+1;
// console.log(a,b)

//refrence eg
var x=[1,2,3];
var y=x;
y.pop();
y.push(4);
// console.log(x,y)


//conditional
no=4;
if(no>10){
    //console.log("no is greater than 10");
}
else {
        if(no<10){
        //console.log("no is less than 10");
    }

        else{
            //console.log("enter valid no ")
        }
}

//loop=> for , while

for(var i=1;i<=20;i++){
    //console.log(i);
}
var i=1
while(i<=20){
    //console.log(i);
    i++;
}

//function
 function add(a,b,c){//=>parameters
    sum=a+b+c;
    //console.log(sum);
 }
 //add(1,2,3);//=>arguments

 //array
 var marks=[23,76,98]
 //console.log(marks[0])//access array
 //marks.push(77);
 //console.log(marks)
 //marks.pop()
 
 //marks.shift()
 //marks.unshift(68)
 marks.splice(1,2)

 //console.log(marks)

 //object

 //blank obj
 var student={};
 //filled object
 var employee={
    name:"alen",
    id:2345,
    rank:"manager"
 }
 //console.log(employee);
 //console.log(employee.id)
 //change obj key value
 employee.rank="Senior manager";
 //console.log(employee.rank)

 //copy refrence value
 main_medince_list=["Pnadol","Risek","Calpol"]
 updated_medicine_list=[...main_medince_list]
 updated_medicine_list.pop()
 //console.log(main_medince_list,updated_medicine_list)

 //truthy falsey value
 if (-1){
    //console.log("hey")
 }
 else{
    //console.log("bye")
 }

//for each
//used for arrays 
name=["mark","andy","bobby"];
name.forEach(function call(personname){
    //console.log("hello",personname,"Welcom!");
})
//for in
//used for objects
let Andy={
    class:2,
    transport:"Car",
    interest:"cycling"
}
for(key in Andy){
    //console.log(Andy[key])
}
//delete in object
delete Andy.class
//console.log(Andy)

//DOWHILE LOOP
let variable=2;
do{
    //console.log(variable);
    variable++;
}while(variable<12)

//higher order function
a=[1,2];
a.forEach(function abcd(){
  console.log("This is higher order function ");
})

function yzb(){
    return function xyz(){
        console.log("this is higher order functions");
    }
}
let t=yzb();
t();

//constructor function
function car(color){
    this.colour=color,
    this.engineSpeed="fast",
    this.automatic=true
}

let car1=new car("red");
let car2=new car("green");
let car3=new car("white");
let car4=new car("black");

//console.log(car1,car2,car3,car4)
//console.log(car1.engineSpeed)

//iife
(function hij(){
    console.log("This is immediate invoked function")
})();

//prototypal inheritance

let bike={
    wheel:2,
    engine:true
}

let honda={
    model:50002,
    color:"black"
}

honda.__proto__=bike;
//console.log(honda.engine)

//this keyword 
//value is diff in diff scopes

//global
console.log(this);//==>window

//function scope
let fun=()=>{
    console.log(this);
}
fun();//==>window

//method
let obj={
    sum:function(){
        console.log(this)
    },
    name:"mark"
}
obj.sum();

// bind call apply
function minus(){
    console.log(this);
}
let ob={
    key:"name"
}
//minus.call(ob)//2,3
//minus.apply(ob)//[2,3]
let c=minus.bind(ob)
c();






