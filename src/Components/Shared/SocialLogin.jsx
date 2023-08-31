import { useContext } from 'react';
import { authData } from '../../Provider/AuthProvider';

const SocialLogin = () => {
    const {clickToCreateUserWtihGoogle, clickToCreateUserWtihGitHub} = useContext(authData);
    return (
        <div>
            <div className='flex justify-center gap-5 my-2'>
                <div onClick={clickToCreateUserWtihGoogle} className='border border-blue-500 py-3 px-7 text-3xl font-bold rounded cursor-pointer'>Google</div>

                <div onClick={clickToCreateUserWtihGitHub} className='border border-blue-500 py-3 px-7 text-3xl font-bold rounded cursor-pointer'>GitHub</div>
            </div>
        </div>
    );
};

export default SocialLogin;