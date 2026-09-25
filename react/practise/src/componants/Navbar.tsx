import { useUser } from "../context/UserContext";

const Navbar = () => {
    const { user, login, logout } = useUser();

    return (
        <nav>
            {user ? (
                <>
                    <h3>Welcome, {user.name}</h3>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <h3>Welcome, Guest</h3>
                    <button onClick={login}>Login</button>
                </>
            )}
        </nav>
    );
};

export default Navbar;