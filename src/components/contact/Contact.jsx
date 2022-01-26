import './contact.css';
import Phone from '../../media/phone.png';
import Location from '../../media/needle.png';
import Email from '../../media/letter.png';
import LinkedIn from '../../media/linkedin.png';
import Github from '../../media/github.png';

const Contact = () => {
    return (

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
                        <div className="contact-right">
                            <p className="contactDesc">
                                <b>Let's work together.</b> Send me an email so we can discuss how I can contribute to your team.
                            </p>
                            <form>
                                <input type="text" placeholder='Name' name='{user_name}' />
                                <input type="text" placeholder='Subject' name='{user_subject}' />
                                <input type="text" placeholder='Email' name='{user_email}' />
                                <textarea name="message" rows="5" placeholder='Message'></textarea>
                                <button>Submit!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    )
};

export default Contact