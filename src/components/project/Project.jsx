import { useContext } from 'react';
import './project.css'
import Github from '../../media/github.png'
import Computer from '../../media/computer.png'

const Project = ({img,link,title}) => {
    console.log(link)
    console.log(title)
    return (
        <div className="project">
            <div className="card">
            <figure className="front">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt={title} className="projectImg" />
            </a>
            </figure>

            <figure className="back">
                <div className="cardTitle">
                    Title: {title}
                    </div>
                    <div className="githubBlock">
                    View on Github 
                    {/* <img src={Github} alt="View Github Icon" className="cardIcon" /> */}
                    </div>
                    <div className="siteBlock">
                        View Site
                    {/* <img src={Computer} alt="View Site Icon" className="cardIcon" /> */}
                </div>
            </figure>
            </div>
        </div>
    )
};

export default Project