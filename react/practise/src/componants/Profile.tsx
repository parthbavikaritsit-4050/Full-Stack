import { useUser } from "../context/UserContext";

const Profile = () => {
    const { user } = useUser();

    return (
        <div>
            <h2>Profile</h2>

            {user ? (
                <>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </>
            ) : (
                <p>No user logged in</p>
            )}
        </div>
    );
};

export default Profile;