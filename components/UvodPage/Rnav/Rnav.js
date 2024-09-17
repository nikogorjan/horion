import React from 'react'
import './Rnav.css'

const Rnav = () => {
  return (
    <div className='Rnav-main'>
      <div className='contact-right'>
        <div className='c-row'>
          <div className='icon-holder'>
            <img alt='menstruacija' className='r-icon' src='/Icons/i1.png' />
          </div>
          <p className='icon-p'>
            info@horion.si
          </p>

        </div>
        <div className='c-row'>
          <div className='icon-holder'>
            <img alt='menstruacija' className='r-icon' src='/Icons/i2.png' />
          </div>
          <p className='icon-p'>
            031 123 123
          </p>

        </div>

        <div className='c-row'>
          <div className='icon-holder'>
            <img alt='menstruacija' className='r-icon' src='/Icons/i3.png' />
          </div>
          <p className='icon-p'>
            Nova ulica 18, Ljubljana
          </p>

        </div>

      </div>
      <video autoPlay loop muted playsInline className="promo-video">
          <source src="/Videos/FORTE.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Rnav
