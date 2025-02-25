// syntax of declaring variables

let age=23;
age=age+1
let b;
b=4;
// power
let side=3;
side=side**2;

// old syntax
var x=10;
var y=20;
x+y;

// assignment operator
x=x+3;
x;
x/=2;
x;

// unary
y--;

let $=3;

let namee="tony";
namee[0];
"tony"[0];

namee.length;

console.log("hello world");
console.log("tanisha","mahavar",x,(x+5)); 
// template literal

// backtick
let pencil=5;
let eraser=10;

console.log(`total price is ${pencil+eraser} ruppes`);
console.log(pencil<eraser);

// unicodes
console.log('A'<'a');

console.log(6>6)

// equal to operator compare value, not data type
console.log(9=='9') 

//to compare type and value
console.log(8==='8')

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
switch(color){
    case "red":
        console.log("STOP");

    case "green":
        console.log(`move ${color}`);
    default:
        console.log("slow");
}

// alert
alert("something is wrong");

console.error("this is an error message")
console.warn("warning message")

// prompt
let name=prompt("enter name")