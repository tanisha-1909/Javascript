// ----*data types*
//--not present- char, int, float, double, short, long, struct, tuple, enum, pointerr
//--*typeof* - used to get data type
//--NAN- not a number (ex 0/0)
//--*operator precedence* - () , ** , {*,/,%} , {+,-} 

// ----------------------------------------

// syntax of declaring variables

//--variables- container to store data
// A variable is simply the name of storage location
//      value inside the variable can be changed

//--variable hosting:JavaScript moves declarations 
//      to the top of their scope before code execution.

// --var in loops vs let/const?
// var shares one scope in loop; let/const have block scope, so each iteration has its own.

// syntax:---------
let age=23;
age=age+1;
let b; //without initalization
b=4;

// power
let side=3;
side=side**2;

// old syntax
var x=10;
var y=20;
x+y;


// case of hoisting - see questions.txt
console.log(k);
var k=10;

// console.log(p);
let p=10;


// assignment operator- to modify values of a variable
x=x+3;
x;
x/=2; //short form
x;

// unary operator
y--; //y-=1


// variable name can start with $ and _
let $=3;

let namee="tony";
namee[0];
"tony"[0];

namee.length;

console.log("hello world");
console.log("tanisha","mahavar",x,(x+5)); 


// template literal- uses backtick
let pencil=5;
let eraser=10;
let duster=20;

console.log(`total price is ${pencil+eraser} ruppes`);
console.log(`adding price we get ${pencil+eraser+duster}`);
console.log(pencil<eraser);

// unicodes
console.log('A'<'a');

console.log(6>6)

// equal to operator compare value, not data type
console.log(9=='9')  //true

//to compare type and value
console.log(8==='8') //false

console.log(3!=10)

// traffic light

let color='green'

if(color=='red'){
    console.log("STOP");
}
else if(color=='green'){
    console.log(`move ${color}`);
}
else{
    console.log("SLOW");
}
// switch case

let c="red";

switch(c){
    case "green":
        console.log("go");
        break;
    case "red":
        console.log("stop");
        break;
    default:
        console.log("slow");
}

alert("danger people");//pop up
console.error("testing error"); //in console

prompt("enter name");
let agee=prompt("enter age");
console.log(agee);