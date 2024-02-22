import { Outlet } from "react-router-dom";
import Navbar from "../share/navbar/Navbar";


const Main = () => {
    return (
        <div className='max-w-[1280px] mx-auto p-2' >
            <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
    );
};

export default Main;