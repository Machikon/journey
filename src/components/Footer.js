import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles/Footer.css';

function Footer () {
    return (

        <div className='footer'>
            <div className='socialMedia' />
            <div>
                <TwitterIcon a href="https://twitter.com/Mushimon22"  />
                <GitHubIcon a href="https://github.com/Machikon" />
                <LinkedInIcon a href= "https://www.linkedin.com/in/machikonn/" />

                 </div>   
            <p> &copy; 2022 Machiko Carroll</p>

        </div>
    )
}

export default Footer