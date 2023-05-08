import React from 'react';
import chefImage from '../../../../img/chef/about-1.png';
import {SiFoodpanda} from 'react-icons/si';
import {GiFullPizza} from 'react-icons/gi';
import {BiDrink} from 'react-icons/bi'

const AboutusSection = () => {
    return (
        <div className= 'bg-violet-100'>
            <div className='w-10/12 mx-auto flex flex-col-reverse lg:flex-row'>
                <div className='w-full lg:w-6/12'>
                    <img src={chefImage} />
                </div>
                <div className='w-full lg:w-6/12 flex flex-col items-center justify-center'>
                    <div>
                        <h1 className='text-3xl lg:text-7xl font-bold my-2'>প্রথমেই তুমাকে স্বাগতম, তারপর</h1>
                        <p>নিচের টুকু পড়ো এবং বুঝো কেনো আমরাই সেরা । সেরা না হয়ে কোনো উপায়ই নেই, কারন আমরা দরকার পড়লে মন্গলগ্রহ থেকেও গুরত্ব পুর্ণ সৌরজগৎ বিখ্যাত সেরা সেরা শেফ হায়ার করে নিয়ে আসি তুমাদের ভিন্য রকম স্বাধের খাবার টেস্ট করানোর জন্য </p>

                        <div className='lg:w-10/12'>

                            <div className='flex justify-center items-center gap-5 border-b border-blue-500'><SiFoodpanda className='text-9xl' /><p className='lg:text-2xl'>আমরা Food Panda এর থেকে দ্রুত খাবার পরিবেষন করি, তবে তাদের মতো মার্কটিং করি না  । (টাকার অভাবে)</p></div>

                            <div className='flex justify-center items-center gap-5 border-b border-blue-500'><GiFullPizza className='text-9xl' /><p className='lg:text-2xl'>আমাদের এক পিজ্জার কাস্টমার শারুক খান এর বিরাট ভক্ত, তাই আমাদের পিজ্জাই সেরা</p></div>

                            <div className='flex justify-center items-center gap-5'><BiDrink className='text-9xl' /><p className='lg:text-2xl'>আমাজন জন্গল থেকে জিবনের রিস্ক নিয়ে আমরা ভিবিন্ন রকমের ফল ফুল সংগ্রহ করে হাতের তৈরী জুস তৈরী করি</p></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutusSection;