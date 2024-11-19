import React from 'react'
import { SocialMedia } from '../../components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css'

// Material Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
    return (
        <div className='footer section-padding'>
            <div className='contact-details '>
                <div className='contact-details-wrapper'>
                    <div className='email contact-details-child'>
                        <EmailIcon fontSize='large' sx={{ color: '#fff' }} />
                        <p>srinivasb9712@gmail.com</p>
                    </div>
                    <div className='phone contact-details-child'>
                        <CallIcon fontSize='large' sx={{ color: '#fff' }} />
                        <p>+1 (940)-205-6766</p>
                    </div>
                    <div className='contact-details-child'>
                        <a href='https://www.linkedin.com/in/srinivas-b-593a39285/' target="_blank" >
                            <LinkedInIcon sx={{ color: '#fff' }} fontSize='large' />
                        </a>
                        <a href='https://www.linkedin.com/in/srinivas-b-593a39285/' target="_blank" >
                            <p>Srinivas B</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
