import React from 'react'
import './Hero.css'
import SketchfabModel from '../Model/Model'

const Hero = () => {
  return (
    <div className='hero-main'>
      
      <div className='hero-wrapper'>

        <div className='hero-left'>
            <div className='hero-content-wrapper'>
                <h1 className='hero-header'>Potovanje skozi materinstvo</h1>
                <p className='hero-paragraph'>Dobrodošli na spletni strani, ki vas bo spremljala skozi čudovito potovanje materinstva. Od prvega trenutka nosečnosti, preko nepozabnih trenutkov pričakovanja, do neprecenljivih prvih tednov po porodu - tukaj smo, da vas podpremo, svetujemo in vas vodimo skozi celovito oskrbo med nosečnostjo in po porodu.</p>
            </div>
        </div>

        <div className='hero-right'>
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/Videos/18.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>


      <SketchfabModel/>

    </div>
  )
}

export default Hero
