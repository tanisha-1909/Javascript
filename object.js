let student ={
    name: "tanisha",
    age:18,
    marks:94
};
console.log(student);
// {name: 'tanisha', age: 18, marks: 94}

const item={
    tag:"lenovo",
    price:"50k",
    discount:10,
    color:["black","silver"]
};
console.log(item);

let thread={
    username:"tanisha_1909",
    content:"languages",
    likes:100,
    reposts:10,
    tags:["@tanisha_1909","@lang","@insta"]
}
console.log(thread);

// get values
console.log(thread["username"]);
console.log(thread.content);
console.log(thread.tags[0]);
let prop="tags"
console.log(thread[prop]);

// js convert key to string
const obj={
    1:'a',
    2:'v',
    null:'c',
    undefined:'d',
    true:'e'
};
console.log(obj);
// {1: 'a', 2: 'v', null: 'c', undefined: 'd', true: 'e'}
console.log(obj.null);
// c


// adding and updating values

// update
student.age=20;
console.log(student);

student.marks=[90,82,34];

// add
student.gender='female';
console.log(student);


// delete
delete student.marks;
console.log(student);

// objects of objects

const classinfo={
    vishal:{
        grade:"A+",
        city:"hyderabad"
    },
    tanisha:{
        grade:"A",
        city:"jaipur"
    }
};
console.log(classinfo);
console.log(classinfo.tanisha.city);
console.log(classinfo.vishal);

classinfo.tanisha.city="pune";
console.log(classinfo.tanisha.city);


// array of objects

const info=[
    {
        name:"tanisha",
        grade:"B",
        city:"Jaipur"
    },
    {
        name:"vishal",
        grade:"A+",
        city:"delhi"
    },
    {
        name:"karan",
        grade:"c",
        city:"pune"
    }
];

console.log(info);
console.log(info[0]);
info[1].city="hyderabad";
info[2].gender="male";
console.log(info);


// math objects

console.log(Math.PI);
console.log(Math);
console.log(Math.floor(9.7));
// 9
console.log(Math.ceil(9.2));
// 10

console.log(Math.random());


// generate random integers
let num=Math.random();
num=num*10;
num=Math.ceil(num);
console.log(num);


//guessing game
let maxi= prompt("enter maximum range");
let nums=Math.random();
nums=nums*maxi;
nums=Math.floor(nums)+1;
console.log(nums);

