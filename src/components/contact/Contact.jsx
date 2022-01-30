import './contact.css';
import Phone from '../../media/phone.png';
import Location from '../../media/location.png';
import Email from '../../media/email.png';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import isEmail from 'validator/lib/isEmail';

const Contact = () => {

    //using react hook
    const formRef = useRef();
    //use state hook
    const [done, setDone] = useState(false);

    //use state for email validation
    const [error, setError] = useState("");

    //use state for text validation
    const [textCheck, setTextCheck] = useState({name: "", subject: "", message: ""});

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

        //check to see if user input a value in email form
        const handleText = (e) => {
            e.preventDefault();

            (!e.target.value.length) ?
            setTextCheck("Input is required") :
            setTextCheck("");
            }

      //check to see if user input a value in email form
      const handleChange = (e) => {
        e.preventDefault();

        isEmail(e.target.value) ? 
        setError("") 
        : setError("Please input a valid email, such as laurelishired@hireher.com");
      }

    return (

        <div className="contact">
                <div className="contactWrapper">
                    <div className="contact-left">
                        <div className="contactInfo">
                        <h1 className="contactTitle"> Contact Information</h1>
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
                            <b>Let's work together.</b> 
                        </p>
                        <form ref={formRef} onSubmit={sendEmail}>
                            <input type="text" placeholder='Name' name='{user_name}' onChange={handleText} required />

                            <input type="text" placeholder='Subject' name='{user_subject}' onChange={handleText} required />

                            <input type="email" placeholder='Email' name='{user_email}' onChange={handleChange} required />
                            <p className="errorMsg">{error}</p>

                            <textarea name="message" rows="5" placeholder='Insert Message Here' onChange={handleText} required></textarea>

                            <button className="button-6" >Send Email</button>
                            {done  && "Thank you, your email has been sent 📨"}
                        </form>
                    </div>
                </div>
        </div>

    )
};

export default Contact