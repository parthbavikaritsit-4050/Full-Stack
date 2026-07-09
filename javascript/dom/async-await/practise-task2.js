function login(password)
{
    return new Promise((resolve, reject) => {
        if(password=="admin"){
            setTimeout(()=>{
                resolve("Login Succesful...!")
            },2000)
        }

        else {

            reject("Invalid Password");

        }
        
    })
}

function getEmployee(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({name:"Parth",id:101,city:"Pune"})
        },2000)
    })
}

function getProjects()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({poject1:"Manual Testing",project2:"Bug reporting"})
        },2000)
    })
}

function getsalary(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Salary Is 300000")
        },1000)
    })
}

async function AccessDashboard(password){
    try{
    const loginStatus= await login(password);
    console.log(loginStatus);
    
    const info= await getEmployee();
    console.log(info);
    
    const projects= await getProjects();
    console.log(projects);
    
    const Salary= await getsalary();
    console.log(Salary);

    console.log("Task Completed..!");
    
    }

    catch(error){
        console.log("Eror Ocuured",error);
        
    }
    
}


AccessDashboard("admin");
AccessDashboard("admi");