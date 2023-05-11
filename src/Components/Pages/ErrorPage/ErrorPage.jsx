import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-violet-50'>
            <div className='w-10/12 mx-auto text-center'>
                <h1 className='text-9xl lg:text-[400px] font-bold'>404</h1>
                <Link to="/">
                <button className='btn text-7xl text-blue-400 mb-20'>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;