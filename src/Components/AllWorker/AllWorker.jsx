import { CgProfile } from "react-icons/cg";
import PropTypes from "prop-types";

const AllWorker = ({workers}) => {
    const {name,position,department,experience,location} = workers
    return (
        <div className="border-2 p-2 rounded-md">
            <div className="flex justify-center text-green-400">
                <CgProfile size={40}/>
            </div>
            <div className="mt-4 space-y-3">
            <h1 className="text-xl font-bold font-mono">Name: {name}</h1>
            <p className="text-gray-500 font-semibold">Position: {position}</p>
            <p className="text-gray-500 font-semibold">Department: {department}</p>
            <p className="text-gray-500 font-semibold">Experience: {experience}</p>
            <p className="text-gray-500 font-semibold">Location: {location}</p> 
            </div>
        </div>
    );
};

export default AllWorker;
AllWorker.propTypes ={
    workers:PropTypes.object.isRequired
}