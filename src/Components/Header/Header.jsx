import { CgProfile } from "react-icons/cg";
import { RiMenuFill } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

const pages = [
    {
        id:1,
        name:"Home",
        path:"/"
    },
    {
        id:2,
        name:"All Workers",
        path:"/allworkers"
    },
    {
        id:3,
        name:"About",
        path:"/about"
    },
    {
        id:4,
        name:"Blog",
        path:"/blog"
    },
    {
        id:5,
        name:"Contact",
        path:"/contact"
    },
]

const Header = () => {
    const [open, setOpen] = useState(false);

    const handelOpenMenu = () =>{
       setOpen(!open)
    }

    return (
    <>
    <div className="max-w-6xl mx-auto p-2 flex items-center justify-between">
        {/* logo */}
        <div>
            <h1 className="text-xl font-bold font-mono text-green-400">My-workers</h1>
        </div>
        {/* menu section */}
        <div>
        {/* laptop device */}
        <div className="hidden md:flex items-center justify-center gap-6 font-semibold text-gray-500">
            {
                pages.map(page => <Link to={page.path} key={page.id}>{page.name}</Link>)
            }
        </div>
        {/* mobile device */}
        <div className="flex md:hidden">
            <button onClick={handelOpenMenu}>{open ? <RiMenu3Fill size={20}/> : <RiMenuFill size={20}/>}</button>
        </div>

        </div>
        {/* profile and lagin button */}
        <div className="items-center gap-2 hidden lg:flex">
            <CgProfile size={30} className="text-gray-600"/>
            <button className="text-green-400 py-1 px-4 rounded-md border-2 border-green-400">Login</button>
        </div>       
    </div>
    {/* mobile menu */}
    <div>
        {
            open ? <div className="font-bold text-xl gap-3 flex flex-col text-center bg-gray-400 rounded-md text-white">
            {
                pages.map(page => <Link className="hover:bg-gray-200 p-4 hover:text-green-500 duration-300" to={page.path} key={page.id}>{page.name}</Link>)
            }
            </div> : ""
        }
    </div>
    
            
    </>
    );
};

export default Header;