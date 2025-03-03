let h1=document.querySelector("h1");

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

