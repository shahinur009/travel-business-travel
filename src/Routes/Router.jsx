import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../Components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CreateProduct from "../Components/CreateProduct";
import ManageProduct from "../Components/ManageProduct";
import UpdateProduct from "../Components/UpdateProduct";
import Home from "../Components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: "/create",
                element: (
                    <PrivateRoute>
                        <CreateProduct />
                    </PrivateRoute>
                ),
            },
            {
                path: "/manage",
                element: (
                    <PrivateRoute>
                        <ManageProduct />
                    </PrivateRoute>
                ),
            },
            {
                path: "/update/:id",
                element: (
                    <PrivateRoute>
                        <UpdateProduct />
                    </PrivateRoute>
                ),
            },
        ]
    }
]);

export default router;
