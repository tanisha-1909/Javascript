let div= document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("div was clicked"); //div was clicked
})
ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked"); //div was clicked ul was clicked
})

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li was clicked"); //div was clicked ul was clicked div was clicked
    })
}


// When an element (like a button) is clicked, an event is directed to the element. If an event handler is set for the element, the event handler is triggered. Then the event "bubbles up" to the elements parent.

// how to stop event bubbling?
// events.stoppropogation