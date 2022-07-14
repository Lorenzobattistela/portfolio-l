import { Outlet, Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";

const Layout = () => {
    return(
        <>  
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout;