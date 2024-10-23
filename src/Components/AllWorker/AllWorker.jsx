import { CgProfile } from "react-icons/cg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllWorker = ({workers}) => {
    const {name,username,email,address}= workers;
    return (
        <div className="border-2 p-2 rounded-md">
            <div className="flex justify-center text-green-400">
                <CgProfile size={40}/>
            </div>
            <div className="mt-4 space-y-3">
            <h1 className="text-xl font-bold font-mono">Name: {name}</h1>
            <p className="text-gray-500 font-semibold">User Name: {username}</p>
            <p className="text-gray-500 font-semibold">Email: {email}</p>
            <p className="text-gray-500 font-semibold">Address: {address.street}</p>
            </div>
            <div className="my-4">
            <Link to={`/allworkers/${workers.id}`} className="px-6 py-2 rounded-md text-green-400 border-2 border-green-400">Show Details</Link>
            </div>
        </div>
    );
};

export default AllWorker;
AllWorker.propTypes ={
    workers:PropTypes.object.isRequired
}