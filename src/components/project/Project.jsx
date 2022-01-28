import { useContext } from 'react';
import './project.css'

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
            </figure>
            </div>
        </div>
    )
};

export default Project