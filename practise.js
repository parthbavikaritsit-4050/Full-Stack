function login(password){
    return new Promise((resolve,reject)=>{
        if(password=="admin")
        {
            setTimeout(()=>{
            resolve("Login succesful..!")
            },2000)
        }

        else{
            setTimeout(()=>{
                reject("Invalid Password..!")

            })
        }
    })
}

function getProfile()
{
    return new Promise((resolve, reject) => {
        setTimeout(()={
            resolve({id:101,name:"Parth"})
        })
    })
}

function getMarks()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({java:90,javascript:95,react:92})
        })
    })
}

async function studentportal(password) {
    try{
        const loginStatus=await login(password);
        console.log(loginStatus);
        const student = await getProfile();
        console.log(student);
        const marks= await getMarks();
        console.log(marks);
    } catch (error) {
        console.log("Error occured: ",error);
    } finally{
        console.log("Portal Closed!");
    }
}

studentPortal("admin");
studentPortal("admin123");
// here you can see both methods portal executed parrellelly