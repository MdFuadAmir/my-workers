import { CgProfile } from "react-icons/cg";
import { useLoaderData, useNavigate } from "react-router-dom";


const WorkerDetails = () => {
    const worker = useLoaderData();
    const {name,username,email,phone,address,website,company} = worker;
    const navigate = useNavigate();
    const handelGOBack = ()=>{
        navigate(-1)
    }
    return (
        <div className="max-w-6xl mx-auto p-2 border-2 rounded-md flex flex-col justify-center items-center mb-12">
            <div className="flex justify-center text-green-400">
                <CgProfile size={40}/>
            </div>
            <div className="mt-4 space-y-3 text-left">
            <h1 className="text-xl font-bold font-mono">Name: {name}</h1>
            <p className="text-gray-500 font-semibold">User Name: {username}</p>
            <p className="text-gray-500 font-semibold">Email: {email}</p>
            <p className="text-gray-500 font-semibold">Address: {address.street}</p>
            <p className="text-gray-500 font-semibold">Phone: {phone}</p> 
            <p className="text-gray-500 font-semibold">Website: {website}</p> 
            <p className="text-gray-500 font-semibold">Company Name: {company.name}</p> 
            <p className="text-gray-500 font-semibold">CatchPhrase: {company.catchPhrase}</p> 
            <p className="text-gray-500 font-semibold">Bs: {company.bs}</p> 
            </div>
            <div className="my-4">
                <button onClick={handelGOBack} className="px-6 py-2 rounded-md text-green-400 border-2 border-green-400">Go Back</button>
            </div>
        </div>
    );
};

export default WorkerDetails;