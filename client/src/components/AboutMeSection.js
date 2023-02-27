import React from 'react'

const AboutMeSection = () => {
    return (
        <section className="aboutMe-section" id="aboutmeid">
            <div className='aboutMe-container content-container'>
                <div className="section--heading"><h2>Know me more</h2>
                    <p>ABOUT ME</p>
                    <span className="separator"></span>
                </div>
                <div className="middle">
                    <div className="about-me-middle--left"><h2>I'm <span className="name">Peter Dubravec</span>, a Web Developer</h2>
                        <p>I'm an aspiring web app developer with a passion for coding. Although I don't have much real-world experience yet, I've been working on my own projects for some time now, honing my skills in web development technologies like HTML, CSS, JavaScript, and the MERN stack. I'm eager to apply my knowledge and learn more in a professional setting, and I'm excited for the opportunity to contribute my skills to a team and tackle new challenges. Thank you for taking the time to check out my portfolio!

                        </p></div>
                    <div className="about-me-middle--right">
                        <ul><li><p><strong>Name: </strong>Peter Dubravec</p></li>
                            <li><p><strong>Email: </strong> <span>peter.dubravec98@gmail.com</span></p></li>
                            <li><p><strong>Age: </strong>25</p></li>
                            <li><p><strong>From: </strong>Banska Bystrica, Slovakia</p></li>
                            <li><a href="boats.html" download><button className="cv-btn">Download CV</button></a></li>
                        </ul>
                    </div>
                </div>
                <div className="about-me-bottom">
                    <div className="experience">
                        <div className="number">1</div>
                        <div>Years Of Experience</div>
                    </div>
                    <div className="separator"></div>
                    <div className="projects">
                        <div className="number">20+</div>
                        <div>Projects Done</div>
                    </div>
                    <div className="separator"></div>
                    <div className="clients">
                        <div className="number">5+</div>
                        <div>Happy Clients</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection