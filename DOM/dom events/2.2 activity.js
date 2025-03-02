let div=document.querySelector(".box");
div.style.width="400px";
div.style.height="100px";
div.style.border="solid black 1px";
let h2=document.querySelector("h2");

let btn=document.querySelector('button');

btn.addEventListener("click",function(){
    let r=  Math.floor(Math.random()* 255);
    let g= Math.floor(Math.random()* 255);
    let b= Math.floor(Math.random()* 255);
    console.log(r);
    let color=`rgb(${r},${g},${b})`;
    div.style.backgroundColor =color;
    h2.innerText=color;
    h2.style.color=color;
})