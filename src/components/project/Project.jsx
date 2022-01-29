import { useContext } from 'react';
import './project.css'
import GithubLogo from '../../media/githublogo.png'
import Computer from '../../media/computer.png'

const Project = ({img,ghLink,siteLink,title}) => {
    return (
        <div className="project">
            <div className="card">
            <figure className="front">
                <img src={img} alt={title} className="projectImg" />
                </figure>

            <figure className="back">
                <div className="cardTitle">
                    Title: {title}
                </div>
                    <a href={ghLink} target="_blank" rel="noreferrer">
                        <div className="githubBlock">
                            View on Github 
                            <img src={GithubLogo} alt="View Github Icon" className="cardIcon" />
                        </div>
                    </a>

                    <a href={siteLink} target="_blank" rel="noreferrer">
                        <div className="siteBlock">
                            View Site
                            <img src={Computer} alt="View Site Icon" className="cardIcon" />
                        </div>
                    </a>
            </figure>
            </div>
        </div>
    )
};

export default Project