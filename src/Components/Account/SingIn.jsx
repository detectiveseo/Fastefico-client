import React, { useContext, useState } from 'react';
import loginImage from '../../img/Banner/h2-gallery-big-7.jpg';
import { Link } from 'react-router-dom';
import { authData } from '../../Provider/AuthProvider';

const SingIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {singInWithPassword, clickToCreateUserWtihGoogle} = useContext(authData);

    // form handle 
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singInWithPassword(email, password); }
    return (
        <div className='bg-violet-100 flex'>
            <div className='w-6/12 hidden lg:block'>
                <img className='w-full' src={loginImage} alt="" />
            </div>

            <div className='w-full lg:w-6/12 mx-auto '>
                <form className='flex flex-col gap-5 p-20' onSubmit={handleForm}>
                    <h1 className='text-center text-4xl font-bold mb-3'>দ্রুত লগইন করে ফেলো 🙂</h1>

                    <label className='w-full font-bold text-2xl' htmlFor="email">ইমেইল
                        <input className='p-3 w-full text-1xl font-normal border-b-4 border-blue-500 bg-slate-100' required type="email" name='email' placeholder='তুমার ইমেল ঠিকানা'  />
                    </label>

                    <label className='w-full font-bold text-2xl' htmlFor="password">
                        <div className='flex justify-between'>
                            <span>পাসওযার্ড</span>
                            <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? "পাসওযার্ড লোকাও" : "পাসওযার্ড দেখো"}</span>
                        </div>
                        <input className='p-3 w-full font-normal text-1xl border-b-4 border-blue-500 bg-slate-100' type={showPassword ? "text" : "password"} required name="password" placeholder='তুমার গোপন পাসওযার্ড' />
                    </label>
                    <p>তুমি কি এখানে নুতুন মানুষ ? তাহলে  <Link to="/sing-up" className='underline'>রেজিসট্রেশন</Link> ফর্ম তুমাকে স্বগতম জানচ্ছে</p>
                    <input className='btn bg-blue-500 text-3xl py-3 px-10 pb-12' type="submit" value="লগইন"/>

                    {/* or option for singin  */}

                    <div className='flex justify-center items-center'>
                        <hr className=' border-t border-blue-500 w-4/12' />
                        <span>OR</span>
                        <hr className=' border-t border-blue-500 w-4/12' />
                    </div>
                    <div className='flex justify-center gap-5 my-2'>
                        <div onClick={clickToCreateUserWtihGoogle} className='border border-blue-500 py-3 px-7 text-3xl font-bold rounded'>Google</div>
                        <div className='border border-blue-500 py-3 px-7 text-3xl font-bold rounded'>GitHub</div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingIn;