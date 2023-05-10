import React, { useContext, useState } from 'react';
import {BsFacebook, BsInstagram, BsPinterest, BsStopwatch, BsYoutube, BsPinMap, BsFillTelephoneFill} from 'react-icons/bs'
import {FiMapPin, FiUser} from 'react-icons/fi'
import {GrMenu} from 'react-icons/gr'
import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom';
import { authData } from '../../Provider/AuthProvider';



const Header = () => {
    // const [user, setuser] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const {user, handleSignOut} = useContext(authData);
    const [handleSignOutBar, sethandleSignOutBar] = useState(true);
    return (
        <div>
            {/* top bar  */}
            <div className='hidden lg:block bg-blue-500 w-full   text-white font-bold py-2'>
                <div className='w-10/12 mx-auto flex justify-center items-center'>
                    <div className='w-6/12'>
                        <ol className='flex items-center gap-4'>
                            <li><BsStopwatch className='inline ml-3' /> এখন খোলা</li>
                            <li><FiMapPin className='inline ml-3' /> আপনার ঠিকানা নির্বাচন করুন</li>
                            <li><BsFillTelephoneFill className='inline ml-3' /> ০১৯২৬৬২৯৮৫৪</li>
                        </ol>
                    </div>
                    <div className='w-6/12 flex justify-end gap-5 text-2xl'>
                        <BsFacebook />
                        <BsInstagram />
                        <BsPinterest />
                        <BsYoutube />
                    </div>
                </div>
            </div>
            {/* navigation bar  */}
            <nav className='border-b bg-violet-50 border-blue-500 py-5'>
                <div className='w-11/12 lg:w-10/12 mx-auto flex items-center justify-between '>

                   <div className='w-2/12 block lg:hidden text-4xl font-bold cursor-pointer' onClick={() => setMobileMenu(!mobileMenu)}><GrMenu /></div>


                    <div className='flex  items-center justify-between w-6/12'>

                        <div className="w-6/12 text-3xl lg:text-5xl uppercase font-bold text-center">ফাস্তিফিকো</div>

                        <div className={`w-/4-12 flex flex-col lg:flex-row justify-end gap-5 text-2xl italic font-bold fixed lg:static top-0 p-5 bg-slate-200 lg:bg-transparent w-full ${mobileMenu ? "left-0" : "-left-[700px]"}`}>
                            
                            <div className='w-2/12 block lg:hidden text-4xl font-bold cursor-pointer' onClick={() => setMobileMenu(!mobileMenu)}><RxCross2 /></div>
                            
                            <Link to="/">হোম</Link>
                            <Link to="/menu">মেনু</Link>
                            <Link to="/">শপ</Link>
                            <Link to="/">ব্লগ</Link>
                            <Link to="/">ফাস্তিফিকো সম্পর্কে</Link>
                        </div>
                    </div>

                    <div className='w-6/12 flex justify-end'>
                        {user ? 
                        <div  
                        onClick={() => sethandleSignOutBar(!handleSignOutBar)}
                        className='flex items-center gap-4 text-2xl font-bold cursor-pointer'>
                            <img 
                            className="w-[50px] rounded-full" 
                            src={user?.photoURL} 
                            alt={user.displayName} /> 
                            {user.displayName ? user.displayName : "loading.."} </div> 
                        
                        : 
                        
                        <Link className='text-2xl font-bold italic text-blue-900 underline' to="/sing-in">লগইন করো</Link>}
                    </div>
                </div>
            </nav>
                            {
                                user ? <div onClick={() => sethandleSignOutBar(!handleSignOutBar)} className={`fixed bg-slate-50 w-full lg:w-2/12 h-screen right-0  r items-center flex-col ${handleSignOutBar ? "hidden" : "flex"}`}>
                                <img 
                                className="w-[50px] rounded-full mt-10" 
                                src={user.photoURL} 
                                alt={user.displayName} /> 
                                <h3 className='font-bold'>{user.displayName ? user.displayName : "loading.."}</h3>
                                <hr className='border-t border-blue-500 w-10/12' />
                                <ol className='font-bold text-center my-10'>
                                    <li>Profile</li>
                                    <li>My Order</li>
                                    <li>Settings</li>
                                    <li>{user.email}</li>
                                </ol>
                                <hr className='border-t border-blue-500 w-10/12' />
                                    <button  className='btn mt-10' onClick={handleSignOut}>Sing out</button>
                                </div> : 
                                <></>
                            }
        </div>
    );
};

export default Header;