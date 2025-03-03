// this is called call stack!
// stack - demo call- hello call- hello return - demo return


// example-1
function hello(){

    console.log("hello");
}

function demo(){
    hello();
}

demo();


// example-2

function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
   let ans=one()+ two();
   return ans;
}

console.log(three());