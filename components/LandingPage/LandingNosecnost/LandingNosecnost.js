import React from 'react'
import './LandingNosecnost.css'

const LandingNosecnost = () => {
    return (
        <div className='landing-nosecnost-main'>
            <div className='nosecnost-wrapper'>
                <div className='nosecnost-row'>
                    <div className='nosecnost-right rightnosec'>
                        <video autoPlay loop muted playsInline className="nosecnost-video">
                            <source src="/Videos/18.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='nosecnost-left marginnn'>
                        <div className='nos-w'>
                            <p className='blog-header'>Nosečnost</p>
                            <p className='blog-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className='underlined-button'>
                                <a href="/About">PREBERI VEČ</a>
                            </div>
                        </div>
                    </div>
                    <div className='nosecnost-right rightnosecx'>
                        <video autoPlay loop muted playsInline className="nosecnost-video">
                            <source src="/Videos/18.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
                <div className='nosecnost-row'>
                    <div className='nosecnost-left'>
                        <video autoPlay loop muted playsInline className="nosecnost-video">
                            <source src="/Videos/32.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                    <div className='nosecnost-right'>
                        <div className='nos-w'>
                            <p className='blog-header'>Nega in dobro počutje v poporodnem obdobju</p>
                            <p className='blog-paragraph'>Poporodno obdobje ali puerperij obsega prvih šest tednov po porodu in označuje čas pomembnih telesnih in psiholoških prilagoditev, ko se telo okreva od zahtev nosečnosti in poroda.</p>
                            <div className='underlined-button'>
                                <a href="/About">PREBERI VEČ</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LandingNosecnost
