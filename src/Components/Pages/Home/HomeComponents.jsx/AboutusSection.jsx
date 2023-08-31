import chefImage from '../../../../img/chef/Suresh_Pillai-removebg-preview.png';
import {SiFoodpanda} from 'react-icons/si';
import {GiFullPizza} from 'react-icons/gi';
import {BiDrink} from 'react-icons/bi'

const AboutusSection = () => {
    return (
        <div className= 'bg-violet-100'>
            <div className='w-10/12 mx-auto flex flex-col-reverse lg:flex-row'>
                <div className='w-full lg:w-6/12 flex justify-center items-end'>
                    <img className='drop-shadow-2xl' src={chefImage} />
                </div>
                <div className='w-full lg:w-6/12 flex flex-col items-center justify-center'>
                    <div>
                        <h1 className='text-3xl lg:text-7xl font-bold my-2'>WE ARE LEGEND</h1>
                        <p>WE DON’T JUST MAKE PIZZA. WE MAKE PEOPLE’S DAYS. VINCENT PIZZERIA WAS BUILT ON THE BELIEF THAT PIZZA SHOULD BE SPECIAL, AND WE CARRY THAT BELIEF INTO EVERYTHING WE DO.</p>

                        <div className='lg:w-10/12 
                        [&>*:nth-child(n)]:my-2 [&>*:nth-child(n)]:p-3'>

                            <div className='flex justify-center items-center gap-5 border-b border-blue-500'><SiFoodpanda className='text-7xl' /><p className='lg:text-2xl'>All made possible by our flavor, innovation and, most importantly.</p></div>

                            <div className='flex justify-center items-center gap-5 border-b border-blue-500'><GiFullPizza className='text-7xl' /><p className='lg:text-2xl'>With more than 50 years of experience under our belts</p></div>

                            <div className='flex justify-center items-center gap-5'><BiDrink className='text-9xl' /><p className='lg:text-2xl'>we understand how to best serve our customers through tried and true service principles.</p></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutusSection;