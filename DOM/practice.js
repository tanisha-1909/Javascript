let para= document.createElement('p');
para.innerText="Hey I'm red!";
para.style.color="red";

let body=document.querySelector('body');
body.append(para);


let h3=document.createElement('h3');
h3.innerText="I'm blue h3";
h3.style.color="blue";
// h3.classList.add("blue");
body.append(h3);

let div=document.createElement('div');
div.style.border="solid black 2px";
div.style.backgroundColor="pink";
body.append(div);

let h1=document.createElement('h1');
h1.innerText="I am in a div";
div.appendChild(h1);
let p= document.createElement('p');
p.innerText="ME TOO!";
div.appendChild(p);

// CreateanewinputandbuttonelementonthepageusingJavaScriptonly.Setthetextofbuttonto“Clickme”

let input= document.createElement('input');
let button=document.createElement('button');


button.innerText="Clickme";

body.prepend(button);
body.prepend(input);


// Addfollowingattributestotheelement:-Changeplaceholdervalueofinputto“username”-Changetheidofbuttonto“btn”

input.placeholder="username";
button.id="btn";
console.log(button.id);

// AccessthebtnusingthequerySelectorandbuttonid.Changethebuttonbackgroundcolortoblueandtextcolortowhite

let btn_id= document.querySelector('#btn');
// btn_id.style.backgroundColor="blue";
// btn_id.style.color="white";

// Createanh1elementonthepageandsetitstextto“DOMPractice”underlined.Changeitscolortopurple.

let head=document.createElement('h1');
head.innerText="DOM PRACTICE";
head.classList.add("head");
body.prepend(head);

// Createaptagonthepageandsetitstextto“tanishamahavar”,whereDeltaisbold.
let line=document.createElement('p');
line.innerHTML="<b>tanisha</b> mahavar";
body.prepend(line);
