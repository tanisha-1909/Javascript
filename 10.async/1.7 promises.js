// to cure callback hell- promises,await,async

function  saveToDb(data,success,failure){

    let internetSpeed= Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        // console.log("your data was saved");
        success();
    }
    else{
        // console.log("weak connection.data not saved");
        failure();
    }
    
}

// single
saveToDb(10,()=>{
    console.log("success:your data was saved");
},()=>{
    console.log("failure:weak connection.data not saved");
});

nesting
callback

saveToDb(10,()=>{
    console.log("success:your data was saved");
    saveToDb("helo",()=>{
        console.log("success:your data was saved")
    },()=>{
        console.log("failure:weak connection.data not saved"); 
    })
},()=>{
    console.log("failure:weak connection.data not saved");
});

// o/p failure:weak connection.data not saved



// promise= it is an object that represent the completion or failure of an asynchronous operation and its resultant value
function  saveToDb(data){

    return new Promise((resolve,reject)=>{
        let internetSpeed= Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success:data was saved");
        }
        else{
            reject("failure: data not saved");
        }
    });
    
}

console.log(saveToDb("tanisha mahavar"));
// Promise {<rejected>: 'failure: data not saved'}
// Promise {<fulfilled>: 'success:data was saved'}


let request= saveToDb("tanisha"); //req- promise object
request.then(()=>{  //fulfilled
    console.log("promise was resolved")
})
.catch(()=>{ //rejected
    console.log("promise was rejected");
});


// promise chaining - multiple then , 1 catch

saveToDb("tanisha").then(()=>{
    console.log("promise was resolved");
    saveToDb("mahavar").then(()=>{
        console.log("data2 saved");
    });
})
.catch(()=>{
    console.log("promise was rejected");
});

// promise chaining- better version of above
saveToDb("tanisha")
.then((result)=>{
    console.log(result); //success:data was saved
    console.log("promise 1 was resolved");
    return saveToDb("mahavar");
})
.then((result)=>{
    console.log(result);
    console.log("data 2 resolved");
})
.catch((error)=>{
    console.log(error); //failure: data not saved
    console.log("promise was rejected");
});


function saveToDb(data,success,failure){
    let internetSpeed= Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        // console.log("your data was saved");
        success();
    }
    else{
        // console.log("data not save");
        failure();
    }
}

saveToDb("hii",()=>{
    console.log("your data was save");
    saveToDb("hello world",()=>{
        console.log("success2")
    },()=>{
        console.log("failure2");
    })
}, ()=>{
    console.log("failure");
});



