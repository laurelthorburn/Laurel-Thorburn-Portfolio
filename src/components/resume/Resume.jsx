import './resume.css'

const Resume = () => {
    return(
        <div className="resume">
            <div className="resumeTitle">
            <h1 className="resumeName">
                LAUREL THORBURN, AuD
                </h1>
                <span className="resumeCatch">SOFTWARE ENGINEER, AUDIOLOGIST, DONUT LOVER</span>
                <span className='resumeIntro'>
                Creative and proficient object-oriented web developer with extensive history of working in client facing, team-oriented roles. Fast learner who’s reliable, enthusiastic, and methodical.
                </span>
            </div>
            <div className="resumeContainer">
                <div className="resumeSubContain">
                <div className="resume-left">
                <div className="resumeEd">
                    <h2 className="educationTitle">
                        EDUCATION
                    </h2>
                    <div className="educationHeader">
                        <span className="edName">Denver University</span>
                        <span className="edTime">2021-2022</span>
                    </div>
                    <div className="edDegree">
                        Full Stack Developer Certificate
                    </div>
                    <div className="educationHeader">
                        <span className="edName">University of Colorado, Boulder</span>
                        <span className="edTime">2013-2017</span>
                    </div>
                    <div className="edDegree">
                        Doctorate of Audiology (AuD)
                    </div>
                    <div className="educationHeader">
                        <span className="edName">San Jose State University</span>
                        <span className="edTime">2010-2013</span>
                    </div>
                    <div className="edDegree">
                        BA in Communicative Disorders & Sciences
                    </div>
                    <div className="educationHeader">
                        <span className="edName">University of Colorado, Colorado Springs</span>
                        <span className="edTime">2008-2009</span>
                    </div>
                    <div className="edDegree">
                        Studied Computer Science
                    </div>
                </div>

                <div className="resumeWork">
                    <h2 className="workTitle">
                        WORK
                    </h2>
                    <div className="workHeader">
                        <span className="workName">
                        Kaiser Permanente: Lead Clinical Audiologist 
                        </span>
                        <span className="workTime">2019-present</span>
                    </div>
                    <div className="workDetails">
                    Working with pediatric and adult patients providing diagnostic and rehabilitation services, such as audiological evaluations, hearing aid consultations, and fittings.
                    </div>
                    <div className="workHeader">
                        <span className="workName">
                            Aurora/Cherry Creek Public Schools: Educational Audiologist
                        </span>
                        <span className="workTime">2017-2019</span>
                    </div>
                    <div className="workDetails">
                        Worked with students, ages 0 to 21 years of age, and families of diverse cultures, backgrounds, languages, and disorders providing audiological evaluations and services.
                    </div>
                </div>

            </div>
            <div className="resume-right">
                <div className="resumeContact">where am i?
                
                contact, stack, soft skills
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Resume;