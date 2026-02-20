import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import LandingPage from "../pages/LandingPage/LandingPage";
import ProductCarousel from "../component/ProductCarousel/ProductCarousel";
import ProductPage from "../pages/ProductPage/ProductPage";
import CartPage from "../pages/CartPage/CartPage";

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