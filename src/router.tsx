import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./components/Root";
import ExpatHome from "./routes/ExpatHome";
import SupporterHome from "./routes/ExpatHome";
import ManagerHome from "./routes/ExpatHome";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import useUser from "./lib/useUser";
import { IUser } from "./types";
import { ReactNode } from "react";
import ProtectedPage from "./components/ProtectedPage";

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
            path:"ExpatHome",
            element: <ExpatHome/>,
        },
        {
            path:"SupporterHome",
            element: <SupporterHome/>,
        },
        {
            path:"ExpatHome",
            element: <ManagerHome/>,
        },
    ]

},])


export default router;