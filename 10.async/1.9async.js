// async function -async and await

// async- write async as prefix
// returns a promise;

async function greet(){
    return "hello!"; //promise
}

console.log(greet());
// Promise {<fulfilled>: 'hello!'}

// ---always returns a promise

async function greetNoReturn(){
    
}
console.log(greetNoReturn());
// Promise {<fulfilled>: undefined}


// --error in function
async function greet_err(){
    // abc.abc();
    return "hello!"; //promise
}
console.log(greet_err());
// Promise {<rejected>: ReferenceError: abc is not defined
// at greet_err (file:///C:/Users/Tanisha/Desktop/Javascript/as…}

// promise

greet_err()
.then(()=>{
    console.log("promise was resolved")
})
.catch((err)=>{
    console.log("promise was rejected with error: " ,err);
    // promise was rejected with error:  ReferenceError: abc is not defined
})


// making arrow function async
let demo=async()=>{
    async()=>{
        return 5;
    }
}
console.log(demo);
// async()=>{
//     return 5;
// }


// -----------------------------------------------------await
// pauses the execution of its surrounding async function until promise is settled(resolved or rejected)

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });

}
// await can be used only in async function
async function demoo (){
    await getNum();
    await getNum();
    getNum();
}

console.log(demoo());

// color change
let h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("rejected");
            }
            h1.style.color=color;
            console.log("color changed");
            resolve();
        },delay)
    })
}
async function dem(){
    try{
        await changecolor("red",1000);
        await changecolor("blue",1000);
        await changecolor("green",1000);

    }
    catch(err){
        console.log(err);
    } //now rest of code will be executed even if promise gets rejected
    let a=5;
    console.log(a);
    console.log("new number",a+3);
}
dem();

// if any promise is rejected is await so rest of not work
// solution put await in try and catch