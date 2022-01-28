import './project.css'

const Project = ({img,link,title}) => {
    return (
        <div className="project">
            <div className="card">
            <figure className="front">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt={title} className="projectImg" />
            </a>
            </figure>

            <figure className="back">
                This will have the github link and the deployed site link :)
            </figure>
            </div>
        </div>
    )
};

export default Project