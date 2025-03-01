// select tag
console.dir(document.querySelector('p')); //p

// select id
console.dir(document.querySelector('#description')); //p#description

// select class
console.dir(document.querySelector('.oldImg')); //img.oldImg


// nesting
console.dir(document.querySelector("p a ")); //a


// to get all anchor tags
console.dir(document.querySelectorAll("p a")); //NodeList(3)



// manipulation properties
let para= document.querySelector("p");
console.log(para.innerText);

// Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays


console.log(para.textContent);
// Spider-Man is a superhero appearing in American comic books published by
// Marvel Comics.
// Created by writer-editor Stan Lee and artist Steve Ditko, he
// first appeared in the anthology comic book Amazing Fantasy
// #15 (August 1962) in the Silver Age of Comic Books. He has
// been featured in comic books, television shows, films, video games,
// novels, and plays


console.log(para.innerHTML);
{/* <b>Spider-Man</b> is a superhero appearing in American comic books published by
<a href="https://www.google.com/search?q=Marvel+Comics">Marvel Comics</a>.
Created by writer-editor <b>Stan Lee</b> and artist <b>Steve Ditko</b>, he
first appeared in the anthology comic book <a href="https://www.google.com/search?q=Amazing+Fantasy">Amazing Fantasy</a>
#15 (August 1962) in the <a href="#">Silver Age of Comic Books</a>. He has
been featured in comic books, television shows, films, video games,
// novels, and plays */}


// maniplulation
para.innerText="tanisha";

// styling?
para.innerHTML="tan<b>isha</b>";

// underline heading
let heading=document.querySelector("h1");
heading.innerHTML="<u>Spiderman<u/>"

// another way
heading.innerHTML=`<u>${heading.innerText}</u>`


// --manipulation attributes

let img=document.querySelector("img");
console.log(img); 
console.log(img.getAttribute('id')); //mainimg

img.setAttribute('id','spidermanImg'); //width gets reset
img.setAttribute('src',"assets/creation_3.jpeg"); //image changed



// manipulation style

let text=document.querySelector("#description");
console.dir(text);

text.style.color="purple";
text.style.backgroundColor="wheat"; //camelcase


// using classlist
let head=document.querySelector('h1');
console.log(head.classList); //DOMTokenList [value: '']
// so how to give class?- can have multiple class
head.classList.add("abc","xyx");
console.log(head.classList);// DOMTokenList(2) ['abc', 'xyx', value: 'abc xyx']

// to remove class
head.classList.remove("xyx");


// another way to set
head.setAttribute('class','shad');
// diadvantages- removes abc class....only 1 class value allowed


// to check if class exist
console.log(head.classList.contains("shad")); //true

// toggle- between add and remove
head.classList.toggle("heelo");
console.log(head.classList); //DOMTokenList(2) ['shad', 'heelo', value: 'shad heelo']
head.classList.toggle("heelo");
console.log(head.classList); //DOMTokenList ['shad', value: 'shad']