import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseComponent from "../Components/BaseComponent";
import HomeScreen from "../Modules/HomeScreen/HomeScreen";
import LoginScreen from "../Modules/LoginScreen/LoginScreen";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseComponent/>,
        children:[
            {index: true, element: <Navigate to={"/home"} replace={true}/> },
            {path:'/home',element:<HomeScreen/>},
            {path:'/login',element:<LoginScreen/>},
            {path:'*',element:<span>No data Available</span>}
        ]
    }
])