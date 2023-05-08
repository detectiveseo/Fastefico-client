import React from 'react';
import ChefsCard from './ChefsCard';

const Chefs = ({chefs}) => {
    return (
        <div className='bg-violet-50 py-20'>
            <div className='w-10/12 mx-auto'>
                <div>
                    <h1 className='text-3xl lg;text-6xl font-bold text-center'>আমাদের মারত্নক কিছু অস্হির শেফ </h1>
                    <div className='flex justify-center items-center'>
                        <hr className=' border-t border-blue-500 w-2/12' />
                        <span className='text-9xl'>*</span>
                        <hr className=' border-t border-blue-500 w-2/12' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                            chefs.map(chef => <ChefsCard key={chef.id} chef={chef}/> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs;