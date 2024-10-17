import { Input, Button } from "@material-tailwind/react";
import { useState, useContext } from "react";

import { AuthContext } from "../context/Authcontext";

const LoginRegister = () => {
    const {login,register} = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("jaikumar.kumar@aspiresys.com");
  const [password, setPassword] = useState("Welcome@123");

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    (isLogin) ? login({email,password}):register({email,password})
    console.log(isLogin ? "Logging in..." : "Registering...");
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>
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
