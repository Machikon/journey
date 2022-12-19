
import React from "react";
import './styles/Contact.css';


const Contact =() => {
    return(
        <div className="contact">
            {/* <div className="arrow-About">
                <Link to='/'><ArrowBack className='arrow'/></Link>

            </div> */}

            <form>
                <label>Your Name</label>
                <input type='text' placeholder='Enter your name'/>
                <label>Your Email</label>
                <input type='text' placeholder='Enter your email'/>
                <label>Message</label>
                <textarea cols="50" rows="7" placeholder="e.g Hello" ></textarea>

                <button> Send</button>
            </form>

        </div>

    )
}


export default Contact