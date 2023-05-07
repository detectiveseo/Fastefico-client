import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../Components/Header/Header';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />
    },
    {
        path: "/*",
        element: "404 error"
    }
])
