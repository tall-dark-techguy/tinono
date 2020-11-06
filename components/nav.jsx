import Link from "next/link";
import { useState } from "react";
import { Collapse, NavbarToggler, Nav } from "reactstrap";
import SideNavOverlay from "./sidenavOverlay";
import useUser from "../utils/useUser";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [sidenav, setSidenav] = useState(false);
  const sideNavWidth = sidenav ? "w-75" : "";

  const { user } = useUser();

  return (
    <>
      <SideNavOverlay sideNavWidth={sideNavWidth} setSidenav={setSidenav} />

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="btn btn-outline-light"
            onClick={() => setSidenav(true)}
          >
            Menu
          </button>

          <Link href="/">
            <a className="navbar-brand">
              <h4>Tinono</h4>
            </a>
          </Link>

          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="mx-auto">
              <li className="nav-item">
                <div className="input-group" style={{ width: "600px" }}>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Pluvastore..."
                  />

                  <div className="input-group-append">
                    <button className="btn btn-warning">Search</button>
                  </div>
                </div>
              </li>
            </Nav>

            <Nav navbar className="ml-auto">
              {!user?.isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link href="/login">
                      <a className="nav-link">
                        <button className="btn btn-outline-light">Login</button>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/signup">
                      <a className="nav-link">
                        <button className="btn btn-outline-light">
                          Sign up
                        </button>
                      </a>
                    </Link>
                  </li>
                </>
              )}
              {user?.isLoggedIn && (
                <li className="nav-item">
                  <Link href="/user">
                    <a>{user.email}</a>
                  </Link>
                </li>
              )}
            </Nav>
          </Collapse>
        </div>
      </nav>
    </>
  );
}
