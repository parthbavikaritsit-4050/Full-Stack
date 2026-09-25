const data=fetch("https://jsonplaceholder.typicode.com/users/1");

data
.then(resp=>resp.json())//returs a new promise since resp.json returns a new promise that promise passed to .then automatically
.then(resp=>console.log(resp))
.catch(err=>console.log(err))


fetch("https://jsonplaceholder.typicode.com/users")  
.then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log("Name:", user.name);
            console.log("Email:", user.email);
            console.log("Username:", user.username);
            console.log("----------------------");
        });
    })
    .catch(error => console.log(error));



fetch("https://fakestoreapi.com/products")
.then(resp=>resp.json())
.then(resp=>{
    resp.forEach(element=>
        {console.log(element.title)
        console.log(element.price)
        console.log(element.category)
        console.log("----------------------");

        }
)})
.catch(err=>console.log(err)
)
