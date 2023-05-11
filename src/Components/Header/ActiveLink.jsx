import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children, to}) => {
    return (
        <NavLink 
        to={to}
        className={({isActive}) => isActive ? "underline text-3xl" : ""}>
             {children}
        </NavLink>
    );
};

export default ActiveLink;