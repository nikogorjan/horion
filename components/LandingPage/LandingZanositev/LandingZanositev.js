import React from 'react'
import './LandingZanositev.css'

const LandingZanositev = () => {
    return (
        <div className='landingzanositev-main'>

            <div className='lzanositev-left'>
                <video autoPlay loop muted playsInline className="hero-video-zanositev">
                    <source src="/Videos/21.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='lzanositev-right'>
                <div className='bubble3'>
                    <div className='bubble-content-wrapper'>
                        <h3 className='bubble-header'>Kdaj obiskati ginekologa, če zanositev izostane?</h3>
                        <p className='bubble-paragraph'>Ko si par prizadeva za zanositev, je pomembno vedeti, kdaj je čas za obisk ginekologa. Če po enem letu rednih spolnih odnosov brez uporabe kontracepcije ne pride do zanositve, je priporočljiv obisk pri ginekologu.</p>
                        <div className='underlined-button'>
                            <a href="/About">PREBERI VEČ</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingZanositev
