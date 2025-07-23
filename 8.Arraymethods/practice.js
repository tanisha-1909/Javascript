let arr=[1,2,3,4,5];

let print=function(ele){
    console.log(ele);
}

arr.forEach(print);

arr.forEach(function(ele){
    console.log(ele);
})

let ar=[
    {
    name:"tani",
    marks:95,
    },
    {
    name:"tanai",
    marks:95,
    },
    {
    name:"tanaai",
    marks:95,
    }
];

ar.forEach((ele)=>{
    console.log(ele);
});

//map- same as foreach
//store value in new arr

let gpa=ar.map((ele)=>{
    return ele.marks/10;
})
console.log(gpa); //[9.5, 9.5, 9.5]

let num=[2,1,3,34,4];

let double= num.map((ele)=>{
    return ele*2;
})
console.log(double); // [4, 2, 6, 68, 8]


//filter
let even=num.filter((ele)=>{
    return (ele%2==0);
})

console.log(even); //[2, 34, 4]

//eveery- only if true for all ele

let odd=num.every((ele)=>{
    return (ele%2!=0);
})
console.log(odd); //false

let ab=[3,7,9];
let k=ab.every((ele)=>{
    return (ele%2!=0);
})
console.log(k); //true

//similar- some


//reduce array to single value
let sum= ab.reduce((res,ele)=>{
    return ele+res;
})
console.log(sum); //19

let maxi=num.reduce((res,ele)=>{
    if(ele>res) res=ele;
    return res;
})
console.log(maxi);


let b=[10,20,30,450];

let res= b.every((ele)=>{
    return (ele%10==0);
})
console.log(res);

let mini=b.reduce((mini,ele)=>{
    if(mini>ele) mini=ele;
    return mini;
})
console.log(mini);

//default
function add(a,b=2){
    return a+b;
}
console.log(add(2));

//spread
console.log(Math.min(...b));
console.log(...ar);


let merge=[...ab, ...ar];
console.log(merge); //[3, 7, 9, {…}, {…}, {…}]


let ar_cpy=ar.map((obj)=>({...obj,id:123}));
console.log(ar_cpy);

let names=["tony","bruce","steve", "peter"];
let [winner,runnerup]=names;
console.log(winner,runnerup); //tony bruce