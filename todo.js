let task=["eat","sleep","code","bath","write"];



while(true){

    let action=prompt("enter operation to perform");

    if(action=="quit"){
        console.log("quitting todo");
        break;
    }
    else if(action=="list"){
        for(tasks of task){
            console.log(tasks);
        }
    }
    else if(action=="add"){
        let ele=prompt("enter task you want to add");
        task.push(ele);
        console.log("task added");
    }
    else if(action=="delete"){
        let ele=prompt("enter task number you want to delete");
        task.splice(ele,1);
        console.log("task deleted");

    }
    else{
        console.log("enter valid action")
    }
}



