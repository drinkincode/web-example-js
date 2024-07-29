import { Outlet } from "react-router-dom";
import Header from './../Navbar/Header.js'

const Layout = () => {
  return (
    <>
     <Header></Header>

      <Outlet />
    </>







    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/blogs">Blogs</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Outlet />
    // </>
  )
};

export default Layout;