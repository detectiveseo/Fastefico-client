import React from 'react';
import heroImage from '../../../../img/Banner/h2-gallery-big-3.jpg'

const Hero = () => {
    return (
        <div className=' bg-violet-50 border-y border-blue-500'>
            <div className='w-10/12 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='flex justify-center items-center ml-0 lg:ml-24'>
                    <div>
                        <h1 className='text-5xl lg:text-8xl font-bold mt-10 lg:mt-0'>সারাদিন ঘোরো, ফিরো -  কি এতো কাজ ?</h1>
                        
                        <button className='btn bg-blue-500 text-4xl py-3 px-10 pb-14 mt-10'>খাবারের মেনু</button>
                    </div>
               </div>
               
               <div className='border border-blue-500 w-full'>
                <img className='w-full' src={heroImage} alt="" />
               </div>
            </div>
        </div>
    );
};

export default Hero;