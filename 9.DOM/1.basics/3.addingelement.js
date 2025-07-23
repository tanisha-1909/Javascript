// add p element

let para=document.createElement('p');
console.dir(para);
para.innerText="Hi i am tanisha";


// to insert in document
// at end
// appendchild - only element
// append- both element and content

let body=document.querySelector("body");
body.appendChild(para);
// added at the last of body document

let box=document.querySelector(".box");
box.appendChild(para);

// creating button
let btn= document.createElement('button');
btn.innerText="click me";
box.append(btn);

// how to add more text to btn
btn.append(" if you want");
// click me if you want


// prepend- start
btn.prepend(para);
// Hi i am a tanisha click me if you want

// insertadjacentelement(CaretPosition,target);
// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.

// how to remove

btn.removeChild(para);
btn.remove();