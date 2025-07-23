let btn=document.querySelector("button");
console.dir(btn);

// on click event
// btn.onclick= function(){
//     console.log("button was clicked");
// }


// making own onclick functions
function sayhello(){
    alert("hello");
}
btn.onclick=sayhello;


// for multiple btn selection
let btns=document.querySelectorAll('button');

for(btn of btns){
    btn.onclick=sayhello;
}

// --- onmouseenter property- whenever cursor is hovered on button
for(btn of btns){
    btn.onmouseenter=function (){
        console.log("you entered a button")
    };
}