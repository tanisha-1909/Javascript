// str.trim()- > to remove unwanted space from both end(not middle)

let msg= '        he llo    ';
console.log(msg.trim());
console.log(msg); // no change in original

// taking input and then trim
password=prompt("enter password");
console.log(password.trim());

// lowercase and uppercase
console.log(password.toUpperCase());
console.log(password.toLowerCase());

 
let str="ilovecoding   "; //14 length

console.log(str.indexOf("love"));
console.log(str.indexOf('o'));
console.log(str.indexOf('y'));

// method chaining- one method after another ( order of execution - left to right )
console.log(str.toUpperCase().trim());

// slice of string- part of string
// zero based
console.log(str.slice(5));//coding
console.log(str.slice(1,4));//lov
console.log(str.slice(-5)); //ng //14-5=9

// replace - love with do
console.log(str.replace("love","do"));

// repeat
console.log(str.repeat(3));

//reverse
str="tanisha"
console.log(str.split('').reverse().join(''));


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