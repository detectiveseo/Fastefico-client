import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';

import { BsFacebook, BsInstagram, BsTelephone, BsPinterest } from 'react-icons/bs';

const Chef = () => {
    const {id, picture, name, experience_years, recipe_count, bio} = useLoaderData();
  
    const [recipes, setRecipes] = useState([]);
    useEffect(()=> {
        fetch(`https://server-detectiveseo.vercel.app/foods/${name}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    }, [])

    const notify = (e) => {
        toast("এটি তুমার মনের মতো আমরা মেনে নিলাম 🥰");
        const btn = e.target;
        btn.setAttribute("disabled", "") 
    }



    return (
        <div className=' bg-violet-50'>
            <div className='lg:w-10/12 mx-auto'>
                <div className='block lg:flex'>
                    <img className='w-full lg:w-6/12 h-[700px] object-cover' src={picture} alt="" />
                    <div className='flex flex-col justify-center w-full lg:w-6/12 mx-auto p-5'>
                        <h4 className='font-bold text-4xl uppercase'>{name}</h4>
                        <hr className='mt-4 mb-2 border-t border-8 w-2/12 border-blue-400' />
                        <h4 className='font-bold text-2xl'>I'm {experience_years} experiencd</h4>
                        <h4 className='font-bold text-2xl'>My Recipe: {recipes.length}</h4>
                        <h4 className='my-10 font-bold'>{bio}</h4>

                        <div className='flex text-4xl gap-2'>
                            <BsFacebook />
                            <BsInstagram />
                            <BsTelephone />
                            <BsPinterest />
                        </div>
            
                    </div>
                </div>


                <div className='w-10/12 lg:w-full mx-auto'>
                    <h2 className='text-5xl font-bold mt-10'>My Recipes</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 justify-between gap-6 mt-10'>
                        {
                            recipes.map(recipe => {
                                const {name, price, description, protein, img} = recipe;
                                return (
                                    <div key={name}>
                                        <img className='w-full h-[400px] object-cover' src={img} alt="" />
                                        <div  className='p-3 border border-blue-500'>
                                        <h4 className='text-2xl font-bold'>{name}</h4>
                                        <div className='flex justify-between'>
                                            <span>{price} $</span>
                                            <span>Protein {protein}</span>
                                        </div>
                                        <p>{description}</p>
                                        <button onClick={notify} className='btn mt-3'>এক্কারে মনের মতো </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};

export default Chef;