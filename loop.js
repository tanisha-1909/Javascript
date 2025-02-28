for(let i=1;i<=10;i++){
    console.log(i);
}

// printing all odd number
for(let j=1;j<=15;j++){
    if(j%2!=0){
        console.log(j);
    }
}
// let n=prompt("enter your number")


for(let i=1;i<=10;i++){
    console.log(5*i);
}

// let favmovie="avatar"

// let s="";

// while(s!=favmovie && s!='quit'){
//     // s=prompt("guess movie");
//     if(s==favmovie){
//         console.log("you guessed");
//     }
// }

let fruits=["mango","apple","banana","litchi","orange"];

for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

// for of loop

for(fruit of fruits){
    console.log(fruit);
}

for(c of "tanishamahavar"){
    console.log(c);
}
