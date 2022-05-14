import React from 'react'
import '../components-component/Donation.css'
const Donation = (props) => {
    return (
        <>
            <div className="indirect-donation">
          <div className="donation-parts1 ">
            <div className="common-content">
              <h2>MID-DAY MEALS</h2>
              <p>  Nourishing 18 lakh children everyday </p>
              <a href="">Support Us</a>
            </div>
          </div>


          <div className="donation-parts2 ">
            <div className="common-content">
              <h2>FAMILY HAPPINESS KITS
              </h2>
              <p>  Provided food assistance to 2.13 lakh marginalised families </p>
              <a href="">Support Us</a>
            </div>
          </div>
          <div className="donation-parts3 ">
            <div className="common-content">
              <h2>ANGANWADI KIT PROGRAMME
              </h2>
              <p>  Care for would-be and new mothers, and children. </p>
              <a href="">Support Us</a>
            </div>
          </div>
        </div>
        </>
    )
}

export default Donation
