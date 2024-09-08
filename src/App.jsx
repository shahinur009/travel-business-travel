import { createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import CreateProduct from "./Components/CreateProduct";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ManageProduct from "./Components/ManageProduct";
import UpdateProduct from "./Components/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
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
