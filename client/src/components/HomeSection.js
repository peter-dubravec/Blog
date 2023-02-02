import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import { Link, animateScroll as scroll } from "react-scroll";

const HomeSection = () => {
    return (
        <div className="home-wrapper" id="homeid">
            <h2>Welcome</h2>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {

                    typewriter
                        .typeString("I'm Peter Dubravec.")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I'm Web Developer.")
                        .pauseFor(1000)
                        .start();
                }}
            />
            <p className="">Based in Slovakia</p>
            <div className="animated-chevron"><Link to="aboutmeid"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}><FaChevronDown /></Link></div>
        </div>
    )
}

export default HomeSection