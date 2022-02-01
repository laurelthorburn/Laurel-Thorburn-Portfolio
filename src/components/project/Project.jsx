import { useContext } from 'react';
import './project.css'

const Project = ({img,ghLink,siteLink,title}) => {
    return (
        <div className="project">
            <div className="card">
            <figure className="front">
                <img src={img} alt={title} className="projectImg" />
                <div className="cardTitle">
                    {title}
                </div>
            </figure>

            <figure className="back">
                    <a href={ghLink} target="_blank" rel="noreferrer" className='projectLink'>
                        <div className="githubBlock" onClick="location.href={ghLink}">
                            <a href={ghLink} target="_blank" rel="noreferrer" className='projectLink'>
                                View on Github
                            </a>
                        </div>
                    </a>

                    <a href={siteLink} target="_blank" rel="noreferrer" className='siteLink'>
                        <div className="siteBlock">
                            <a href={siteLink} target="_blank" rel="noreferrer" className='siteLink'>
                                View Site
                                </a>
                        </div>
                    </a>
            </figure>
            </div>
        </div>
    )
};

export default Project