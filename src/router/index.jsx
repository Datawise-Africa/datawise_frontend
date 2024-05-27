import { createBrowserRouter } from "react-router-dom";
import baseRoutes from "./base.routes";
import Layout from "../pages/layout/Layout";
import Error404 from "../components/errors/Error404";
import BaseErrorPage from "../components/errors/BaseErrorPage";

const routes = [
    {
        path: "/",
        errorElement: <BaseErrorPage />,
        element: <Layout />,
        children: [
            ...baseRoutes,
        ]
    },
    {
        path: "*",
        element: <Error404 />,
    }
]

const router = createBrowserRouter(routes);

export default router;