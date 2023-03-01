import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FaFacebookF, FaLinkedin } from "react-icons/fa"
import { Link, animateScroll as scroll } from "react-scroll";

const SidePanel = () => {
    const location = useLocation()

    useEffect(() => {

    })

    return (
        <>
            {location.pathname == "/" ?
                <div className="sidePanel">
                    <div className="img-container"><img src="my-picture-cropped.png" alt="asa" /></div>
                    <p className="myName">Peter Dubravec</p>

                    <ul>
                        <li>
                            <Link to="homeid"
                                smooth={true}
                                duration={300}>Home</Link>
                        </li>
                        <li>
                            <Link to="aboutmeid"
                                smooth={true}
                                duration={300}>About Me</Link>
                        </li>
                        <li>
                            <Link to="whatidoid"
                                smooth={true}
                                duration={300}>What I Do</Link>
                        </li>
                        <li>
                            <Link to="resumeid"
                                smooth={true}
                                duration={300}>Resume</Link>
                        </li>
                        <li>
                            <Link to="portfolioid"
                                smooth={true}
                                duration={300}>Portfolio</Link>
                        </li>
                        <li>
                            <Link
                                to="blogid"
                                smooth={true}
                                duration={300}>Blog</Link>
                        </li>
                        <li>
                            <Link
                                to="contactid"
                                smooth={true}
                                duration={300}
                            >Contact</Link>

                        </li>
                    </ul>
                    <div className="links">
                        <a href="https://www.facebook.com/peter.dubravec.7/"><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/in/peter-d%C3%BAbravec-327376225/"> <FaLinkedin /></a>

                    </div>
                </div> : ""
            }
        </>
    )
}

export default SidePanel