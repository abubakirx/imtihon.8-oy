import { Outlet } from "react-router-dom";
import NavBar from "../components/TopNav";
import Footer from "../components/SiteFooter";

function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
