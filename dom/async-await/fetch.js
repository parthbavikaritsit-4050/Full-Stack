const data=fetch("https://jsonplaceholder.org/posts/1");
console.log(data);//this prints pending as data not fetched yet

data
.then(result=>result.json())
.then(json=>console.log(json))
.catch(err=>console.log("Error:",err))
.finally("Task Completed Succesfully")

console.log("Hi user");