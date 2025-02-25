// str.trim()- > to remove unwanted space from both end(not middle)

let msg= '        he llo    ';

console.log(msg.trim());

// taking input and then trim
password=prompt("enter password");
console.log(password.trim());

// lowercase and uppercase
console.log(password.toUpperCase());
console.log(password.toLowerCase());

// indexof-> index of first occurence of some value of string
let str="ilovecoding   ";

console.log(str.indexOf("love"));
console.log(str.indexOf('o'));
console.log(str.indexOf('y'));

// method chaining- one method after another ( order of execution - left to right )
console.log(str.toUpperCase().trim());

// slice of string- part of string
// zero based
console.log(str.slice(5));
console.log(str.slice(1,4));
console.log(str.slice(-5)); 

// replace - love with do
console.log(str.replace("love","do"));

// repeat
console.log(str.repeat(3));


// exercise

let mess="help!";
console.log(mess.trim().toUpperCase());
// HELP!

let strr="tanishamahavar"
console.log(strr.slice(4,9)); 
// shama
console.log(strr.indexOf("a"));
// 1
console.log(strr.replace("tanisha","tannu"));
// tannumahavar