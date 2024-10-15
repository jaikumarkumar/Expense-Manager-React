import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);

    const register = (userData)=>{
        setUser(userData);
    }

    const login = (userData)=>{
        setUser(userData);
    }
    const logout = ()=>{
        setUser(null);
    }

    return(
        <AuthContext.Provider
        value={{
            user,
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