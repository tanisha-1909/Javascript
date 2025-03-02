let input= document.querySelector("input");
let button=document.querySelector("button");

let div=document.querySelector(".box");
// div.style.height="400px";
// div.style.width="400px";
div.style.backgroundColor="wheat";
div.style.marginTop="20px";

button.addEventListener("click", function () {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.style.marginLeft="40px";
    btn.style.color="coral";
    li.innerText = input.value;
    btn.innerText = "Delete";
    input.value="";
    
    li.appendChild(btn); // Attach the button to the list item
    div.appendChild(li); // Attach the list item to the div

    // Add event listener to the button for deletion
    btn.addEventListener("click", function () {
        li.remove();
    });
});
