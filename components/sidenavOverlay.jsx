import Link from "next/link";
import React from "react";

export default function SideNavOverlay(props) {
  const hideNav = () => {
    props.setSidenav(false);
  };

  return (
    <div className={`sidenav ${props.sideNavWidth}`}>
      <div
        className="sidenav-wrapper mx-auto"
        style={{ width: `${props.sideNavWidth - 5}vw` }}
      >
        <button
          className="btn btn-link text-danger close-btn"
          onClick={hideNav}
        >
          X
        </button>

        <div className="container">
          <ul className="list-group list-group-flush text-center lead">
            <li className="list-group-item">
              <Link href="/">
                <a className="text-dark" onClick={hideNav}>
                  Home
                </a>
              </Link>
            </li>

            <li className="list-group-item">
              <a href="" className="text-dark">
                About Us
              </a>
            </li>

            <li className="list-group-item">
              <a href="" className="text-dark">
                Contact Us
              </a>
            </li>

            <li className="list-group-item">
              <Link href="/user">
                <a className="text-dark">Account</a>
              </Link>
            </li>

            <li className="list-group-item btn-group">
              <Link href="/login">
                <a className="btn btn-outline-dark" onClick={hideNav}>
                  Login
                </a>
              </Link>

              <a href="" className="btn btn-dark">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
