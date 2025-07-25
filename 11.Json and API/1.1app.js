// api- application programming interface
// return data in json format

// json- javascript object notation
// key is in string format

let jsonRes='{"fact":"its all okay"}';

console.log(jsonRes);//{"fact":"its all okay"}

// convert json to js
let validRes=JSON.parse(jsonRes);
console.log(validRes); //{fact: 'its all okay'}
console.log(validRes.fact) //its all okay


// convert js to json
let jsRes= JSON.stringify(validRes);
console.log(jsRes); //{"fact":"its all okay"}

// tool hopscoth postman

// ajax- asynchronous javascript and xml (JSON)
//process of api req res is asynchronous



// http verbs- get post put delete quit etc

// status code
// 200 -ok
// 404- not found
// 400- bad request
// 500-internal server error

// additional info in api

// https://www.google.com/search?q=heart+love


// http headers
// inspect - network -search- select any name- headers
// header- supply additonal info
// headers- request header,response header


// api request
// using fetch
let url="https://catfact.ninja/fact";

fetch(url);

// inspect - network- response


// it also return  promise
fetch(url)
.then((response)=>{
    console.log(response);
    // Response {type: 'cors', url: 'https://catfact.ninja/fact', redirected: false, status: 200, ok: true, …}
    // console.log(response.json());//data in readable
    // Promise {<pending>}
    response.json()
    .then((data)=>{
        console.log(data);
        // {fact: 'Cats can judge within 3 inches the precise location of a sound being made 1 yard away.', length: 86}
    })
})
.catch((err)=>{
    console.log("error is",err);
    // error is TypeError: Failed to fetch
});

// shortcut
fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data); //{fact: "The silks created by weavers in Baghdad were inspi… fabrics were called 'tabby' by European traders.",
    return fetch(url); //to make new request
})
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data); //{fact: 'While many parts of Europe and North America consi…n and Australia, black cats are considered lucky.', length: 146}
})
.catch((err)=>{
    console.log("error is: ",err);
})

console.log("i dont wait for api calls");


// fetch with async and await

async function getfacts() {
    let res= await fetch(url); //return promise
    let data=await res.json();//return promise
    console.log(data); //undefined- because js doesnot wait for api call to end
    // so we use await 
}

// we can also put 93-96 in try and catch
getfacts();


// ----------------------
// axios- library to make axios request
// npm install axios- to install
async function getfacts(){
    try{
        let res=await axios.get(url);
        console.log(res);
        // {data: {…}, status: 200, statusText: '', headers: r, config: {…}, …}
        console.log(res.data.fact);
        // ats hate the water because their fur does not insulate well
    }
    catch(e){
        console.log("error",e);
    }
}

getfacts();
// need of axios- directly data is in readable format , no need to parse


// sending header through axios

let link="https://catfact.ninja/fact";

async function getJokes(){
    try{
        const config={headers:{Accept:"application/json"}}; //passing header
        let res=await axios.get(url,config);
        console.log(res.data); //{fact: 'The average litter of kittens is between 2 - 6 kittens.', length: 55}
    }
    catch(e){
        console.log("error",e);
    }
}
getJokes();

// modify query string

let li="http://universities.hipolabs.com/search?name=";
let country="nepal";

async function getcollege() {
    try{
        let res=await axios.get(li+country);
        console.log(res);
    }catch(e){
        console.log("error is",e);
    }
}
getcollege();

// 
// name
// : 
// "Nepal Sanskrit University"