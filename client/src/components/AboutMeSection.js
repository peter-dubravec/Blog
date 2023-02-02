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
                        <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                            Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p></div>
                    <div className="about-me-middle--right">
                        <ul><li><p><strong>Name: </strong>Peter Dubravec</p></li>
                            <li><p><strong>Email: </strong> <span>peter.dubravec98@gmail.com</span></p></li>
                            <li><p><strong>Age: </strong>25</p></li>
                            <li><p><strong>From: </strong>Banska Bystrica, Slovakia</p></li>
                            <li><button className="cv-btn">Download CV</button></li>
                        </ul>
                    </div>
                </div>
                <div className="about-me-bottom">
                    <div className="experience">
                        <div className="number">5+</div>
                        <div>Years Of Experience</div>
                    </div>
                    <div className="separator"></div>
                    <div className="projects">
                        <div className="number">10+</div>
                        <div>Projects Done</div>
                    </div>
                    <div className="separator"></div>
                    <div className="clients">
                        <div className="number">20+</div>
                        <div>Happy Clients</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection