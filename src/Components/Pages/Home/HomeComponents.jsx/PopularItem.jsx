import riceImg from '../../../../assets/rice.webp'
import img1 from '../../../../assets/rice.webp'
import img2 from '../../../../assets/bunaKhichuri.jpg'
import img3 from '../../../../assets/ilishMas.jpg'
import img4 from '../../../../assets/ilishMas-torkari.webp'

const PopularItem = () => {
    return (
        <div className='flex flex-col md:flex-row '>
            <div className='md:w-6/12'>
                <img className='w-full h-[80vh] object-cover' src={riceImg} alt="" />
            </div>
            <div className='md:w-6/12'>
                <div className='flex flex-col justify-center h-full p-10'>
                    <h1 className='text-5xl font-bold'>BEEF STEAK WITH GREEN</h1>
                    <h3 className='text-9xl'>-$45</h3>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>
                    <div className='grid grid-cols-2 gap-2 md:grid-cols-4 mt-10'>
                        <img 
                        className=' w-44 h-44 object-cover' 
                        src={img1} 
                        alt="" />
                        <img 
                        className=' w-44 h-44 object-cover' 
                        src={img2} 
                        alt="" />
                        <img 
                        className=' w-44 h-44 object-cover' 
                        src={img3} 
                        alt="" />
                        <img 
                        className=' w-44 h-44 object-cover  ' 
                        src={img4} 
                        alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularItem;