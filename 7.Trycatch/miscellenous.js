// arrow functions - nameless function

const sum=(a,b)=>{
    console.log(a+b);
}
sum(2,3);
console.log(sum);
// (a,b)=>{
    // console.log(a+b);
// }

// single argument
const cube=(n)=>{
    return n*n*n;
}

console.log(cube(3));

// no argument
const hello=()=>{
    console.log("hello");
}
hello();

// implicit return 
// syntax change- paranthesis()
const mult=(a,b)=>(
    a*b
);
console.log(mult(2,3));



// set timeout
// to set timer, it is function of window object
console.log("hi");
setTimeout(()=>{
    console.log("tanisha");
},2000);

console.log("hiiii");

// set interval
// keep execute mutliple time

console.log("hi");
let id=setInterval(()=>{
    console.log("tanisha");
},2000);

console.log(id);

console.log("hi");
let id2=setInterval(()=>{
    console.log("tanisha");
},2000);

console.log(id2);

// how to stop??
clearInterval(id);
clearInterval(id2);


// this with arrow
const student={
    name:"aman",
    marks:95,
    prop:this, //global scope
    getName: function(){
        console.log(this);
        // {name: 'aman', marks: 95, prop: Window, getName: ƒ}
        return this.name;
    },
    getmarks:()=>{
        console.log(this); //parent scope -student
        // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        // undefined
        return this.marks;
    }
}
console.log(student);
// {name: 'aman', marks: 95, prop: Window}
console.log(student.getName());
console.log(student.getmarks());


// exercise

// WriteanarrowfunctionnamedarrayAveragethatacceptsanarrayofnumbersandreturnstheaverageofthosenumbers
const arrayAverage=(arr)=>{

    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(arrayAverage([2,3,4]));


// WriteanarrowfunctionnamedisEven()thattakesasinglenumberasargumentandreturnsifitisevenornot

const isEven=(num)=>{
    if(num %2==0) return "iseven";
    return "odd";
}
console.log(isEven(66));


const object={
    message: "HEllo, world!",

    logmessage(){
        console.log(this.message);
    }
};
setTimeout(object.logmessage,1000);
// o/p undefined


let length=4;
function callback(){
    console.log(this.length);
}; 

const objectt={
    length:5,
    method(callback){
        callback(); //regular function call
    }
};

objectt.method(callback,1,2);




//practice--------------

const func= (arg1,arg2)=>{
    console.log("arrow function");
}
func();

const cubee=(n)=>{
    return n*n*n;
}
console.log(cubee(2));

const mul=(a,b)=>(
    a*b
)
console.log(mul(2,3));

const mull=(a,b) =>a*b; 


setTimeout ( ()=>{
    console.log("tanisha mahavar");
}, 5000);

let id6=setInterval(()=>{
    console.log("multiple time");
},2000)

console.log("id id" ,id6);
clearInterval(id6);

const square=(n)=> n*n;

let idd=setInterval(() => {
    console.log("Hello world")
}, 2000);

setTimeout(()=>{
    clearInterval(idd);
},10000);

