import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import bg from '../../public/Login-background.jpg'
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get('https://hotel.aotrek.net/api/auth/manage', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                setProducts(res?.data)
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Product get failed!',
                });
            }
        }
        fetch();
    }, [token])
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center min-h-screen p-5'>
                <h1 className="text-2xl font-bold text-center uppercase ">Manage <span className='text-[#f57224] '>Products</span></h1>
                {
                    products.map(product =>
                    (<div key={product?._id} className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center items-center gap-2 mt-5'>
                        <div className="max-w-xs rounded-md shadow-md bg-[#60da64]">
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide">{product?.title}</h2>
                                    <p className="dark:text-gray-800">{product?.description}</p>
                                </div>
                                <div className='flex justify-center gap-4'>
                                    <Link to='/create' type="button" className="btn btn-success">Create</Link>
                                    <button type="button" className="btn btn-secondary">Update</button>
                                    <button type="button" className="btn btn-error">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                    )
                }
            </div>
        </>
    );
};

export default ManageProduct;