import './project.css'

const Project = ({img,link}) => {
    return (
        <div className="project">
            <div className="projectBrowser">
                <div className="projectCircle"></div>
                <div className="projectCircle"></div>
                <div className="projectCircle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="projectImg" />
            </a>
        </div>
    )
};

export default Project