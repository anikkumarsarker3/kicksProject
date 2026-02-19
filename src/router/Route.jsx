import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import LandingPage from "../pages/LandingPage/LandingPage";

export const router = createBrowserRouter([
    {

        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />

            }
        ]
    }
])