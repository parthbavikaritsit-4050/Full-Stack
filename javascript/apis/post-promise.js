

function addNewData() {
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
            userId: 101,
            title: "parth",
            name: "parth"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((resp) => {
        console.log(resp.status);
        console.log(resp.statusText);
        return resp.json();   // Return Promise
    })
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log(error);
    });
}

addNewData();