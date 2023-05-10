import React from 'react';
import { Link } from 'react-router-dom';
const ChefsCard = ({chef}) => {
    const {picture, name, experience_years, likes, recipe_count, id } = chef

    return (
        <div className=" bg-base-100 border border-blue-500">
          <figure>
            <img className='w-full h-96 object-cover' src={picture} alt={picture} />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-3xl">
            {name}
            </h2>
            <p> আমার অভিজ্ঞতা {experience_years} বছরের 😏😏</p>
            <div className='flex justify-between font-bold'>
                <span>Reecipe: {recipe_count}</span>
                <span>Likes: {likes}</span>
            </div>
            <div className="card-actions justify-end">
                <Link to={`chef/${id}`}>
                 <button className='btn bg-blue-500'>আমার রেসিপি</button>
                </Link>
            </div>
        </div>
</div>
    );
};

export default ChefsCard;