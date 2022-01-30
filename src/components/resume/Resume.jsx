import './resume.css'

const Resume = () => {
    return(
        <div>
            <div className="resume-left">
                <div className="resumeName">
                    LAUREL THORBURN, AuD
                    <span className="resumeCatch">SOFTWARE ENGINEER, AUDIOLOGIST, DONUT LOVER</span>
                </div>
                <div className="resumeWork"></div>
                <div className="resumeEducation"></div>
            </div>
            <div className="resume-right">
                <div className="resumeContact"></div>
            </div>
        </div>
    )
}

export default Resume;