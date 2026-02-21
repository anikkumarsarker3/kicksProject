import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import LandingPage from "../Pages/LandingPage/LandingPage";
import ProductCarousel from "../component/ProductCarousel/ProductCarousel";
import ProductPage from "../Pages/ProductPage/ProductPage";
import CartPage from "../Pages/CartPage/CartPage";

export const router = createBrowserRouter([
    {

        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />

            },
            {
                path: "/products/:productId",
                element: <ProductPage />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
        ]
    }
])