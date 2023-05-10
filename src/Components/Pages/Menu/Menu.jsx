import React, { useEffect, useState } from 'react';


    const Menu = () => {
        const [foods, setFoods] = useState([]);
        const [pagination, setPagination] = useState(8);
        const [hideBtn, setHideBtn] = useState(false);

        const handlePagination = () => {
            setPagination(pagination + 4);
            if(pagination >= foods.length + 1){
                setHideBtn(true)
            }
            
        }
        useEffect(() => {
            fetch("http://localhost:2000/foods")
            .then((res) => res.json())
            .then((data) => setFoods(data))
        }, [])

        console.log(foods)

        return (
            <div className=' bg-violet-50'>
                <div className='w-10/12 mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 my-10'>
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
                                        <button className='btn mt-3'>এক্কারে মনের মতো </button>
                                        </div>
                                    </div>
                            )
                        })
                    }</div>
                    <div className='text-center'>
                       {!hideBtn ? <button onClick={handlePagination} className='btn bg-blue-500'>See more</button> : ""}
                    </div>
                </div>
    
            </div>
        );
    }



export default Menu;