import React from 'react'

const ResumeSection = () => {
    return (
        <section className="resume-section" id="resumeid">
            <div className="resume-container content-container">
                <div className="section--heading"><h2>Resume</h2>
                    <p>SUMMARY</p>
                    <span className="separator"></span>
                </div>


                <div className="resume-containers">
                    <div className="resume-box edu1">
                        <h2>My Education</h2>
                        <p className="date">2015-2017</p>
                        <p className="occupation">A levels</p>
                        <p className="establishment">Kingston College</p>
                        <p className="text">I pursued my academic studies in London, where I completed degrees in math, physics, and IT.</p>
                    </div>


                    <div className="resume-box edu2">
                        <p className="date">2017-2020</p>
                        <p className="occupation">Bachelor Degree</p>
                        <p className="establishment">Slovak Technical University</p>
                        <p className="text">I completed my bachelor's degree in networking, which provided me with a comprehensive understanding of network protocols, security, and administration.</p>
                    </div>
                    <div className="resume-box edu3">
                        <p className="date">2020-2022</p>
                        <p className="occupation">Master's Degree</p>
                        <p className="establishment">Slovak Technical University</p>
                        <p className="text">I also earned a master's degree in IT, with a particular focus on networking, where I gained advanced knowledge and practical skills in network design, configuration, and security.</p>
                    </div>


                    <div className="resume-box exp1">
                        <h2>My Experience</h2>
                        <p className="date">2020-2022</p>
                        <p className="occupation">TODO</p>
                        <p className="establishment">Slovak Technical University</p>
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ullam sapiente ad quasi esse consectetur.</p>
                    </div>
                    <div className="resume-box exp2"><p className="date">2020-2022</p>
                        <p className="occupation">TODO</p>
                        <p className="establishment">Slovak Technical University</p>
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ullam sapiente ad quasi esse consectetur.</p>
                    </div>
                    <div className="resume-box exp3"><p className="date">2020-2022</p>
                        <p className="occupation">TODO</p>
                        <p className="establishment">Slovak Technical University</p>
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ullam sapiente ad quasi esse consectetur.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ResumeSection