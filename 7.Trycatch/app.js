//this keyword
//refers to an object that is executing current piece of code

const student={
    name:"shraddha",
    age:23,
    eng:95,
    maths:80,
    getavg(){
        console.log(this);
        avg=(this.eng+this.maths)/2;
        console.log(avg);
    }
}
student.getavg();

function getavg(){
        console.log(this);
        avg=(this.eng+this.maths)/2;
        console.log(avg);
}
getavg();

//try catch

try{
    console.log(a);
}
catch(err){
    console.log("error..a not defined");
    console.log(err);
}