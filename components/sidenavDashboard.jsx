import Link from "next/link";
import { useState } from "react";

export default function SideNavDashboard(props) {
  return (
    <div className={`sidenav2`} style={{ width: `${props.sidenav}` }}>
      <div className={`sidenav-wrapper mx-auto`}>
        <button
          className="close-btn btn btn-link text-danger"
          onClick={() => props.setSidenav("0 !important")}
        >
          X
        </button>

        <div className="container">
          <ul className="list-group list-group-flush text-center lead">
            <li className="list-group-item">
              <Link href="/">
                <a className="text-dark">Home</a>
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

            <li className="list-group-item btn-group">
              <Link href="/login">
                <a className="btn btn-outline-dark">Login</a>
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
