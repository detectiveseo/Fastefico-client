import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Components/Pages/Home/Home';
import Menu from '../Components/Pages/Menu/Menu';
import Chef from '../Components/Pages/Chef/Chef';
import SingIn from '../Components/Account/SingIn';
import SingUp from '../Components/Account/SingUp';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/chef/:id",
                element: <Chef></Chef>,
                loader: ({params}) => fetch(`http://localhost:2000/chefs/${params.id}`)
            },
            {
                path: "/sing-in",
                element: <SingIn></SingIn>
            },
            {
                path: "/sing-up",
                element: <SingUp></SingUp>
            }
        ]
    },
    {
        path: "/*",
        element: "404 error"
    }
])
