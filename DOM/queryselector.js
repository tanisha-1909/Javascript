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