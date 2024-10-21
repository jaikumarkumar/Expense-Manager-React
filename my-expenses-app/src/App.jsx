import "./index.css";
import { useContext,useState,useEffect } from 'react'
import { AuthContext } from "./context/Authcontext";
import LoginRegister from "./components/Login";
import Dashborad from "./components/Dashboard";

function App() {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  return (
    <>
    {
      (token) ? <Dashborad /> : <LoginRegister />
    }
    </>
  );
}

export default App;