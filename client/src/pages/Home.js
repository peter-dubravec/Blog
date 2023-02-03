import { useEffect, useState } from "react"
import AboutMeSection from "../components/AboutMeSection"
import BlogPostsSection from "../components/BlogPostsSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import HomeSection from "../components/HomeSection"
import PortfolioSection from "../components/PortfolioSection"
import ResumeSection from "../components/ResumeSection"
import WhatIDoSection from "../components/WhatIDoSection"

const Home = () => {

    return (
        <div className="main-content-wrapper">
            <HomeSection />
            <AboutMeSection />
            <WhatIDoSection />
            <ResumeSection />
            <PortfolioSection />
            <BlogPostsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Home