import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Menu = () => {
    const notify = (e) => {
        toast.success("Add Success")
        const btn = e.target;
        btn.setAttribute("disabled", "")
    };
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
                            const { chef, description, fat, img, name, price, protein } = food;
                            return (
                                <div className='border border-blue-500' key={name}>
                                    <img className='w-full  h-[300px] object-cover' src={img} alt="" />
                                    <div className='p-5'>
                                        <h4 className='text-3xl font-bold'>{name}</h4>
                                        <div className='flex justify-between p-2 text-center font-bold'>

                                            <span >Protein {protein}</span>

                                            <span >Fat {fat}</span>

                                            <span>Protein {protein}</span>
                                        </div>
                                        <p className='h-[70px]'>{description}</p>

                                        <div className='flex justify-between'>
                                            <span className='text-lg mt-2 font-bold'>{chef}</span>

                                            <span className='text-2xl font-bold'>{price} $</span>
                                        </div>
                                        <button onClick={notify} className='btn mt-3 bg-blue-400 w-full'>Add To Cart</button>
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