let student=["aman","shraddha","yash"]
console.log(student);
console.log(student[0]);
console.log(student.length);
console.log(student[0].length);

let marks=[100,802,3003,45,52];
console.log(marks.length);

let mixed=[92,48,'a',0,"kai"];
console.log(marks.length);

let emptyarray=[]; 
console.log(emptyarray);
console.log(emptyarray.length); //0

// array are mutable
let names=["aman","yash","vishal"];
names[0]="pawan";
console.log(names);
names[11]="tanisha";
console.log(names);

// string are unmutable
let namee="aman";
namee[0]="p";
console.log(namee);
// o/p- aman

// methods in array
let cars=["bmw","audi","xuv","maruti"];
console.log(cars);

// push 
cars.push("toyota");
console.log(cars);
// ['bmw', 'audi', 'xuv', 'maruti', 'toyota']

// pop
cars.pop();
console.log(cars);
// ['bmw', 'audi', 'xuv', 'maruti']


// unshift- push from start
cars.unshift("toyota");
console.log(cars);
//  ['toyota', 'bmw', 'audi', 'xuv', 'maruti']


// shift- pop from start
cars.shift();
console.log(cars);
// ['bmw', 'audi', 'xuv', 'maruti']


// exercise
// start- january,jul,march,aug
// final- july,june.march,august

let start=['january','july','march','august'];
start.shift();
start.shift();

start.unshift('june');
start.unshift('july');

console.log(start);
// july,june.march,augus t


// index of - index of data item

console.log(start.indexOf("july"));
// 0
console.log(start.indexOf("feb"));
// -1


// includes- search for data item (true or false)
console.log(start.includes("june"));
// true
console.log(start.includes("oct"));
// false


// concatenate- merge 2 array
let primary=["red","green","yellow"];
let secondary=["cyan","magenta","blue"];

console.log(primary.concat(secondary));
// ['red', 'green', 'yellow', 'cyan', 'magenta', 'blue']


// reverse - inplace reversable 
primary.reverse();
console.log(primary);
// ['yellow', 'green', 'red']

let color=primary.concat(secondary);

// slice- return portion of array -zero base
console.log(color.slice());
// ['yellow', 'green', 'red', 'cyan', 'magenta', 'blue']

console.log(color.slice(2));
//  ['red', 'cyan', 'magenta', 'blue']

console.log(color.slice(4,5));
//['magenta']
// end index is exclusive!!!!



// -- splice to add/remove/replace

// / ['yellow', 'green', 'red', 'cyan', 'magenta', 'blue']

// removed
console.log(color.splice(4));
//  ['magenta', 'blue']

console.log(color);
//  ['yellow', 'green', 'red', 'cyan']

console.log(color.splice(0,1));
// ['yellow']

console.log(color);
// (3) ['green', 'red', 'cyan']

// replace
color.splice(0,2,"green","jd");
console.log(color);
// ['green', 'jd', 'cyan']

// replace and add
color.splice(0,1,"hjcd","dmk","rcmk");
console.log(color);
// ['hjcd', 'dmk', 'rcmk', 'jd', 'cyan']

//add
color.splice(0,0,"hjcd","dmk","rcmk");
console.log(color);
// ['hjcd', 'dmk', 'rcmk', 'hjcd', 'dmk', 'rcmk', 'jd', 'cyan']

color.splice(2,1,"tani");
console.log(color);
// ['hjcd', 'dmk', 'tani', 'hjcd', 'dmk', 'rcmk', 'jd', 'cyan']



// --sort - default ascending -- treats data item in string format 
color.sort();
console.log(color);
// ['cyan', 'dmk', 'dmk', 'hjcd', 'hjcd', 'jd', 'rcmk', 'tani']

marks.sort();
console.log(marks);
// [100, 3003, 45, 52, 802]
// discrpencies- 



// exercise
// start- january,jul,march,aug
// final- july,june.march,august

let starts=['january','july','march','august'];
starts.slice(0,2,"july","june");
console.log(starts);

let arr=['c','c++','html','javascript','python','java','c#','sql'];
console.log(arr.length-arr.indexOf("javascript")-1);
// 4

arr.reverse();
console.log(arr.indexOf("javascript"));
// 4


// references in array
// []==[]
// false

// [1]===[2]
// false

console.log(color[0]==color[0]);
// true
// color is called reference variable


// copy using array reference
arrcpy=arr;

arrcpy.push('sw');

console.log(arr);
//  ['sql', 'c#', 'java', 'python', 'javascript', 'html', 'c++', 'c', 'sw']

arr.pop();
arr.pop();
console.log(arrcpy);
// ['sql', 'c#', 'java', 'python', 'javascript', 'html', 'c++']


// constant arrays

const a=[1,2,3]; 
a.push(4);
console.log(a);
// 1 2 3 4
a.pop();
a.pop();
console.log(a);
// 1 2

// this can't be done
// a=[4,5,5]; reinitialization not possible
// a=color;
// assignment to constant values cannot be done
// operations can be done


// nested array
let nums=[[1,2],[3,4],[5,6]];
console.log(nums);
console.log(nums[0].length);
// 2
console.log(nums[1][1]);
// 4


// exercise - tictactoe
let tictactoe=[['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(tictactoe);


// exercise
let ar=[7,9,0,-2];
console.log(ar.slice(0,3));
// [7, 9, 0]

console.log(ar.slice(-3));
// [9, 0, -2]

let st="Hello        ";
console.log(st.length==0);
// check if string is blank

console.log(st[0]>='a' && st[0]<='z');
// check if letter is lowercase
// false

console.log(st.trim());

console.log(color.includes("pink"));
