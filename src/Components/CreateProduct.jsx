import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import bg from '../../public/Login-background.jpg';
import { FaSpinner } from 'react-icons/fa';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleCreate = async (e) => {
        e.preventDefault();
        setLoading(true);  // set loading true because API call start
        try {
            const res = await axios.post(
                'https://hotel.aotrek.net/api/auth/create',
                { name, title, description },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            Swal.fire({
                position: "top",
                icon: "success",
                title: "Product created successfully",
                showConfirmButton: false,
                timer: 1500
            });

            // Clear form fields after create product
            setName('');
            setTitle('');
            setDescription('');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Product creation failed!',
            });
        } finally {
            setLoading(false);  // Set loading to false because API call end
        }
    };

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center min-h-screen flex items-center justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 dark:bg-gray-50 dark:text-gray-800 mx-auto">
                <h1 className="text-2xl font-bold text-center uppercase">create <span className='text-[#f57224]'>product</span></h1>
                <form onSubmit={handleCreate} className="space-y-6">
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
                            rows="4"  // Set the number of rows as needed
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
    );
};

export default CreateProduct;
