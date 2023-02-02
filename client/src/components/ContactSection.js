import React from 'react'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'

const ContactSection = () => {
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
                                <a href="https://www.facebook.com"><FaFacebookF /></a>
                                <a href="https://www.facebook.com"><FaLinkedin /></a>


                            </div>
                        </div>
                    </div>
                    <div className="email-container">
                        <form className="contact-flex--right">
                            <div className="email">
                                <div className="heading-email"><h2>SEND ME EMAIL!</h2></div>
                                <input type="text" name="text" id="text" placeholder='Name' />
                                <input type="email" name="email" id="email" placeholder="Email" />
                                <textarea name="" id="" rows="5" placeholder="Don't hesitate to contact me! "></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ContactSection