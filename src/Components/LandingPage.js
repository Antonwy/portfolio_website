import React from 'react'
import BlackGradient from './BlackGradient'
import Anton from "../Images/ANTON.svg";
import Wyrowski from '../Images/WYROWSKI.svg'

const LandingPage = () => {
  return (
    <div className="landingBG text-center display-block">
        <BlackGradient tb={false} />
        <div className="Logo">
          {/* <h1 className="antonHeader">ANTON</h1>
          <h1 className="text-white">WYROWSKI</h1> */}
          <img src={Anton} />
          <img src={Wyrowski} />
        </div>
    </div>
  )
}

export default LandingPage
