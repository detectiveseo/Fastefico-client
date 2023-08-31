import { Link } from 'react-router-dom';
const ChefsCard = ({ chef }) => {
    const { picture, name, experience_years, likes, recipe_count, id } = chef;

    return (
        <div className=" bg-base-100 border border-blue-500">
            <figure>
                <img className='w-full h-96 object-cover' src={picture} alt={picture} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold u">
                    {name}
                </h2>

                <div className=' justify-between font-bold flex flex-col'>
                    <span>Experience: {experience_years}</span>
                    <span>Reecipe: {recipe_count}</span>
                    <span>Likes: {likes}</span>
                </div>
                <Link className='w-full btn bg-blue-500' to={`chef/${id}`}>My recipes
                </Link>
            </div>
        </div>
    );
};

export default ChefsCard;