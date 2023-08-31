import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (<>
    
    <div className='bg-violet-50 border-t border-blue-500'>
            <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 py-20 '>
                <div>
                    <h1 className='text-5xl font-bold'>Fastifco</h1>
                    <p>Not only do we prioritize taste, but we also prioritize speed. We understand that your time is valuable, so we strive to provide quick service without compromising on quality. Our efficient and friendly staff is always ready to serve you with a smile.</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>Importent Links</h1>
                    <div className='flex flex-col text-2xl mt-7'>
                        <Link to="/home">Home</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/blog">Blog</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>Contact us</h1>
                    <ol className='flex flex-col gap-3 text-2xl mt-7'>
                        <li className='flex gap-4 '><BsTelephoneFill /> +8801926629854</li>
                        <li className='flex gap-4 '><MdOutlineMail /> imran0dot@gmail.com</li>
                        <li className='flex gap-4 '><FaLocationArrow />Tangail Dhaka Bangladesh</li>
                    </ol>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>Google Map</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.37703675807!2d90.02659321499254!3d24.333355584305245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37560330a8f99541%3A0xbca4f66b12138aa1!2sLocal%20and%20Small%20Business%20SEO%20%7C%20Detective%20SEO!5e0!3m2!1sen!2sbd!4v1683527347412!5m2!1sen!2sbd" width="400" height="300"  loading="lazy" ></iframe>
                </div>
            </div>
        </div>
        <div className='bg-blue-500 text-center py-2 text-1xl'><p>© Fastifico.com 2023. All rights reserved.</p></div>
        </>
    );
};

export default Footer;