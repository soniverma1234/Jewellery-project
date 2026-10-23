import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    <Footer/>

    </>
  )
}

export default Layout;
