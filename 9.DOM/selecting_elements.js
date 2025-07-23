console.dir(document.all[7]);
document.all[7].innerText="peter";

// selecting element

console.log(document.getElementById("mainimg"));
{/* <img src="assets/spiderman_img.png" id="mainimg"> */}
// console.dir(document.getElementById("mainimg"));- to get in object form

let imgObj=document.getElementById("mainimg");
console.log(imgObj.src);
// file:///C:/Users/Tanisha/Desktop/Javascript/DOM/assets/spiderman_img.png

console.log(imgObj.id); //mainimg


// getelementbyclassname
console.log(document.getElementsByClassName("oldImg"));
// HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg]

console.log(document.getElementsByClassName("oldImg")[0]);
// <img src="assets/creation_1.png" class="oldImg">

let image=document.getElementsByClassName("oldImg");
for(let i=0;i<image.length;i++){
    console.log(image[i]);
}
// <img src="assets/creation_1.png" class="oldImg">
// <img src="assets/creation_2.png" class="oldImg">
// <img src="assets/creation_3.png" class="oldImg">

// how to change image
console.log(image[1].src); //file:///C:/Users/Tanisha/Desktop/Javascript/DOM/assets/creation_2.jpeg
image[1].src="assets/spiderman_img.png";
console.log(image[1].src); //file:///C:/Users/Tanisha/Desktop/Javascript/DOM/assets/spiderman_img.png


// getElementsByTagName
console.log(document.getElementsByTagName("p")); //HTMLCollection(2) [p, p#description, description: p#description]

// modifying
document.getElementsByTagName("p")[1].innerText="tanisha";