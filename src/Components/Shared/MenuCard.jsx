import { toast } from "react-toastify";

const MenuCard = ({food}) => {
    const { chef, description, fat, img, name, price, protein } = food;

    const notify = (e) => {
        toast.success("Add Success")
        const btn = e.target;
        btn.setAttribute("disabled", "")
    };
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
    );
};

export default MenuCard;