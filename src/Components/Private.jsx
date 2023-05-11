import React, { Children, useContext } from 'react';
import { authData } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {

    const {user} = useContext(authData);
    if(!user){
        return (
            <Navigate to="/sing-in" replace={true}></Navigate>
        );
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default Private;