import React from 'react'
import { FaBullhorn, FaCode, FaLaptopCode, FaNetworkWired, FaPencilRuler, FaRegChartBar } from 'react-icons/fa'

const WhatIDoSection = () => {
  return (
    <section className="whatido-section" id="whatidoid">
      <div className="content-container">
        <div className="whatido-container">
          <div className="section--heading"><h2>Services</h2>
            <p>What I Do</p>
            <span className="separator"></span>
          </div>
        </div>
        <div className="whatido-grid-container">
          <div className="whatido-flex-container">
            <div className="icon"><FaCode /></div>
            <div>
              <h2 className="whatido-service-heading">App Development</h2>
              <p>I offer web app development services that can help take your business or organization to the next level. I can build powerful, responsive full-stack web applications that are customized to your specific needs. Whether you need a simple website or a more complex web-based software solution.</p>
            </div>
          </div>
          <div className="whatido-flex-container">
            <div className="icon"><FaNetworkWired /></div>
            <div>
              <h2 className="whatido-service-heading">DevOps</h2>
              <p> I can help you select the best deployment option for your needs, whether that's deploying locally or using a cloud platform like Amazon Web Services or Microsoft Azure. I am dedicated to optimizing performance and security, and I can set up monitoring and analytics tools to help you track usage and identify areas for improvement.</p>
            </div>
          </div>
          <div className="whatido-flex-container">
            <div className="icon"><FaLaptopCode /></div>
            <div>
              <h2 className="whatido-service-heading">Web Design</h2>
              <p>I offer web design services to create visually appealing websites that deliver a seamless user experience. I focus on creating custom layouts that are optimized for different devices and clear navigation that guides users through the site. Let me help you create a website that not only looks great but also drives engagement and conversions.</p>
            </div>
          </div>
          <div className="whatido-flex-container">
            <div className="icon"><FaRegChartBar /></div>
            <div>
              <h2 className="whatido-service-heading">Business Analysis</h2>
              <p>I can help you identify opportunities for growth and improvement within your organization. My analysis is centered on understanding your business processes and identifying areas where technology can help optimize operations, reduce costs, and increase revenue. I can help you define business requirements, conduct market research. </p>
            </div>
          </div>
          <div className="whatido-flex-container">
            <div className="icon"><FaBullhorn /></div>
            <div>
              <h2 className="whatido-service-heading">SEO</h2>
              <p>With my knowledge of search engine algorithms and best practices, I can optimize your website's content, structure, and backlinks to improve your search engine rankings and drive more traffic to your site.</p>
            </div>
          </div>
          <div className="whatido-flex-container">
            <div className="icon"><FaPencilRuler /></div>
            <div>
              <h2 className="whatido-service-heading">Networking</h2>
              <p>With my background in networking, I can help you optimize your network infrastructure for maximum performance and security. Whether you need help configuring routers and switches, setting up firewalls and VPNs, or troubleshooting network issues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIDoSection