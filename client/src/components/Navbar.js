import React, { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    // const { logout } = useLogout()
    // const { user } = useAuthContext()

    // const handleLogout = () => {
    //     logout()
    // }
    {/* <a className="logo" href="/">Blog</a>
    {user && <div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>} */}
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <p className="name">Peter Dubravec</p>
            <div className="flex-right">
                <div className={isOpen ? "menu-btn close" : "menu-btn"} onClick={() => setIsOpen((prev) => !prev)}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
            </div>


            <div className={isOpen ? "hamburger-nav-items show" : "hamburger-nav-items"}>
                <ul>
                    <li>
                        <Link to="homeid"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}>Home</Link>
                    </li>
                    <div className="separator"></div>
                    <li>
                        <Link to="aboutmeid"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}>About Me</Link>
                    </li>
                    <div className="separator"></div>
                    <li>
                        <Link to="whatidoid"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}>What I Do</Link>
                    </li>
                    <div className="separator"></div>
                    <li>
                        <Link to="resumeid"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}>Resume</Link>
                    </li>
                    <div className="separator"></div>
                    <li>
                        <Link to="portfolioid"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}>Portfolio</Link>
                    </li>
                    <div className="separator"></div>
                    <li>
                        <Link
                            to="blogid"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}>Blog</Link>
                    </li>
                    <div className="separator"></div>
                    <li>
                        <Link
                            to="contactid"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}
                        >Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar