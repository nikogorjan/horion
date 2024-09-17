import React from 'react'

const Pregledi = () => {
  return (
    <div className='pregnancy-main plod-main'>
    <div className='pr-video-wrapper wider-video'>
        <video autoPlay loop muted playsInline className="hero-video ">
            <source src="/Videos/27.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <div className='pr-content-wrapper'>
        <h2 className='firstm-header centered marginpr'>Ključni pregledi in ultrazvočne preiskave med nosečnostjo</h2>
        <p className='firstm-paragraph centered'>Z rednimi pregledi in ultrazvočnimi preiskavami med nosečnostjo zagotavljamo varnost in zdravje tako nosečnice kot njenega otroka. Vsaka bodoča mati ima predvidenih deset sistematičnih pregledov in tri ultrazvočne preiskave, ki pomagajo spremljati razvoj ploda in pravočasno prepoznati morebitne zaplete.</p>
        <button className='arrow-button'>Preberi več<span class="arrow"></span></button>
    </div>
</div>
  )
}

export default Pregledi
