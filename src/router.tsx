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
            path:"supporterhome",
            element: <SupporterHome/>,
        },
        {
            path: "supporterhome/expatuser",
            element: <ExpatUser/>
        },
        {
            path:"managerhome",
            element: <ManagerHome/>,
        },
    ]

},])


export default router;