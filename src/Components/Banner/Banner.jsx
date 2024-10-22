

const Banner = () => {
    return (
        <div className=" h-[70vh] bg-slate-200 rounded-lg flex flex-col justify-center items-center text-center p-2 space-y-3">
            <h1 className="text-4xl font-bold font-mono">You Need Workers??</h1>
            <p className="max-w-3xl mx-auto text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, nihil consequuntur. At ratione cupiditate ut odit? Eos in nemo voluptatem aliquam, architecto, voluptatibus eius illum minus quia, porro quaerat nulla!</p>
            <div className="flex flex-col md:flex-row gap-4">
                <button className="py-2 px-6 bg-green-400 rounded-md ">Explore more</button>
                <button className="py-2 px-6 outline outline-green-400 rounded-md text-green-400">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;