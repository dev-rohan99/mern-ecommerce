import PageLayout from "../components/page-layout/PageLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


const publicRouter = [

    {
        path: "/login",
        element: <Login/>
    }, 

    {
        path: "/register",
        element: <Register/>
    }, 

    {
        element: <PageLayout />,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
]

export default publicRouter;
