import React from 'react'
import './FirstM.css'

const FirstM = () => {
  return (
    <div className='firstm-main'>
      <div className='firstm-wrapper'>

        <div className='firstm-left'>
        <video autoPlay loop muted playsInline className="hero-video">
            <source src="/Videos/p3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='firstm-right'>
            <div className='firstm-content'>
                <h2 className='firstm-header'>Prva menstruacija - začetek novega poglavja</h2>
                <p className='firstm-paragraph'>Prva menstruacija ali menarha je pomemben mejnik v življenju vsake deklice, ki simbolizira prehod v obdobje plodnosti. Ta naravni pojav predstavlja začetek menstrualnega cikla, ki je del reproduktivnega sistema ženske. V povprečju se menarha pojavi med 12. in 13. letom starosti, a je čas njenega nastopa zelo individualen. Prva menstruacija označuje začetek nove faze v življenju, ki prinaša številne spremembe, tako telesne kot čustvene. V tem obdobju je pomembno, da imajo dekleta podporo in dostop do zanesljivih informacij, ki jim bodo pomagale razumeti in sprejeti te spremembe.</p>
                <button className='arrow-button'>Preberi več<span class="arrow"></span></button>
            </div>
        </div>

      </div>




    </div>
  )
}

export default FirstM
