import React from 'react'

const Popo = () => {
  return (
    <div className='pregnancy-main plod-main'>
    <div className='pr-video-wrapper wider-video'>
        <video autoPlay loop muted playsInline className="hero-video ">
            <source src="/Videos/32.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <div className='pr-content-wrapper'>
        <h2 className='firstm-header centered marginpr'>Nega in dobro počutje v poporodnem obdobju</h2>
        <p className='firstm-paragraph centered'>Poporodno obdobje ali puerperij obsega prvih šest tednov po porodu in označuje čas pomembnih telesnih in psiholoških prilagoditev, ko se telo okreva od zahtev nosečnosti in poroda. Ta faza vključuje obnovo telesa v stanje pred nosečnostjo, vključno z zdravljenjem tkiv, nadaljevanjem normalnih funkcij jajčnikov in vzpostavitvijo dojenja.</p>
        <button className='arrow-button'>Preberi več<span class="arrow"></span></button>
    </div>
</div>
  )
}

export default Popo
