import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaSpinner } from 'react-icons/fa';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, loading } = useContext(AuthContext);
    // const [loading, setLoading] = useState(true)
    // { loading ? <FaSpinner className="animate-spin text-xl text-white mx-auto" /> : children }
    // // setLoading(false)

    return isAuthenticated ? children : <Navigate to="/home" />;
};

export default PrivateRoute;
