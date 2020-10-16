import Link from 'next/link';
import { useState } from 'react';
import { Collapse, NavbarToggler, Nav } from 'reactstrap';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">
                        <h4><strong>T</strong>inono</h4>
                    </a>
                </Link>

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>

                    <Nav navbar className="mx-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home page</a>
                            </Link>
                        </li>
                    </Nav>

                    <Nav navbar className="ml-auto">
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
                                    <button className="btn btn-outline-light">Sign up</button>
                                </a>
                            </Link>
                        </li>
                    </Nav>
                </Collapse>
            </div>
        </nav>
    </>
}