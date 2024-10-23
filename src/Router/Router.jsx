import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AllWorkers from "../Pages/AllWorkers/AllWorkers";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import WorkerDetails from "../Components/WorkerDetails/WorkerDetails";


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
                loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
                element:<AllWorkers/>
            },
            {
                path:"/allworkers/:workerId",
                loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.workerId}`),
                element:<WorkerDetails/>
            },
        ]
    }
])
export default router;