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

                <a href="https://twitter.com/Mushimon22" target="_blank" className='social-media'>
                <h4><TwitterIcon /></h4>
                </a>

                <a href="https://github.com/Machikon" target="_blank" className='social-media'>
                <h4><GitHubIcon  /></h4>
                </a>
                
                <a href="https://www.linkedin.com" target="_blank" className='social-media'>
                <h4><LinkedInIcon /></h4>
                </a>
                

            </div>   

        </div>
    )
}

export default Footer