import './project.css'

const Project = ({img,link}) => {
    return (
        <div className="project">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="projectImg" />
            </a>
        </div>
    )
};

export default Project