import { useRef } from "react";

const TableBooking = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(form)
    }

    return (
        <div className="w-8/12  border mx-auto my-20 p-10">
            <h1 className='text-3xl lg;text-6xl font-bold text-center'>Book A table</h1>

            <form
                className="form flex flex-col justify-center w-full gap-4"
                onSubmit={handleSubmit} ref={form}>
                <select className=" border-b-2 p-2" id="cars">
                    <option disabled value="select">Select</option>
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
                    id="name"
                    placeholder="name" />
                <input
                    className=" border-b-2 p-2"
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="number" />
                <input
                    className="border-b-2 p-2"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email" />
                <input
                    className=" border-b-2 p-2"
                    type="time"
                    name="time"
                    id="time" />
                <input className=" border-b-2 p-2" type="date" name="date" id="date" />
                <input className="btn rounded-none" type="submit" value="Book Now" />
            </form>
        </div>
    );
};

export default TableBooking;