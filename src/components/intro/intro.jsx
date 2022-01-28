import './intro.css';
import Laurel from '../../media/laurelheadshotmini.jpg';
import Hero from '../../media/sean_fallphoto.jpg'

const Intro = () => {
    return (
        <div className ="intro">
            
            <img src={Hero} alt="" className="intro-img" />
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
                </div>

            </div>
        </div>

    )
}

export default Intro