import { useLoaderData } from "react-router-dom";
import AllWorker from "../../Components/AllWorker/AllWorker";


const AllWorkers = () => {
    const allWorkers = useLoaderData();
    return (
        <div className="my-12 max-w-6xl mx-auto">
            {/* header */}
            <h1 className="text-center text-2xl font-bold font-mono">All Workers List</h1>
            <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A odit iusto quaerat? Dolore necessitatibus cupiditate impedit quos consectetur dolor eum?</p>
            {/* workers */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allWorkers.map((workers => <AllWorker key={workers.id} workers={workers}></AllWorker>))
                }
            </div>
            
        </div>
    );
};

export default AllWorkers;