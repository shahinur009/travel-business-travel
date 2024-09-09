import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import bg from '../../public/Login-background.jpg';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://hotel.aotrek.net/api/auth/manage', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProducts(res?.data);
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to fetch products!',
                });
            }
        };
        fetchProducts();
    }, [token]);

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`https://hotel.aotrek.net/api/auth/delete/${id}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });

                    // Remove the deleted product from the state
                    setProducts((prevProducts) => prevProducts.filter(product => product._id !== id));

                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Product deleted successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to delete product!',
                    });
                }
            }
        });
    };

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center min-h-screen p-5'>
            <h1 className="text-2xl font-bold text-center uppercase">Manage <span className='text-[#f57224]'>Products</span></h1>
            <div className="overflow-x-auto mt-5">
                <table className="table-auto w-full text-center bg-white rounded-md shadow-md">
                    <thead className="bg-[#60da64] text-white">
                        <tr>
                            <th className="p-3">Title</th>
                            <th className="p-3">Description</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product?._id} className="border-b">
                                <td className="p-3">{product?.title}</td>
                                <td className="p-3">{product?.description}</td>
                                <td className="p-3">
                                    <div className="flex justify-center gap-4">
                                        <Link to='/create' className="btn btn-success">Create</Link>
                                        <Link to={`/update/${product._id}`} className="btn btn-secondary">Update</Link>
                                        <button
                                            type="button"
                                            className="btn btn-error"
                                            onClick={() => handleDelete(product._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;
