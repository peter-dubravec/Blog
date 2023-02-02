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
                    <div className="resume-education-flex">
                        <h2>My Education</h2>
                        <div className="resume-box">
                            <p className="date">2015-2017</p>
                            <p className="occupation">A levels</p>
                            <p className="establishment">Kingston College</p>
                            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ullam sapiente ad quasi esse consectetur.</p>
                        </div>
                        <div className="resume-box">
                            <p className="date">2017-2020</p>
                            <p className="occupation">Bachelor Degree</p>
                            <p className="establishment">Slovak Technical University</p>
                            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ullam sapiente ad quasi esse consectetur.</p>
                        </div>
                        <div className="resume-box">
                            <p className="date">2020-2022</p>
                            <p className="occupation">Master's Degree</p>
                            <p className="establishment">Slovak Technical University</p>
                            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ullam sapiente ad quasi esse consectetur.</p>
                        </div>
                    </div>
                    <div className="resume-experience-flex">
                        <h2>My Experience</h2>
                        <div className="resume-box"><p className="date">2020-2022</p>
                            <p className="occupation">Master's Degree</p>
                            <p className="establishment">Slovak Technical University</p>
                            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ullam sapiente ad quasi esse consectetur.</p></div>
                        <div className="resume-box"><p className="date">2020-2022</p>
                            <p className="occupation">Master's Degree</p>
                            <p className="establishment">Slovak Technical University</p>
                            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ullam sapiente ad quasi esse consectetur.</p></div>
                        <div className="resume-box"><p className="date">2020-2022</p>
                            <p className="occupation">Master's Degree</p>
                            <p className="establishment">Slovak Technical University</p>
                            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ullam sapiente ad quasi esse consectetur.</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeSection