import React, { Children, useContext } from 'react';
import { authData } from '../Provider/AuthProvider';

const Private = ({children}) => {

    const {user} = useContext(authData);
    console.log(user)

    return (
        <div>
            {children}
        </div>
    );
};

export default Private;