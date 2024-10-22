import { useEffect, useState } from "react";
import Worker from "../Worker/Worker";
import { Link } from "react-router-dom";


const SomeWorkers = () => {
    const [workers,setWorkers] = useState([]);
    useEffect(() =>{
        fetch('worker.json')
        .then(res => res.json())
        .then(data => setWorkers(data))
    },[])
    return (
        <div className="my-12">
            <h1 className="text-center text-2xl font-bold font-mono">Some Workers List</h1>
            <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A odit iusto quaerat? Dolore necessitatibus cupiditate impedit quos consectetur dolor eum?</p>
            {/* workers */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    workers.map(worker => <Worker key={worker.id} worker={worker}></Worker>)
                }
            </div>
            <div className="flex justify-center">
            <Link to={"/allworkers"} >
            <button className="px-4 py-2 bg-green-400 rounded-md font-mono font-bold mt-6">All Workers</button>
            </Link>
            </div>
        </div>
    );
};

export default SomeWorkers;