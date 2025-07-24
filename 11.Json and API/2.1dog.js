let btn=document.querySelector("button");
let div=document.querySelector("div");
btn.addEventListener("click",async()=>{
    let img=document.querySelector("#img");
    let link= await dogphoto();
    div.appendChild(img);
    img.src=link;
})
let url="https://dog.ceo/api/breeds/image/random"
async function dogphoto() {
    // let res= await fetch(url);
    // let data=await res.json();
    // console.log(data.message);
    // return data.message;

    try{
        let res=await axios.get(url);
        console.log(res);
        return res.data.message;
    }
    catch{
        return "/notfound";
    }
}
dogphoto();