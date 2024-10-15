import "./index.css";
import { useContext } from 'react'
import { AuthContext } from "./context/Authcontext";
import LoginRegister from "./components/Login";
import Dashborad from "./components/Dashboard";

function App() {
  const { user } = useContext(AuthContext)
  return (
    <>
    {
      (user) ? <Dashborad /> : <LoginRegister />
    }
    </>
  );
}

export default App;