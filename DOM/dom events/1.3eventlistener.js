// addEventListener
let body=document.querySelector('body');

let btns=document.querySelectorAll('button');

for(btn of btns){
    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",sayname);
    btn.addEventListener("dblclick",function(){
        console.log("you double clicked");
    });
}

function sayhello(){
    alert("hello");
}
function sayname(){
    alert("hii tanisha!!")
}


// event listener on para
let p=document.querySelector('p');

p.addEventListener("click",function (){
    console.log("para was clicked");
})

let div=document.createElement('div');
console.log(div);
div.style.height="100px";
div.style.width="200px";
div.style.margin="auto";
div.style.backgroundColor="pink";
body.prepend(div);

div.addEventListener('mouseenter',function(){
    div.style.backgroundColor="blue";
})
div.addEventListener('mouseleave',function(){
    div.style.backgroundColor="pink";
})


// this in event listener

div.addEventListener("click",function(){
    console.log(this); //<div style="height: 100px; width: 200px; margin: auto; background-color: blue;"></div>
    div.innerText="tanisha";
    console.log(this.innerText); //tanisha
});
// this- refer to callback kiske liye ho rha- div


// advantage of this - to select multiple button
function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}
btns.addEventListener("click",changecolor);
p.addEventListener("click",changecolor);
div.addEventListener("click",changecolor);