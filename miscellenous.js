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