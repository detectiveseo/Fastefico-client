import { useRef } from "react";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


const TableBooking = () => {
    const form = useRef();



    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_13yrvjl', 'template_repuekk', form.current, 'JoJ6y743v_axQ_V68')
            .then((result) => {
                if(result.status === 200){
                    toast.success('You table has been booked successfully');
                    form.current.reset();
                }else{
                    toast.error('something went wrong')
                }
            }, () => {
                toast.error('something went wrong')
            });
    }

    return (
        <div className="bg-[#F5F3FF] py-20">
            <div className="w-11/12 md:w-8/12  border border-[#3B82F6] mx-auto p-10 bg-[#3B82F6]">
                <h1 className='text-3xl lg:text-6xl font-bold text-center mb-5'>Book A table</h1>

                <form
                    className="form flex flex-col justify-center w-full gap-4"
                    onSubmit={handleSubmit} ref={form}>
                    <select
                        name="sitNum"
                        required
                        className=" border-b-2 p-2" id="cars">
                        <option selected value="select">Select Persion</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                    <input
                        className=" border-b-2 p-2"
                        type="text"
                        name="name"
                        required
                        id="name"
                        placeholder="name" />
                    <input
                        className=" border-b-2 p-2"
                        type="tel"
                        name="phone"
                        required
                        id="phone"
                        placeholder="number" />
                    <input
                        className="border-b-2 p-2"
                        type="email"
                        name="email"
                        required
                        id="email"
                        placeholder="email" />
                    <input
                        className=" border-b-2 p-2"
                        type="time"
                        name="time"
                        required
                        id="time" />
                    <input 
                    className=" border-b-2 p-2" 
                    type="date" 
                    name="date" 
                    required
                    id="date" />
                    <input className="btn rounded-none" type="submit" value="Book Now" />
                </form>
            </div>
        </div>

    );
};

export default TableBooking;