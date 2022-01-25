import './intro.css';

const Intro = () => {
    return (
        <div className ="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className ="intro-phrase">Hello, my name is</h2>
                    <h1 className="intro-name"></h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Full Stack Developer</div>
                            <div className="intro-title-item">Audiologist</div>
                            <div className="intro-title-item">Lover of Donuts</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-right">rightie</div>
        </div>
    )
}

export default Intro