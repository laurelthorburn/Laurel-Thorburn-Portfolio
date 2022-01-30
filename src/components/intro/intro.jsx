import './intro.css';
// import Hero from '../../media/sean_fallphoto.jpg'
import Laurel from '../../media/giantlaurel.png'

const Intro = () => {
    return (
        <div className ="intro">
            <div className="intro-left">
            {/* <img src={Hero} alt="" className="intro-img" /> */}
            <div className="introBox">
                <div className="introTitle">
                    <div className="introName">laurel thorburn</div>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Full Stack Developer 👩🏽‍💻</div>
                            <div className="intro-title-item">Doctor of Audiology 🦻🏽</div>
                            <div className="intro-title-item">Software Engineer 🧠</div>
                            <div className="intro-title-item">Lover of Donuts 🍩</div>
                        </div>
                    </div>
                    <div className="introAbout">
                    Laurel is full stack developer currently working as an audiologist. She moved to Colorado to pursue her doctorate and currently is employed at Kaiser Permanente. She prides herself on being a strong team member, independent learner, and loves a challenge (except when it involves getting a lid off a jam jar). Laurel originally pursued computer science in college and is excited to achieve this dream over a decade later.
                    </div>
                </div>
            </div>
            </div>
            <div className="intro-right">
                <img src={Laurel} alt="Giant version of Laurel" className="megaLaurel" />
            </div>
        </div>

    )
}

export default Intro