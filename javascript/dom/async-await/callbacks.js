
// // in this code we frist take a paramater named callback
// then later  run callback in setTimeout function (as we are going to give a function as paramaetr)
// so when we dowloadFile(readFile);  it callback=readFile and when callback();it runs like redflie
// will give error if we dont pass  a function as parametarin downloadfile  bcoz callback(); as it is not function

let data=""
function dowloadFile(callback){
    console.log("Downloading....");
    setTimeout(()=>{
        console.log("Download Completed");
        data="ABCD";
        callback(); //now it will print loaded data
    },3000)
}

function readFile(){
    console.log("File Reading");
    console.log(data);
    
}

dowloadFile(readFile);