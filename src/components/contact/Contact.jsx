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

    //use state for name text validation
    const [checkName, setNameCheck] = useState("Name");

    //use state for subj text validation
    const [checkSubject, setSubjectCheck] = useState("Subject");

    //use state for msg text validation
    const [checkMessage, setMessageCheck] = useState("Insert Message Here");

    //use state for email text validation
    const [checkEmail, setEmailCheck] = useState("Email");

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

        //check to see if user input a value in name form
        const handleName = (e) => {
            e.preventDefault();
            (!e.target.value.length) ? setNameCheck("Name is required") : setNameCheck("Name");
            }

        //check to see if user input a value in subject form
        const handleSubject = (e) => {
            e.preventDefault();
            (!e.target.value.length) ? setSubjectCheck("Subject is required") : setSubjectCheck("Subject");
            }

        //check to see if user input a value in email form
        const handleMessage = (e) => {
            e.preventDefault();
            (!e.target.value.length) ? setMessageCheck("Message is required") : setMessageCheck("Insert Message Here");
            }

        //check to see if user input a value in email form
        const handleEmail = (e) => {
            e.preventDefault();
            (!e.target.value.length) ? setEmailCheck("Email is required") : setMessageCheck("Email");
            }

      //check to see if user input a value in email form, must meet email requirements
      const handleChange = (e) => {
        e.preventDefault();
        isEmail(e.target.value) ? setError("") : setError("Please input a valid email, such as laurelishired@hireher.com");
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
                            <input type="text" placeholder={checkName} name='{user_name}' onBlur={handleName} required />

                            <input type="text" placeholder={checkSubject} name='{user_subject}' onBlur={handleSubject} required />

                            <input type="email" placeholder={checkEmail} name='{user_email}' onBlur={handleEmail} onChange={handleChange} required />
                            <p className="errorMsg">{error}</p>

                            <textarea name="message" rows="5" placeholder={checkMessage} onBlur={handleMessage} required></textarea>

                            <button className="button-6" >Send Email </button>
                            <p>{done  && "Thank you, your email has been sent 📨"}</p>
                        </form>
                    </div>
                </div>
        </div>

    )
};

export default Contact