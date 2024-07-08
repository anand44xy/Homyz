import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="f-wrapper">
            <div className="f-container paddings innerWidth flexCenter">
                {/* Left Side */}
                <div className="f-left flexColStart">
                    <img src="./logo2.png" alt="" width={150} />
                    <span className='secondaryText'>Our vision is to make all people <br />
                        the best place to live for them.
                    </span>
                </div>

                {/* Right Side */}
                <div className="f-right">
                    <span className="primaryText rs1" >Information</span>
                    <span className="secondaryText rs2">145 New York, FL 5467, USA</span>
                    <div className="f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer