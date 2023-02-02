import React, { useEffect, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'


const PortfolioSection = () => {
    const [clickedBtn, setClickedBtn] = useState({
        0: true,
        1: false,
        2: false,
        3: false
    })

    const prevBtn = useRef(null)

    const handleClick = (e) => {
        const btnValue = e.target.getAttribute('data-btn');
        const copiedObj = { ...clickedBtn }
        Object.keys(copiedObj).forEach(key => {
            if (key == btnValue) {
                copiedObj[key] = true;
            } else {
                copiedObj[key] = false;
            }
        });
        setClickedBtn(copiedObj)
    }

    useEffect(() => {
        console.log("ahoj")
    }, [clickedBtn])

    return (
        <section className="portfolio-section" id="portfolioid">
            <div className="portfolio-container content-container">
                <div className="section--heading"><h2>Recent Projects</h2>
                    <p>Portfolio</p>
                    <span className="separator"></span>
                </div>
                <ul className="navigation">
                    <li><button data-btn="0" onClick={(e) => handleClick(e)} className={clickedBtn[0] == true ? "active" : ""}>MERN</button></li>
                    <li><button data-btn="1" onClick={(e) => handleClick(e)} className={clickedBtn[1] == true ? "active" : ""}>React</button></li>
                    <li><button data-btn="2" onClick={(e) => handleClick(e)} className={clickedBtn[2] == true ? "active" : ""}>Javascript</button></li>
                    <li><button data-btn="3" onClick={(e) => handleClick(e)} className={clickedBtn[3] == true ? "active" : ""}>Algorithms</button></li>
                </ul>
                <div className="projects-container">
                    {clickedBtn[0] &&
                        (<div data-key="0" className="project mern">
                            <ul>
                                <li><a href="https://github.com/peter-dubravec/Members-Only" target="_blank"><FaGithub />Members Only</a></li>
                                <li><a href="https://github.com/peter-dubravec/Inventory" target="_blank"><FaGithub />Inventory</a></li>
                                <li><a href="https://github.com/peter-dubravec/Library" target="_blank"><FaGithub />Library</a></li>
                            </ul>
                        </div>)}
                    {clickedBtn[1] &&
                        (<div className="project react">
                            <ul>
                                <li><a href="https://github.com/peter-dubravec/CV-Creator"><FaGithub />CV-Creator</a></li>
                                <li><a href="https://github.com/peter-dubravec/Memory-Card"><FaGithub />Memory-Card</a></li>
                                <li><a href="https://github.com/peter-dubravec/Shopping-Cart"><FaGithub />Shopping Cart</a></li>
                            </ul>
                        </div>)}
                    {clickedBtn[2] &&
                        <div className="project javascript">
                            <ul>
                                <li><a href="https://github.com/peter-dubravec/BattleShip" target="_blank"><FaGithub />BattleShip</a></li>
                                <li><a href="https://github.com/peter-dubravec/TODOList" target="_blank"><FaGithub />Todo List</a></li>
                                <li><a href="https://github.com/peter-dubravec/WeatherApp" target="_blank"><FaGithub />Weather App</a></li>
                            </ul>
                        </div>}
                    {clickedBtn[3] &&
                        <div className="project algorithms">
                            <ul>
                                <li><a href="https://github.com/peter-dubravec/RecursionAndDataStructures/tree/master/knight_travails_final" target="_blank"><FaGithub />Knight Travails</a></li>
                                <li><a href="https://github.com/peter-dubravec/RecursionAndDataStructures/tree/master/Binary_search_trees" target="_blank"><FaGithub />Binary Search Trees</a></li>
                                <li><a href="https://github.com/peter-dubravec/RecursionAndDataStructures/tree/master/mergeRec" target="_blank"><FaGithub />Merge Algorithm</a></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </section >
    )
}

export default PortfolioSection