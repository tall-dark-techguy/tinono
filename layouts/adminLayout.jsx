import { useState } from "react";
import Footer from "../components/footer";
import Head from "../components/head";
import NavBar from "../components/nav";
import SideNavDashboard from "../components/sidenavDashboard";

export default function AdminLayout({ children }) {
  const [sidenav, setSidenav] = useState(".sidenav-width");

  return (
    <>
      <Head />

      <div className="admin-layout">
        <SideNavDashboard sidenav={sidenav} setSidenav={setSidenav} />
        <main className="main-section">
          <NavBar />

          <button className="btn btn-dark" onClick={() => setSidenav("")}>
            Show sidenav
          </button>

          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
