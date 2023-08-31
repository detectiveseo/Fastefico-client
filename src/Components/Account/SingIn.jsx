import  { useContext, useState } from 'react';
import loginImage from '../../img/Banner/h2-gallery-big-7.jpg';
import { Link } from 'react-router-dom';
import { authData } from '../../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin';

const SingIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {singInWithPassword, clickToCreateUserWtihGoogle, clickToCreateUserWtihGitHub} = useContext(authData);

    // form handle 
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singInWithPassword(email, password); 
        form.reset();
    }
    return (
        <div className='bg-violet-100 flex'>
            <div className='w-6/12 hidden lg:block'>
                <img className='w-full' src={loginImage} alt="" />
            </div>

            <div className='w-full lg:w-6/12 mx-auto '>
                <form className='flex flex-col gap-5 p-5 lg:p-20' onSubmit={handleForm}>
                    <h1 className='text-center text-4xl font-bold mb-3'>Login to your account</h1>

                    <label className='w-full font-bold text-2xl' htmlFor="email">Email
                        <input className='p-3 w-full text-1xl font-normal border-b-4 border-blue-500 bg-slate-100' required type="email" name='email' placeholder='your email address'  />
                    </label>

                    <label className='w-full font-bold text-2xl' htmlFor="password">
                        <div className='flex justify-between'>
                            <span>Password</span>
                            <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide password" : "Show password"}</span>
                        </div>
                        <input className='p-3 w-full font-normal text-1xl border-b-4 border-blue-500 bg-slate-100' type={showPassword ? "text" : "password"} required name="password" placeholder='your password' />
                    </label>
                    <p>Are you new at here ?  <Link to="/sing-up" className='underline'>Please Singup</Link></p>
                    <input className='btn bg-blue-500 text-3xl py-3 px-10 pb-12' type="submit" value="login"/>

                    {/* or option for singin  */}

                    <div className='flex justify-center items-center'>
                        <hr className=' border-t border-blue-500 w-4/12' />
                        <span>OR</span>
                        <hr className=' border-t border-blue-500 w-4/12' />
                    </div>
                    <SocialLogin />
                </form>
            </div>
        </div>
    );
};

export default SingIn;