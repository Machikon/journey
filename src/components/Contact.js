
import React from "react";
import './styles/Contact.css';
import emailjs from 'emailjs-com';


const Contact =() => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_8eg0ooj', 'template_0fimdhk', e.target, 'MfuYxBi3vPhh8k3Sz')
        .then (res => {
            console.log(res);
        }).catch (err => console.log(err));
    }

    return(
        <div className="contact">
            {/* <div className="arrow-About">
                <Link to='/'><ArrowBack className='arrow'/></Link>

            </div> */}
            <h1>Contact</h1>
            <form onSubmit={sendEmail}  >
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name'/>
                <label>Your Email</label>
                <input type='email' name='user_email'  placeholder='Enter your email'/>
                <label>Message</label>
                <textarea name='message'  cols="50" rows="7" placeholder="e.g Hello" />
                <input type='submit' value='Send' />

                <button> Send</button>
            </form>

        </div>

    )
}


export default Contact