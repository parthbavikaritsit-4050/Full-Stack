import { Link, Outlet, useNavigate } from "react-router-dom";


function Dashboard() {
     const navigate= useNavigate();

    return (

        <>
            <h1>Dashbaord Componant</h1>
            <nav>
                <Link to={"Profile"}>Profile |</Link>
                <Link to={"Settings"}>Seetings</Link>
                <button onClick={()=>navigate(-1)}>Back</button>

            </nav>
            <Outlet />
        </>
    );
}

export default Dashboard;