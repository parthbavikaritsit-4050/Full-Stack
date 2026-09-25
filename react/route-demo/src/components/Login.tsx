import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (username === "admin" && password === "admin123") {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/Dashboard");
        } else {
            alert("Invalid credentials!");
            
        }
    };

    return (
        <>
            <h2>Login Component</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br /><br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;
