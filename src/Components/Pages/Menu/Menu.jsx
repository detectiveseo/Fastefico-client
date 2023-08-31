import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuCard from '../../Shared/MenuCard';


const Menu = () => {
    
    const [foods, setFoods] = useState([]);
    const [pagination, setPagination] = useState(8);
    const [hideBtn, setHideBtn] = useState(false);

    const handlePagination = () => {
        if (pagination >= foods.length + 1) {
            setHideBtn(true)
        }
        setPagination(pagination + 4);

    }
    useEffect(() => {
        fetch("http://localhost:3000/foods")
            .then((res) => res.json())
            .then((data) => setFoods(data))
    }, [])


    return (
        <div className=' bg-violet-50'>
            <div className='w-10/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 py-10'>
                    {
                        foods.slice(0, pagination).map(food => {
                            return (
                                <MenuCard key={food.id} food={food}></MenuCard>
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