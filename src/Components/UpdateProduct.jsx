import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import bg from '../../public/Login-background.jpg'
import { FaSpinner } from 'react-icons/fa';

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false)
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const { token } = useContext(AuthContext);
    // get data from manage API
    axios(`https://hotel.aotrek.net/api/auth/manage/${id}`,
         {
        headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
        // setProducts(response?.data?.categories); // Handle the successful response
        console.log(response?.data?.categories.id)
    })
        .catch(error => {
            console.error('Error fetching data', error); // Handle any errors
        });;
    // Update data API here:
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://hotel.aotrek.net/api/auth/update/${id}`, { name, title, description }, { headers: { Authorization: `Bearer ${token}` } });
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Product Update successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Product update failed!',
            });
        }
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center min-h-screen flex items-center justify-center'>
                <div className="w-full max-w-md p-8 space-y-3 dark:bg-gray-50 dark:text-gray-800 mx-auto">
                    <h1 className="text-2xl font-bold text-center uppercase">update <span className='text-[#f57224]'>product</span></h1>
                    <form onSubmit={handleUpdate} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="title" className="block dark:text-gray-600">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                placeholder="Your Title"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="description" className="block dark:text-gray-600">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                value={description}
                                placeholder="Your Description"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600"
                                onChange={(e) => setDescription(e.target.value)}
                                rows="3"  // Set the number of rows as needed
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="block w-full px-1 rounded-md py-3 bg-[#f57224]"
                        >
                            {loading ? <FaSpinner className="animate-spin text-xl text-white mx-auto" /> : 'Create Product'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateProduct;