import React, { createContext } from 'react';


export const authData = createContext(null);

const AuthProvider = ({children}) => {

    const user = {
        name: "imran",
    }
    const authValue = {
        user,
    }
    return (
        <authData.Provider value={authValue}>
                {children}
        </authData.Provider>
    );
};

export default AuthProvider;