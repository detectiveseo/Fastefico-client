import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTelephone, BsPinterest } from 'react-icons/bs';

const Chef = () => {
    const {id, picture, name, experience_years, recipe_count, bio} = useLoaderData();
  

    return (
        <div className=' bg-violet-50'>
            <div className='lg:w-10/12 mx-auto'>
                <div className='flex'>
                    <img className='w-6/12 h-[700px] object-cover' src={picture} alt="" />
                    <div className='flex flex-col justify-center w-6/12 mx-auto p-5'>
                        <h4 className='font-bold text-4xl uppercase'>{name}</h4>
                        <h4 className='font-bold text-2xl'>I'm {experience_years} experiencd</h4>
                        <h4 className='font-bold text-2xl'>My Recipe: {recipe_count}</h4>
                        <h4 className=''>{bio}</h4>
                        <hr className='mt-4 mb-2 border-t border-blue-400' />
                        <div className='flex text-4xl gap-2 text-blue-600'>
                            <BsFacebook />
                            <BsInstagram />
                            <BsTelephone />
                            <BsPinterest />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;