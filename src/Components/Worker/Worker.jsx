import { CgProfile } from "react-icons/cg";
import PropTypes from "prop-types";

const Worker = ({worker}) => {
    const {name,username,email,address} = worker;
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
        </div>
    );
};

export default Worker;

Worker.propTypes ={
    worker:PropTypes.object.isRequired,

}