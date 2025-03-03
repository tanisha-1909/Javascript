//  A single-threaded language is one that can execute only one task at a time.
// synchronous nature- sequence wise
let a=25;
console.log(a);
let b=10;
console.log(b);
console.log(a+b);

// 0/p- 25 10 35


// so to ensure working of multiple task- callbacks or settimeouts are used
// asychronous nature

setTimeout(function(){
    console.log("tanisha");
},1000);
setTimeout(function(){
    console.log("mahavar");
},500);
console.log("hello");

// hello
// mahavar
// tanisha

// so if javascropt is single threaded how it is performing multiple task(wait)?
// this is actually done by browser
// browser uses call stack

