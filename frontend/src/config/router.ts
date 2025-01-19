import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'',
                Component:HomePage
            }
        ]
    }
])