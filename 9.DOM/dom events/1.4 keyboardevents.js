let btn=document.querySelector('button');


// event is default argument
btn.addEventListener('click',function(event){
    console.log(event); //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log("button clicked");
});


// keydown- when key is pressed
let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log(event); //KeyboardEvent {isTrusted: true, key: 'd', code: 'KeyD', location: 0, ctrlKey: false, …}
    console.log("key pressed");
})

// keyup- when key is released
inp.addEventListener("keyup",function(){
    // event.key =a
    // event.code=keyA
    console.log("key released");
})