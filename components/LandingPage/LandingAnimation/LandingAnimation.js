import React from 'react'
import './LandingAnimation.css'

const LandingAnimation = () => {
    return (
        <div className='animation-main'>
                            <div id="anim-smear-section" className='thesection-div'></div>

            <div className='alignme widthme transformme absolutetransform'>
                <div className='matg'>Oploditev</div>
                <h2 className='math'>Začetek čudeža</h2>
                <p className='matp marp'>Dirka do življenja, naša prva zmaga.</p>
            </div>

            <div className='video-wrappser'>
            <video autoPlay muted loop playsInline className='hero-video desktop'>
                {/*<source src="/Videos/webm.webm" type='video/webm' />
                <source src="/Videos/qt.mov" type='video/mp4; codecs="hvc1"' />*/}
                <source src="/Videos/editedd.mp4" type="video/mp4" />

            </video>

            <video autoPlay muted loop playsInline className='hero-video mobile'>
                {/*<source src="/Videos/webm.webm" type='video/webm' />
                <source src="/Videos/qt.mov" type='video/mp4; codecs="hvc1"' />*/}
                <source src="/Videos/mobile.mp4" type="video/mp4" />

            </video>
            </div>
            
        </div>
    )
}

export default LandingAnimation
