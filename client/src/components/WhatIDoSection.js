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
            <div className="icon"><FaLaptopCode /></div>
            <div>
              <h2 className="whatido-service-heading">Web Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor incidunt ipsam aut tempore, fugit corrupti saepe. Beatae magnam rem doloribus placeat et, impedit sunt eius alias repellendus. A, explicabo?</p>
            </div>
          </div>
          <div className="whatido-flex-container">
            <div className="icon"><FaCode /></div>
            <div>
              <h2 className="whatido-service-heading">App Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor incidunt ipsam aut tempore, fugit corrupti saepe. Beatae magnam rem doloribus placeat et, impedit sunt eius alias repellendus. A, explicabo?</p>
            </div>
          </div>
          <div className="whatido-flex-container">
            <div className="icon"><FaBullhorn /></div>
            <div>
              <h2 className="whatido-service-heading">SEO</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor incidunt ipsam aut tempore, fugit corrupti saepe. Beatae magnam rem doloribus placeat et, impedit sunt eius alias repellendus. A, explicabo?</p>
            </div>
          </div>
          <div className="whatido-flex-container">
            <div className="icon"><FaPencilRuler /></div>
            <div>
              <h2 className="whatido-service-heading">UI/UX Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor incidunt ipsam aut tempore, fugit corrupti saepe. Beatae magnam rem doloribus placeat et, impedit sunt eius alias repellendus. A, explicabo?</p>
            </div>
          </div>
          <div className="whatido-flex-container">
            <div className="icon"><FaRegChartBar /></div>
            <div>
              <h2 className="whatido-service-heading">Business Analysis</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor incidunt ipsam aut tempore, fugit corrupti saepe. Beatae magnam rem doloribus placeat et, impedit sunt eius alias repellendus. A, explicabo?</p>
            </div>
          </div>
          <div className="whatido-flex-container">
            <div className="icon"><FaNetworkWired /></div>
            <div>
              <h2 className="whatido-service-heading">Deployment</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor incidunt ipsam aut tempore, fugit corrupti saepe. Beatae magnam rem doloribus placeat et, impedit sunt eius alias repellendus. A, explicabo?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIDoSection