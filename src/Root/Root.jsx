import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;