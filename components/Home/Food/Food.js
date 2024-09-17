import React from 'react'

const Food = () => {
  return (
    <div className='plan-main'>
            <div className='firstm-wrapper'>

            <div className='plan-right mobile'>
                    <video autoPlay loop muted playsInline className="hero-video">
                        <source src="/Videos/30.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className='plan-left'>
                    <div className='firstm-content'>
                        <h2 className='firstm-header'>Zdrava prehrana in skrb za dobro počutje med nosečnostjo</h2>
                        <p className='firstm-paragraph'>Vaše telo med nosečnostjo doživlja številne spremembe, ki vplivajo na vašo prehrano, prebavo in celo na videz vaše kože in las. Uživanje uravnotežene prehrane, bogate s proteini, vlakninami in zadostna hidracija, so ključnega pomena za podporo tem spremembam. Pomembno je, da se izogibate določenim živilom, ki lahko povečajo tveganje za okužbe, in da prilagodite svoje prehranjevalne navade, da preprečite ali ublažite prebavne težave, kot sta zaprtje in zgaga.</p>
                        <button className='arrow-button'>Preberi več<span class="arrow"></span></button>
                    </div>
                </div>

                <div className='plan-right desktop'>
                    <video autoPlay loop muted playsInline className="hero-video">
                        <source src="/Videos/30.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
        </div>
  )
}

export default Food
