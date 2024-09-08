import React from 'react';
import './index.css';
import AuthProvider from './Provider/AuthProvider';
import router from './Routes/Router';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
