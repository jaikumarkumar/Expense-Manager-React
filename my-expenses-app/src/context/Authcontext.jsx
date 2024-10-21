import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import {API_BASE_URL} from '../constants/constants'

import {firebaseActivity} from '../config/providers';

export const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [jwt, setJwt] = useState(localStorage.getItem("token"));

    const register = async (userData)=>{
        const userEmail = await firebaseActivity.registerWithCredentials(userData)
        console.log('userId',userEmail);
        setUser(userEmail);
    }

    const login = async ({email,password})=>{
        try{
            const response = await fetch(API_BASE_URL +'/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password}),
                });
            
            const data = await response.json();
            if (!response.ok) {        
                // const ErrorData = await response.json();
                throw new Error(`Invalid login credentials : ${data.message}`); // Handle non-200 responses
            }
            
            if (data.Token){
                setUser(email)                
                localStorage.setItem("token", data.Token);
                return setJwt(data.Token)
            }
            else {
                throw new Error("Login failed....");
            }
        }
        catch(error){
            console.error("Login error:", error.message);
            throw new Error(error.message);
        }
    }
    const logout = () => {
    console.log("logout clicked")
    // Implement logout functionality
    setUser(null);
    setJwt(null);
    localStorage.removeItem("token");

  };

    return(
        <AuthContext.Provider
        value={{
            user,
            jwt,
            register,
            login,
            logout
        }}>
        {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes ={
    children:PropTypes.object
}