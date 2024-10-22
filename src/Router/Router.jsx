import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AllWorkers from "../Pages/AllWorkers/AllWorkers";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/allworkers",
                loader:()=> fetch('allWorkers.json'),
                element:<AllWorkers/>
            },
        ]
    }
])
export default router;