import React from 'react';
import { useState } from 'react';
import registrationImage from '../../img/Banner/h2-gallery-big-8.jpg';
import { Link } from 'react-router-dom';
const SingUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='bg-violet-100 flex'>

            <div className='w-full lg:w-6/12 mx-auto '>
                <form className='flex flex-col gap-5 p-20'>
                    <h1 className='text-center text-4xl font-bold mb-3'>নতুন মানুষ তুমাকে দেখে খুব আনন্দ বোধ করছি 🥳</h1>

                    <label className='w-full font-bold text-2xl' htmlFor="email">সম্পুর্ণ নাম
                        <input className='p-3 w-full text-1xl font-normal border-b-4 border-blue-500 bg-slate-100' required type="email" name='email' placeholder='নাম কি তুমার ?'  />
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
                    <p>তুমার যদি আগের একাউন্ট থেকে থাকে এখানে কি করো ? হুহ... <Link to="/sing-in" className='underline'>লগইন করো</Link> </p>
                    <input className='btn bg-blue-500 text-3xl py-3 px-10 pb-12' type="submit" value="লগইন"/>
                </form>
            </div>
            <div className='w-6/12 hidden lg:block'>
                <img src={registrationImage} alt="" />
            </div>
        </div>)
};

export default SingUp;