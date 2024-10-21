import { Input, Button } from "@material-tailwind/react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/Authcontext";

const LoginRegister = () => {
  const { login, register } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for handling errors


  const toggleForm = () =>{
    setError(null);
    setIsLogin(!isLogin);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try{
      if (isLogin) {
        await login({ email, password });
        console.log("Logging in...");
    } else {
        await register({ email, password });
        console.log("Registering...");
    }
    }catch (err) {
      setError(err.message || "An error occurred. Please try again.");
      console.error("Authentication error:", err);
  }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            color="lightBlue"
            className="border border-gray-300 rounded-lg"
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            color="lightBlue"
            className="border border-gray-300 rounded-lg"
          />
          <Button type="submit" color="lightBlue" className="mt-4 rounded-lg">
            {isLogin ? "Login" : "Register"}
          </Button>
        </form>
        <button
          onClick={toggleForm}
          className="mt-4 text-lightBlue-500 hover:text-lightBlue-700"
        >
          {isLogin ? "Create an account" : "Already have an account?"}
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
