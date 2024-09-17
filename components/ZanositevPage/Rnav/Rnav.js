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

      <div className='contact-right'>
        <div className='novica-div'>
          <img alt='blogimg' className='novica-img' src='/Images/DOC4.png' />
          <div className='blog-content-wrapper'>
            <p className='blog-hint'>TEŽAVE Z ZANOSITVIJO</p>
            <p className='blog-header'>The standard Lorem Ipsum passage, used since the 1500s</p>
            <div className='underlined-button'>
              <a href="/About">PREBERI VEČ</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Rnav
