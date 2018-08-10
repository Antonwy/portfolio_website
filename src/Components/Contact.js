import React from 'react';
import BlackGradient from './BlackGradient';
import facebook from '../Images/facebook.svg'
import github from '../Images/github.svg'
import gmail from '../Images/gmail.svg'
import instagram from '../Images/instagram.svg'
import twitter from '../Images/twitter.svg'

const Contact = () => {
    return (
        <div className="contactBG">
            <BlackGradient tb={true} />
            <div className="text-white position-relative contactList">
                <div className="contact">
                    <img src={github} width="40px" height="40px" />
                    <p>Antonwy</p>
                </div>
                <div className="contact">
                    <img src={gmail} width="40px" height="40px" />
                    <p>anton.wyrowski@gmail.com</p>
                </div>
                <div className="contact">
                    <img src={instagram} width="40px" height="40px" />
                    <p>antonwyr</p>
                </div>
                <div className="contact">
                    <img src={facebook} width="40px" height="40px" />
                    <p>Anton Wyrowski</p>
                </div>
                <div className="contact">
                    <img src={twitter} width="40px" height="40px" />
                    <p>antonwyro</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
