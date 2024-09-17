import React from 'react'
import './LandingLastBubble.css'

const LandingLastBubble = () => {
    return (
        <div className='lb-main'>
            <div className='lb-left'>
                <video autoPlay loop muted playsInline className="hero-video-absolute2">
                    <source src="/Videos/33.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='lb-right'>
                <div className='bubble4'>
                    <div className='bubble-content-wrapper'>
                        <h3 className='bubble-header'>Menopavza</h3>
                        <p className='bubble-paragraph'>Perimenopavza - že približno 10 let pred menopavzo pride do postopnega upadanja delovanja jajčnikov.</p>
                        <div className='underlined-button'>
                            <a href="/About">PREBERI VEČ</a>
                        </div>
                    </div>
                </div>
                <div className='bubble5'>
                    <div className='bubble-content-wrapper'>
                        <h3 className='bubble-header'>Ginekološko zdravje</h3>
                        <p className='bubble-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='underlined-button'>
                            <a href="/About">PREBERI VEČ</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingLastBubble
