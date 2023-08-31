import { useEffect, useState } from 'react';
import ChefsCard from './ChefsCard';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("https://b7a10-chef-recipe-hunter-server-side-detectiveseo.vercel.app/chefs")
        .then((res) => res.json())
        .then(data => setChefs(data))
    }, [])
    return (
        <div className='bg-violet-50 py-20'>
            <div className='w-10/12 mx-auto'>
                <div>
                    <h1 className='text-3xl lg;text-6xl font-bold text-center'>Our Best Experience Chefs</h1>
                    <div className='flex justify-center items-center'>
                        <hr className=' border-t border-blue-500 w-2/12' />
                        <span className='text-9xl'>*</span>
                        <hr className=' border-t border-blue-500 w-2/12' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                            chefs?.map(chef => <ChefsCard key={chef.id} chef={chef}/> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs;