let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
// this way is inefficient
setTimeout(() => {
    h1.style.color="red";
},1000);

setTimeout(() => {
    h1.style.color="blue";
},2000);

setTimeout(() => {
    h1.style.color="green";
},3000);


function changeColor(color,timeout,nextColorChange){
    setTimeout(() => {
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    }, timeout);
    
}

// setTimeout((changeColor("red"),1000));
// setTimeout((changeColor("orange"),2000));
// setTimeout((changeColor("blue"),2000));

// callback nesting- this is called calllbackhell
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000);
    });
});


// changeColor("orange",2000);
// changeColor("green",3000);


// applying

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h2.style.color=color;
            resolve("color changed");
        }, delay);
    });
};

console.log(changecolor("red",10000));
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// Promise[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "color changed"

changecolor("red",1000)
.then(()=>{
    console.log("red color was changed");
    return changecolor("green",1000);
})
.then(()=>{
    console.log("green color was changed");
    return changecolor("blue",1000);
})
.then(()=>{
    console.log("orange color was changed");
})
.catch(()=>{
    console.log("error in changing color");
});