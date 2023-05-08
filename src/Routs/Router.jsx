import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Components/Pages/Home/Home';
import Menu from '../Components/Pages/Menu/Menu';



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
            }
        ]
    },
    {
        path: "/*",
        element: "404 error"
    }
])
