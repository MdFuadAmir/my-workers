import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold font-mono">Oops!!!</h1>
            <div className="text-center mt-4 font-bold text-xl">
            <p className="text-red-500">{error.status || error.statusText}</p>
            </div>
            <button onClick={handleGoBack} className="bg-green-400 px-6 py-2 rounded-md mt-4">Go back</button>
        </div>
    );
};

export default ErrorPage;