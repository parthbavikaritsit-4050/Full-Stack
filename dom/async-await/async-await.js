async function fetchdata(){

    try{
        const response= await fetch("https://jsonplaceholder.org/posts/1");
        console.log(response.status);
        const json= await response.json();
        console.log(json); 
    }

    catch(err){
        console.log("Eror:",err);
        

    }

}
 

fetchdata();
