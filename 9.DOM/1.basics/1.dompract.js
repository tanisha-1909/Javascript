console.dir(document);

console.dir(document.all); //all properties
console.dir(document.all[7]); //h1
document.all[7].textContent="peter parker";

console.dir(document.getElementById(".mainimg"));

console.dir(document.getElementsByClassName("oldImg"));

console.dir(document.getElementsByTagName("p"));

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("div a"));

let para=document.querySelector('p');
console.dir(para.textContent);


//manipulating attributes
let links=document.querySelectorAll('.box a');
console.dir(links);
for(let i=0;i<links.length;i++){
    console.dir(links[i]);
    links[i].style.color="green";
}

let img= document.querySelector('img');
console.dir(img.classList);
img.classList.add("ksx");
console.dir(img.classList);
console.log(img.classList.contains("ksx"));

let box=document.querySelector('.box');
console.log(box.parentElement);
console.log(box.children);

console.log(document.querySelector('ul').previousElementSibling);

//create
console.log(document.createElement('p'));
let body=document.querySelector('body');
body.appendChild(document.createElement('h1'));

let btn=document.createElement('button');
console.dir(btn);
btn.innerText='click me';
body.appendChild(btn);