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
 console.log(employee);
 console.log(employee.id)
 //change obj key value
 employee.rank="Senior manager";
 console.log(employee.rank)


