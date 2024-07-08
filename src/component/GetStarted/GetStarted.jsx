import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <div className="g-wrapper">
        <div className="g-container innerWidth paddings">
            <div className="inner-container flexColCenter">
                <span className='primaryText'>Get started with Homyz</span>
                <span className='secondaryText'>Subscribe and find super attractive price quotes from us. <br />
                Find your residence soon</span>
                <button>
                    <a href="mailto:asbs@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted