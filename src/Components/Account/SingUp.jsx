import React, { useContext } from 'react';
import { useState } from 'react';
import registrationImage from '../../img/Banner/h2-gallery-big-8.jpg';
import { Link } from 'react-router-dom';
import { authData } from '../../Provider/AuthProvider';
const SingUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")
    const {createUserEmailFuc, clickToCreateUserWtihGoogle, clickToCreateUserWtihGitHub, loader} = useContext(authData);
    // handle from 
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            setError("পাসওয়ার্ট 6 অক্ষরের বেশী লেখো")
        }else{
            setError("")
            createUserEmailFuc(email, password, name, image);
            form.reset()
        }

    }
    return (
        <div className='bg-violet-100 flex'>

            <div className='w-full lg:w-6/12 mx-auto '>
                <form className='flex flex-col gap-5 p-20 pb-5' onSubmit={handleForm}>
                    <h1 className='text-center text-4xl font-bold mb-3'>নতুন মানুষ তুমাকে দেখে খুব আনন্দ বোধ করছি 🥳</h1>

                    <label className='w-full font-bold text-2xl' htmlFor="name">সম্পুর্ণ নাম
                        <input className='p-3 w-full text-1xl font-normal border-b-4 border-blue-500 bg-slate-100' required type="text" name='name' placeholder='নাম কি তুমার ?'  />
                    </label>

                    <label className='w-full font-bold text-2xl' htmlFor="image">তোমার ছবি
                        <input className='p-3 w-full text-1xl font-normal border-b-4 border-blue-500 bg-slate-100' required type="text" name='image' placeholder='তোমার ছবির লিংক দাও'  />
                    </label>

                    <label className='w-full font-bold text-2xl' htmlFor="email">ইমেইল
                        <input className='p-3 w-full text-1xl font-normal border-b-4 border-blue-500 bg-slate-100' required type="email" name='email' placeholder='তুমার ইমেল ঠিকানা ?'  />
                    </label>

                    <label className='w-full font-bold text-2xl' htmlFor="password">
                        <div className='flex justify-between'>
                            <span>পাসওযার্ড</span>
                            <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? "পাসওযার্ড লোকাও" : "পাসওযার্ড দেখো"}</span>
                        </div>
                        <input className='p-3 w-full font-normal text-1xl border-b-4 border-blue-500 bg-slate-100' type={showPassword ? "text" : "password"} required name="password" placeholder='তুমার গোপন পাসওযার্ড ?' />
                    </label>
                    <p className='text-red-600'>{error}</p>
                    <p>তুমার যদি আগের একাউন্ট থেকে থাকে এখানে কি করো ? হুহ... <Link to="/sing-in" className='underline'>লগইন করো</Link> </p>
                    <input className='btn bg-blue-500 text-3xl py-3 px-10 pb-12' type="submit" value="রেজিস্টেশন"/>
                </form>

                {/* or option for registration  */}
                <div className='flex justify-center items-center'>
                        <hr className=' border-t border-blue-500 w-4/12' />
                        <span>OR</span>
                        <hr className=' border-t border-blue-500 w-4/12' />
                    </div>
            <div className='flex justify-center gap-5 my-2'>
                <div onClick={clickToCreateUserWtihGoogle} className='border border-blue-500 py-3 px-7 text-3xl font-bold rounded'>Google</div>

                <div onClick={clickToCreateUserWtihGitHub} className='border border-blue-500 py-3 px-7 text-3xl font-bold rounded'>GitHub</div>
            </div>
            </div>
            <div className='w-6/12 hidden lg:block m-0'>
                <img className='w-full' src={registrationImage} alt="" />
            </div>
        </div>)
};

export default SingUp;