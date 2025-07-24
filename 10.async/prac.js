//async function- bydefault return promise; on this promise we apply then catch


async function greet(){
    // abc.abc();
    // throw "random error";
    return "hello";
}

console.log(greet());

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log(result);
})
.catch((err)=>{
    console.log("promise was rejected with err", err)
})


let demoo=async()=>{
    return 5;
}
console.log(demoo);


//await- pauses execution until promise settled

function getnum(){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000)
   })
}

async function demo() {
    await getnum();
    await getnum();
    await getnum();
}
console.log(demo());

let h1= document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        let num=Math.floor(Math.random()*5)+1;
        if(num>3){
            reject("promise rejected");
        }
        setTimeout(()=>{
            h1.style.color=color;
            resolve();
        },delay)
    });
}
async function demo(){
    try{
        await changecolor("red",1000);
        await changecolor("green",1000);
        await changecolor("blue",1000);
        await changecolor("yellow",1000);
    }catch(err){
        console.log(err);
    }

    let a=5;
    console.log(a);
    console.log(a+3);
}