let arr=[1,2,3,4,5];

// for each 

// method-1
let print= function(ele){
    console.log(ele);
};
arr.forEach(print);

// method-2
arr.forEach(function(e){
    console.log(e);
})

// method 3
arr.forEach((e)=>{
    console.log(e);
})

// implementing for each in array of objects

const student=[
    {
        name:"vishal",
        marks:94
    },
    {
        name:"rajat",
        marks:80
    },
    {
        name:"pawan",
        marks:85
    }
];
console.log(student);
student.forEach((ele)=>{  
    console.log(ele.marks); //ele denotes individual objects
});


// map

let num=[1,2,3,4];
let double=num.map((ele)=>{
    return ele*2;
})
console.log(double); //2 4 6 8
//if not return undefined undefined undefined undefined

let gpa=student.map((ele)=>{
    return (ele.marks)/10;
})
console.log(gpa);


// filter function - output need not to be of same size

let nums=[1,2,3,4,0];

let evennums= nums.filter((ele)=>{
    return (ele%2==0);
})
console.log(evennums);

// every - return either true if condition is true for each element
console.log(nums.every((ele)=>{
    return ele<5;
})) //true

// some - return either true if condition is true for some element
console.log(nums.some((ele)=>{
    return ele<3;
}))//true


// reduce- to return single value
console.log(nums.reduce((res,ele)=>{
    return res+ele;
})) //10(1+2+3+4)

console.log(nums.reduce((maxi,ele)=>{
    if(ele>maxi){
        maxi=ele;
    }
    return maxi;
}));

// to check if all numbers are multiple of 10 or not
let arrr=[10,20,30,40];
console.log(arrr.every((ele)=>{
    return ele%10==0;
}));

// to find min number of array
console.log(arrr.reduce((min,ele)=>{
    if(min>ele){
        return ele;
    }
    return min;
}));


// default parameter
function sum(a,b=10){
    return a+b;
}
console.log(sum(2,3)); //5
console.log(sum(3));//13


// spread - expand an  iterable to multiple values
let a=[1,2,13,0,-1,2,0,9];
console.log(Math.min(...a)); //-1
console.log(...arr);
// 1 2 3 4 5

console.log(arr);
// (5) [1, 2, 3, 4, 5]

console.log(..."tanishamahavar");
// t a n i s h a m a h a v a r


// spread with array literals;
let newarr=[...arr];
console.log(newarr);
// (5) [1, 2, 3, 4, 5]  

// combining two array
let odd=[1,3,5];
let even=[2,4,6];
let com=[...odd,...even];
console.log(com); //[1, 3, 5, 2, 4, 6]



// spread with object literals
let data={
    email:"tanisha@gmail.com",
    password:"123"
};
let datacpy= {...data};
console.log(datacpy); //{email: 'tanisha@gmail.com', password: '123'}


// array to object(key-value)
let b=[1,2,3,4,5];
let obj1={...b};
console.log(obj1); //{0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
// index become skey


// string to object
let s="tanisha";
let obj2={...s};
console.log(obj2); //{0: 't', 1: 'a', 2: 'n', 3: 'i', 4: 's', 5: 'h', 6: 'a'}

// rest- compress multiple value to iterable
function sum(...args){
     return args.reduce((res,ele)=>{
        return res+ele;
    })
}
console.log(sum(2,3,4));


// destructing array
let names=["toy","bruce","peter","steve"];
let [winner ,runnerup,...others]=names;
console.log(winner); //toy
console.log(runnerup); //bruce
console.log(others); //['peter', 'steve']


// destructing objects
let thread={
    username:"tanisha_1909",
    content:"languages",
    likes:100,
    reposts:10,
    tags:["@tanisha_1909","@lang","@insta"],
};
let{username,tags}=thread; 
console.log(username); //tanisha_1909
console.log(tags); //['@tanisha_1909', '@lang', '@insta']

// another method
let{username:user, likes:heart,...otherinfo}=thread;
console.log(user); //tanisha_1909
console.log(heart); //100
console.log(otherinfo);
//{content: 'languages', reposts: 10, tags: Array(3)}


// exercise

// Squareandsumthearrayelementsusingthearrowfunctionandthenfindtheaverageofthearray
let array=[1,2,3,4];


let new_arr= array.map((ele)=>{
    return ele*ele;
})

let summ=new_arr.reduce((res,ele)=>{
    return res+ele;
});

console.log(summ);
console.log(summ/array.length);



// Createanewarrayusingthemapfunctionwhoseeachelementisequaltotheoriginalelementplus5

let newarray= array.map((ele)=>{
    return ele+5;
});
console.log(newarray);

// reateanewarraywhoseelementsareinuppercaseofwordspresentintheoriginalarray

let d=["hello","hi","djks"];
let words= d.map((ele)=>{
    return ele.toUpperCase();
});
console.log(words);


// WriteafunctioncalleddoubleAndReturnArgswhichacceptsanarrayandavariablenumberofarguments.Thefunctionshouldreturnanewarraywiththeoriginalarrayvaluesandalloftheadditionalargumentsdoubled.
let numbers=[1,2,3,4];

function doubleAndReturnArgs(numbers,...args){
    let new_array= [...numbers,...args];
    return new_array;
}
console.log(doubleAndReturnArgs(numbers,67,289,12));//[1, 2, 3, 4, 67, 289, 12]


// WriteafunctioncalledmergeObjectsthatacceptstwoobjectsandreturnsanewobjectwhichcontainsallthekeysandvaluesofthefirstobjectandsecondobject.

let sdh ={
    name: "tanisha",
    age:18,
    marks:94
};


const computer={
    tag:"lenovo",
    price:"50k",
    discount:10,
    color:["black","silver"]
};

let combined={...sdh,...computer};
console.log(combined);