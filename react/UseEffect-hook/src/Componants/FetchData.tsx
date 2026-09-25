import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}
function FetchData() {

    const [users, setUsers] = useState<User[]>([]); //default value is []

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const json = await response.json();
                setUsers(json); //update state
                console.log(json);
                console.log(json[1].nam);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData(); //call function inside useeffect
        // It will run in the background
    }, [])
    return (
        <>
            <h1>User's List</h1>
            {
                users.map(user => (
                    <div style={{border:"2px solid black", margin:"5px", padding:"3px"}} key={user.id}>
                        <h3>Name: {user.name}</h3>
                        <p>Email: {user.email}</p>
                    </div>
                ))
            }
        </>
    );
}
export default FetchData;