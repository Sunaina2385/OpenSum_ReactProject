import React from 'react'
import './Footer.css';
const logo="https://www.paraphraser.io/assets/frontend/images/logo.png?v=1";

const facebook="https://icons8.com/icon/13912/facebook";

const Footer = () => {
  return (
    <>
        <div className='mainDiv'>
            <div className='FooterSection'>
                <div className='sectionlogo'>
                        <div><img src={logo} alt="logo" height="40px"/>OpenSum</div>
                    
                    <div>By @SunainaGarg</div>
                </div>
                <div className='section'>
                    <h4>Company</h4>
                    <ol>
                        <li>Pricing</li>
                        <li>Privacy Policy</li>
                        <li>Terms</li>
                        <li>Contact</li>
                    </ol>
                </div>
                <div className='section'>
                    <h4>Resources</h4>
                    <ol>
                        <li>Feature Request</li>
                        <li>Report a Bug</li>
                    </ol>
                </div>
                <div className='section'>
                    <h4>Resources</h4>
                    <ol>
                        <li><a href="https://www.github.com">Github</a></li>
                        <li><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">Linkdin</a></li>
                        <li><a href="">Instagram</a></li>
                       
                    </ol>
                </div>
                <div className='section'>
                    <h4>Developers</h4>
                    <ol>
                        <li>API Access</li>
                    </ol>
                </div>
            </div>

            <hr/>
            <p>Copyright © 2023|All rights reserved</p>
        </div>
        

    </>
  )
}

export default Footer;
