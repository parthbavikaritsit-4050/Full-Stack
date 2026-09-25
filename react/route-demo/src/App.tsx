import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settingd";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchPage from "./components/RefDemo";
function App() {


  return (

    <>
      <BrowserRouter>
        <Link to={"/"}>Home |</Link>
        <Link to={"/Login"}>Login</Link>| 
        <Link to={"/Search"}>Search</Link>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Search" element={<SearchPage />}></Route>
          <Route element={<ProtectedRoute />}>
          <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Profile" element={<Profile />}></Route>
          <Route path="Settings" element={<Settings />}></Route>
          </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;