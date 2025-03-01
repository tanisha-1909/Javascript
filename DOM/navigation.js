
// navigating to parent

let h4=document.querySelector('h4');
console.log(h4.parentElement); //<div class="box">…</div>

let div=document.querySelector(".box");
console.log(div.children); //HTMLCollection(2) [h4, ul]
console.log(div.childElementCount); //2

let ul=document.querySelector("ul");
console.log(ul.parentElement); //<div class="box">…</div>
console.log(ul.children); //HTMLCollection [li<a.boxlink]

let h2=document.querySelector("h2");
console.log(h2.nextElementSibling); //<p>…</p>
console.log(h2.previousElementSibling); //<img src="assets/spiderman_img.png" id="mainimg"></img>


// how to change style

// change heading through image
let img=document.querySelector('#mainimg');
img.previousElementSibling.style.color="red";