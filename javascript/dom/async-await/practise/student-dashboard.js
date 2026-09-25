function getlogin(password){
    return new Promise((resolve, reject) => {
        

    if(password=="admin") {
        setTimeout(()=>{ resolve("Login Succesful");},2000)}
        

     else{
        reject("Invalid Password");
     }

     })
    
}


function getprofile(){
    return new Promise((resolve, reject) => {
    
    setTimeout(()=>{resolve("Profile Name");
    
    },2000)
    })
}


function getmarks(){
    return new Promise((resolve, reject) => {
    
        setTimeout(()=>{resolve("Marks Of 87 out of 100");},2000)
        })
    
}


function getattendance(){
    return new Promise((resolve, reject) => {
   
        setTimeout(()=>{ resolve("Attendance");},2000)
        })
    
}

function getlogout(){
    return new Promise((resolve, reject) => {
        
    setTimeout(() => {resolve("Logged Out");
    
        
    }, 2000);
    })
}


async function dahsboard(){
try{
    const login=await getlogin();
    console.log(login);
    
const marks=await getmarks();
    console.log(marks);
    
const profile=await getprofile();
    console.log(profile);
    
const Attendance=await getattendance();
    console.log(Attendance);
    
const logout=await getlogout();
    console.log(logout);
    

}

catch(err){
    console.log(err);
    
}
}

dahsboard();