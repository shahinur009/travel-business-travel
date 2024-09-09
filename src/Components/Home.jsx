import React from 'react';
import bg from '../../public/Login-background.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center min-h-screen'>
            <div className="w-full max-w-md p-8 space-y-3 dark:bg-gray-50 dark:text-gray-800 mx-auto">
                <h1 className='text-2xl font-bold'>WelCome to CRUD Operation</h1>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <Link to='/create' className='btn btn-success'>Create Products</Link>
                <Link to='/manage' className='btn btn-primary'>Manage Products</Link>
            </div>


        </div>
    );
};

export default Home;