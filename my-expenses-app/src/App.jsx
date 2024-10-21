import "./index.css";
import LoginRegister from "./components/Login";
import Dashborad from "./components/Dashboard";
import { AuthContext } from "./context/Authcontext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  return <>{token && user ? <Dashborad /> : <LoginRegister />}</>;
}

export default App;
