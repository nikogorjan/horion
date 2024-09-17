import React from 'react'
import './LandingZacetek.css'

const LandingZacetek = () => {
    return (
        <>
            <div className='landing-zacetek-main zacetek-desktop'>
                <div className='zacetek-left'>
                    <div className='bubble1'>
                        <div className='bubble-content-wrapper'>
                            <h3 className='bubble-header'>Prva menstruacija - začetek novega poglavja</h3>
                            <p className='bubble-paragraph'>Prva menstruacija ali menarha je pomemben mejnik v življenju vsake deklice, ki simbolizira prehod v obdobje plodnosti. Ta naravni pojav predstavlja začetek menstrualnega cikla, ki je del reproduktivnega sistema ženske.</p>
                            <div className='underlined-button'>
                                <a href="/About">PREBERI VEČ</a>
                            </div>
                        </div>
                    </div>
                    <div className='bubble2'>
                        <div className='bubble-content-wrapper'>
                            <h3 className='bubble-header'>Prvi obisk pri ginekologu</h3>
                            <p className='bubble-paragraph'>Vaš prvi obisk pri ginekologu je pomemben korak k ohranjanju vašega zdravja in dobrega počutja.</p>
                            <div className='underlined-button'>
                                <a href="/About">PREBERI VEČ</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='zacetek-right'>
                    <video autoPlay loop muted playsInline className="hero-video-absolute">
                        <source src="/Videos/p3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className='landing-zacetek-main zacetek-mobile'>
                <div className='zacetek-left'>
                    <video autoPlay loop muted playsInline className="hero-video-absolute">
                        <source src="/Videos/34.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>


                </div>
                <div className='zacetek-right'>
                    <div className='bubble1'>
                        <div className='bubble-content-wrapper'>
                            <h3 className='bubble-header'>Prva menstruacija - začetek novega poglavja</h3>
                            <p className='bubble-paragraph'>Prva menstruacija ali menarha je pomemben mejnik v življenju vsake deklice, ki simbolizira prehod v obdobje plodnosti. Ta naravni pojav predstavlja začetek menstrualnega cikla, ki je del reproduktivnega sistema ženske.</p>
                            <div className='underlined-button'>
                                <a href="/About">PREBERI VEČ</a>
                            </div>
                        </div>
                    </div>
                    <div className='bubble2'>
                        <div className='bubble-content-wrapper'>
                            <h3 className='bubble-header'>Prvi obisk pri ginekologu</h3>
                            <p className='bubble-paragraph'>Vaš prvi obisk pri ginekologu je pomemben korak k ohranjanju vašega zdravja in dobrega počutja.</p>
                            <div className='underlined-button'>
                                <a href="/About">PREBERI VEČ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingZacetek
