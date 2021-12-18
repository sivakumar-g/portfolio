import React,{ useContext, useRef,useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";
import Wobble from 'react-reveal/Wobble';
// import Heart from "react-animated-heart";
// import {heart} from '../../img'

function Contact() {

    const formRef = useRef();
  const [done, setDone] = useState(false)
  const [userName, setuserName] = useState('')
  const [userEmail, setuserEmail] = useState('')
  const [userMessage, setuserMessage] = useState('')
  const [userSubject, setuserSubject] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    

    emailjs
      .sendForm(
        "service_793sfif",
        "template_wneu1lj",
        formRef.current,
        "user_RajmyTFRPRwnfU1W4yslk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
          setuserEmail('')
          setuserMessage('')
          setuserSubject('')
          setuserName('')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    return (
       
    
    
        <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            
          <Wobble> <h1 className="c-title">Let's Coffee !</h1> </Wobble> 
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +91 8778809328
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                gsivakumar9806@gmail.com
              </div> 
                         <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                Chennai, India .
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What’s your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
              <form ref={formRef} onSubmit={handleSubmit}>
              <input value={userName} onChange={e=>setuserName(e.target.value)} type="text" placeholder="Name" name="user_name" />
              <input  value={userSubject} onChange={e=>setuserSubject(e.target.value)} type="text" placeholder="Subject" name="user_subject" />
              <input  value={userEmail} onChange={e=>setuserEmail(e.target.value)} type="email" placeholder="Email" name="user_email" />
              <textarea  value={userMessage} onChange={e=>setuserMessage(e.target.value)} rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              {done && "Thank you...Your Message has been Received"}
            </form>
          </div>
        </div>
        <div style={{font:'bold',margin:'5%'}}>All rights reserved @2021 Sivakumar</div>
        {/* <div style={{font:'bold',margin:'1%',display: 'inline',fontSize:'1%'}}>Built with <Heart isClick={true} style={{fontSize:'0.2px'}}/> by Sivakumar</div> */}
        {/* <div>Built with <i class="fas fa-heart" style={{  fontSize: '50px',color:'red'}}></i> </div> */}
        {/* <div>Built with <img src=></img> </div> */}
      </div>    )
}

export default Contact
