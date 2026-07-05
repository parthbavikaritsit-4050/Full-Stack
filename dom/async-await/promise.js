function checkuserstatus(status){
    const promise=new Promise((resolve, reject) => {
        if(status) resolve("Task Completed");
        else reject("Task Failed");        
    

    } );
    return promise;
}

abhishek= checkuserstatus(true);
bhaksar= checkuserstatus(false);

abhishek
.then(result=>console.log("Abhishek's Task:",result))
.catch(err=>console.log("Abhishek:",err))

bhaksar
.then(result=>console.log("bhaksr's Task:",result))
.catch(err=>console.log("BHaksar:",err))

