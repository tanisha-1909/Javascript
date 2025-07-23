// let btn=document.querySelector("button");
// console.dir(btn);

// // on click event
// // btn.onclick= function(){
// //     console.log("button was clicked");
// // }


// // making own onclick functions
// function sayhello(){
//     alert("hello");
// }
// btn.onclick=sayhello;


// // for multiple btn selection
// let btns=document.querySelectorAll('button');

// for(btn of btns){
//     btn.onclick=sayhello;
// }

// // --- onmouseenter property- whenever cursor is hovered on button
// for(btn of btns){
//     btn.onmouseenter=function (){
//         console.log("you entered a button")
//     };
// }


let btn=document.querySelectorAll('button');
console.dir(btn);

// btn.onClick= function(){
//     console.log("button was clicked");
// }

function sayhello(){
    alert("hello");
}
function sayName(){
    alert("tanisha");
}
// btn.onclick=sayhello;

for(btns of btn){
    // btns.onclick=sayhello;
    // btn.onclick=sayName; //not executed
    // btns.onmouseenter=function(){
    //     console.log("you entered a button");
    // }

    btns.addEventListener("click", sayhello);
    btns.addEventListener("click", sayName);
    btns.addEventListener("dblclick", function(){
        console.log("you double clicked");
    });
}


