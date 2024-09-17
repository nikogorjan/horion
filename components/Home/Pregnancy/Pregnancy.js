import React from 'react'
import './Pregnancy.css'

const Pregnancy = () => {
    return (
        <div className='pregnancy-main'>
            <div className='pr-video-wrapper'>
                <video autoPlay loop muted playsInline className="hero-video">
                    <source src="/Videos/25.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className='pr-content-wrapper'>
                <h2 className='firstm-header centered marginpr'>Nosečnost je obdobje od oploditve jajčne celice do rojstva otroka. Nosečnost traja 40 lunarnih tednov oziroma 280 dni. Za natančnejše spremljanje nosečnosti se ta opisuje po tednih.</h2>
                <p className='firstm-paragraph centered'>Nosečnost računamo po prvem dnevu zadnje menstruacije.</p>
                <button className='arrow-button'>Nosečnost po tednih<span class="arrow"></span></button>
            </div>
        </div>
    )
}

export default Pregnancy
