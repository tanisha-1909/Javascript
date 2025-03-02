let form=document.querySelector("form");

// form.addEventListener("submit",function(){
//     event.preventDefault();
//     console.log("form submitted");
// });

// retrive form data

form.addEventListener("submit",function(event){
    event.preventDefault();
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
});


// more events
// change event - input,textarea,select
let user=document.querySelector('#user');
user.addEventListener("change",function(){
    console.log("change changed");
    console.log(user.value);
})


// input event- value of each element is changed-input,textarea,select
user.addEventListener("input",function(){
    console.log("input changed");
    console.log(user.value);
})


// questions
let btn= document.querySelector("#btn");

btn.addEventListener("click",function(){
    btn.style.color="green";
})

let namee=document.querySelector(".name");
let h2=document.querySelector('h2');

namee.addEventListener("input",function(){
    h2.innerText=namee.value.replace(/[^a-zA-Z\s]/g,"");
    // s- space
    // g - global , remove all occcurence
    // ^ - negatation
})