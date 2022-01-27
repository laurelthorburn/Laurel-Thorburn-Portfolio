import './intro.css';
import Laurel from '../../media/laurelheadshotmini.jpg';

const Intro = () => {
    return (
        <div className ="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className ="intro-phrase">Welcome.</h2>
                    <h1 className="intro-name">My name is Laurel Thorburn.</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Full Stack Developer</div>
                            <div className="intro-title-item">Doctor of Audiology</div>
                            <div className="intro-title-item">Software Engineer</div>
                            <div className="intro-title-item">Lover of Donuts</div>
                        </div>
                    </div>
                    <div className="intro-desc">
                    I am a full stack developer currently working as an audiologist. I moved to Colorado to pursue my doctorate and currently am employed at Kaiser Permanente. I pride myself on being a strong team member, independent learner, and love a challenge (except when it involves getting a lid off a jam jar). I originally pursued computer science in college and am excited to achieve this dream over a decade later.
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <img src={Laurel} alt="headshot photo" className="intro-img" />
            </div>
        </div>
    )
}

export default Intro