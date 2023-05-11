import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    const Menu = () => {
        const notify = (e) => {
            toast("এটি তুমার পছন্দ আমরা মেনে নিলাম  🥰")
            const btn = e.target;
            btn.setAttribute("disabled", "") 
        };
        const [foods, setFoods] = useState([]);
        const [pagination, setPagination] = useState(8);
        const [hideBtn, setHideBtn] = useState(false);

        const handlePagination = () => {
            if(pagination >= foods.length + 1){
                setHideBtn(true)
            }
            setPagination(pagination + 4);
            
        }
        useEffect(() => {
            fetch("https://server-detectiveseo.vercel.app/foods")
            .then((res) => res.json())
            .then((data) => setFoods(data))
        }, [])


        return (
            <div className=' bg-violet-50'>
                <div className='w-10/12 mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 py-10'>
                    {
                        foods.slice(0, pagination).map(food => {
                            const {chef, description, fat, img, name, price, protein} = food;
                            return (
                                <div key={name}>
                                        <img className='w-full h-[400px] object-cover' src={img} alt="" />
                                        <div  className='p-3 border border-blue-500'>
                                        <h4 className='text-2xl font-bold'>{name}</h4>
                                        <div className='flex justify-between'>
                                            <span>{price} $</span>
                                            <span>Protein {protein}</span>
                                        </div>
                                        <p className='h-[70px]'>{description}</p>
                                        <button onClick={notify} className='btn mt-3'>এক্কারে মনের মতো </button>
                                        </div>
                                    </div>
                            )
                        })
                    }</div>
                    <ToastContainer />
                    <div className='flex flex-col items-center py-10'>
                       <button 
                       onClick={handlePagination} 
                       className={hideBtn ? "hidden" : "block btn bg-blue-500"}>See more</button>
                    </div>
                </div>
    
            </div>
        );
    }



export default Menu;