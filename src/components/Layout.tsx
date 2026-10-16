import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

function Layout() {
  return <div>

<SideBar/>

<main>
    <Outlet/>
</main>
    
  </div>;
}

export default Layout;
