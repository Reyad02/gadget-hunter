import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;