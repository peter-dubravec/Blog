import React, { useState } from 'react'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'

const ContactSection = () => {
    const [email, setEmail] = useState({ name: "", emailFrom: "", message: "" })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const response = await fetch("https://35.180.74.202/api/user/sendmail", {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(email)
        })

        if (response.ok) {
            console.log("ok")
        } else {
            console.log(response.statusText)
        }
        setEmail({ name: "", emailFrom: "", message: "" })
        setLoading(false)
    }



    return (
        <section className="contact-section" id="contactid">
            <div className='contact-container content-container'>
                <div className="section--heading"><h2>Get In Touch</h2>
                    <p>CONTACT</p>
                    <span className="separator"></span>
                </div>
                <div className="contact-flex">
                    <div className="contact-flex--left">
                        <div className="address-container">
                            <h2 className="address">ADDRESS</h2>
                            <p>Horna Micina 172,</p>
                            <p>Banska Bystrica, 97401,</p>
                            <p>Slovakia</p>
                        </div>
                        <div className="contact">
                            <p className="phone">+421 915 548 350</p>
                            <p className="email">peter.dubravec98@gmail.com</p>
                        </div>
                        <div className="follow-container">
                            <p className="follow">FOLLOW ME!</p>
                            <div className="links">
                                <a href="https://www.facebook.com/peter.dubravec.7/"><FaFacebookF /></a>
                                <a href="https://www.linkedin.com/in/peter-d%C3%BAbravec-327376225/"><FaLinkedin /></a>


                            </div>
                        </div>
                    </div>
                    <div className="email-container">
                        <form className="contact-flex--right" onSubmit={handleSubmit} id="emailform">
                            <div className="email">
                                <div className="heading-email"><h2>SEND ME EMAIL!</h2></div>
                                <input type="text" name="text" id="text" placeholder='Name' value={email.name} onChange={(e) => setEmail({ ...email, name: e.target.value })} />
                                <input type="email" name="email" id="email" placeholder="Email" value={email.emailFrom} onChange={(e) => setEmail({ ...email, emailFrom: e.target.value })} />
                                <textarea name="" id="" rows="5" placeholder="Don't hesitate to contact me!" value={email.message} onChange={(e) => setEmail({ ...email, message: e.target.value })}></textarea>
                            </div>
                            <button disabled={loading} type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ContactSection