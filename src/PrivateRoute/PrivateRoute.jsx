import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
