import { useState, type SubmitEvent} from "react";

function Login() {

    const [username, setusername] = useState("");
    const [userpass, setuserpass] = useState("");

    const handleSubmit=(e:SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(username=="admin" && userpass=="admin123")
            alert("Login Successful!")
        else    
            alert("Invalid Credentials")
    }

    return (



        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => { setusername(e.target.value) }} />
            <input type="text" placeholder="Password" value={userpass} onChange={(e) => { setuserpass(e.target.value) }} />
            <button type="submit"> Login</button>


        </form>
    );
}

export default Login;