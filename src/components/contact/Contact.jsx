import './contact.css';
import Phone from '../../media/phone.png';
import Location from '../../media/needle.png';
import Email from '../../media/letter.png';
import LinkedIn from '../../media/linkedin.png';
import Github from '../../media/github.png';

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="contactBg">
                    <div className="contactWrapper">
                        <div className="contact-left">
                            <h1 className="contactTitle"> Contact Information:</h1>
                            <div className="contactInfo">
                                <div className="contactInfoItem">
                                    <img src={Phone} alt="Phone Icon" className="contactIcon" />
                                + 555-555-5555
                                </div>
                                <div className="contactInfoItem">
                                    <img src={Email} alt="Email Icon" className="contactIcon" />
                                codinglaurel@gmail.com
                                </div>
                                <div className="contactInfoItem">
                                    <img src={Location} alt="Location Icon" className="contactIcon" />
                                Aurora, CO, United States
                                </div>
                            </div>
                        </div>
                        <div className="contact-right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact