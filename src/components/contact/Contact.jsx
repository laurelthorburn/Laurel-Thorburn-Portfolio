import './contact.css';
import Phone from '../../media/phone.png';
import Location from '../../media/needle.png';
import Email from '../../media/letter.png';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    //using react hook
    const formRef = useRef();
    //use state hook
    const [done, setDone] = useState(false);

    //see emailJS documentation for emailJS setup
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a8wm6ey', 'template_uz6j0pr', formRef.current, 'user_JzMKPjAf3Nxc7OxXzWIf6')
          .then((result) => {
              console.log("Your email has been sent 📨");
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };

    return (

        <div className="contact">
                <div className="contactWrapper">
                    <div className="contact-left">
                        <div className="contactInfo">
                        <h1 className="contactTitle"> Contact Information:</h1>
                            <div className="contactInfoItem">
                                <img src={Phone} alt="Phone Icon" className="contactIcon" />
                            + 303-736-9393
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
                        <form ref={formRef} onSubmit={sendEmail}>
                            <input type="text" placeholder='Name' name='{user_name}' />
                            <input type="text" placeholder='Subject' name='{user_subject}' />
                            <input type="text" placeholder='Email' name='{user_email}' />
                            <textarea name="message" rows="5" placeholder='Message'></textarea>
                            <button>Submit!</button>
                            {done  && "Thank you, your email has been sent 📨"}
                        </form>
                    </div>
                </div>
        </div>

    )
};

export default Contact