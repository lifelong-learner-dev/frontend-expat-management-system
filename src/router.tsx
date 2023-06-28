import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./components/Root";
import ExpatHome from "./routes/ExpatHome";
import SupporterHome from "./routes/SupporterHome";
import ManagerHome from "./routes/ManagerHome";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import useUser from "./lib/useUser";
import { IUser } from "./types";
import { ReactNode } from "react";
import ProtectedPage from "./components/ProtectedPage";
import ExpatUser from "./routes/ExpatUser";
import ExpatWorkpermits from "./routes/ExpatWorkpermits";

const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement:<NotFound />,
    children: [
        {
            path:"",
            element: <Home/>,
        },
        {
            path:"expathome",
            element: <ExpatHome/>,
        },
        {
            path: "expathome/expatuser",
            element: <ExpatUser/>
        },
        {
            path: "expathome/expatworkpermits",
            element: <ExpatWorkpermits/>
        },
        {
            path:"supporterhome",
            element: <SupporterHome/>,
        },
        {
            path:"managerhome",
            element: <ManagerHome/>,
        },
    ]

},])


export default router;