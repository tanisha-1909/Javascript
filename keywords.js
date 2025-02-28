// this keyword

 let thread={
    username:"tanisha_1909",
    content:"languages",
    likes:100,
    reposts:10,
    tags:["@tanisha_1909","@lang","@insta"],
    getavg(){
        console.log(this);
        let avg=(this.likes+this.reposts)/2;
        return avg;
    }
};

console.log(thread.getavg());
console.log(this);

// window-highest level object
console.log(window);

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// try and catch
try{
    console.log(a);
}catch(err){
    console.log("a is not declared")
    console.log(err);
    // ReferenceError: a is not defined
}