let students=["tanisha","kanika","kashish"];
console.log(students);
console.log(students[2]);
console.log(students.length);
console.log(students[1][0]);//k

//empty array
let emp_arr=[0];
console.log(emp_arr);

//arrays are mutable
students[1]="aman";
console.log(students);
//(3) ['tanisha', 'aman', 'kashish']

//array methods
let college=["poornima", "jerc","skit"];

//push- end
college.push("aayojan");
console.log(college);

//pop- end
college.pop();
console.log(college);

//unshift- push start
college.unshift("gkm");
console.log(college);

//shift - pop start
college.shift();
console.log(college.shift());//poornima
console.log(college);

//conacatenate
college.concat(students);
console.log(college);//no changes
console.log(college.concat(students));

//reverse
console.log(college.reverse()); //['skit', 'jerc']
console.log(college); //['skit', 'jerc']

//splice

//remove
college.splice(0,1);
console.log(college); //jecrc

//remove,add
college.splice(0,1,"poornima", "gkm"); //delete count is 1
console.log(college); //['poornima', 'gkm']

//replace, add
college.splice(0,0,"poornima", "gkm"); //delete count is 0
console.log(college); //['poornima', 'gkm', 'poornima', 'gkm']

//object literals
const student={
    name:"tanisha",
    age:21,
    city:["jaipur","alwar"]
};
console.log(student);
console.log(student.name);
console.log(student["city"]);

// add or update value in object literal
student.city.push("kota");
console.log(student);

student.gender="female";
console.log(student);

//delete key
delete student.age;
console.log(student);


//object of objects

const classInfo={
    tanisha:{
        grade: "A",
        city:"jaipur"
    },
    vishal:{
        grade: "A",
        city:"jaipur"
    }
};

console.log(classInfo.vishal.grade);


//array of objects;
const classInfoo=[
    {},
    {},
    {}
];

console.log(Math.PI);
console.log(Math.E)
console.log(Math);

//methods
console.log(Math.abs(-5)); //5
console.log(Math.pow(2,4));//16
console.log(Math.floor(2.8)); //2
console.log(Math.ceil(5.2)); ///6
console.log(Math.random()); //0 to 1

//random interges - between 1 to 10
let step1=Math.random();
let step2=step1*10;
let step3=Math.floor(step2)+1;
console.log(step3);

//between 1 and 50
let x= Math.floor(Math.random()*50)+1;
console.log(x);

//between 32 and 35
let y=Math.floor(Math.random() * 4)+32;


//functions

function printName(){
    console.log("tanisha");
}
printName();

//methods
const calculator={
    add: function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}

console.log(calculator.add(1,2));
console.log(calculator.sub(2,3));