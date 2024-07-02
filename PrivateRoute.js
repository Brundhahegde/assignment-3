import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if token is stored in localStorage

    return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
