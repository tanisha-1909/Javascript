function hello(){
    console.log("hello");
}

hello();

function rolldice(){
    let num=Math.floor(Math.random()*6)+1;
    console.log(num);
}

rolldice();

// function with arguments
function printname(data,age){
    console.log(data,age);
}

printname("tanisha",19);
printname("tani");
// tani undefined

function mult(number){
    for(let i=1;i<=10;i++){
        console.log(number*i);
    }
}
mult(6);

// adding three numbers using two arguments
function sum(a,b){
    return a+b;
}
console.log(sum(sum(1,2),3));


function isAdult(age){
    if(age>=18){
        return "adult";
    }
    return "not adult";
}
console.log(isAdult(13));
console.log(isAdult(23));

// sum from 1 to n
function sum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    return ans;
}
console.log(sum(16));

function conarr(arr){
    let s="";
    for(let i=0 ;i<arr.length;i++){
        s+=arr[i];
    }
    return s;
}

let arr=['hi','hello','hehhe']; 
console.log(conarr(arr));

// scope - 
// function scope
// block scope {}-for/while/if
// lexical scope nesting functions

// hoisting


// nameless functions
const summ=function(a,b){
    return a+b;
}
console.log(summ(1,2));

let hello=function(){
    console.log("hello");
}

// higher order
let greet= function(){
    console.log("hello");
}
const greetfunc=function(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
greetfunc(hello,2);
// 2 hello


// methods
const calculator={
    add: function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    }
};

console.log(calculator.add(2,3));
console.log(calculator.sub(2,3));



// exercise
// Write JavaScript function that returns array elements larger than a number

function greater(arr,num){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            res.push(arr[i]);
            console.log(arr[i]);
        }
    }
    return res;
}
let arrr=[2,3,4];
console.log(greater(arrr,3));


// WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.
function unique(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let flag=false;
        for(let j=0;j<ans.length;j++){
            if(ans[j]==str[i]){
                flag=true;
            }
        }
        if(flag==false){
            ans+=str[i];
        }
    }
    return ans;
}
console.log(unique("abcdabcdefgggh"));


//  WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinput
// returnsthelongestcountrynameasoutput

let country=["Australia","Germany","UnitedStatesofAmerica"];

console.log(longest(country));

function longest(country){
    let str="";

    let maxi=0;

    for(let i=0;i<country.length;i++){
        if(country[i].length>maxi){
            maxi=country[i].length;
            str=country[i];
        }
    }
    return str;
}


// WriteaJavaScriptfunctiontocountthenumberofvowelsinaString
let string="UnitedStatesofAmerica";

console.log(long(string));

function long (string){
    let cnt=0;
    for(let i=0;i<string.length;i++){
        if(string[i]=='a' || string[i]=='e' ||string[i]=='i' ||string[i]=='o' ||string[i]=='u'){
            cnt++;
        }
    }
    return cnt;
}

console.log(generate(15,25));

function generate(start,end){
    let num=Math.floor(Math.random() * (end-start+1))+start;
    return num;
}