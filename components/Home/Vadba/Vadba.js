import React from 'react'

const Vadba = () => {
  return (
    <div className='firstm-main'>
      <div className='firstm-wrapper'>

        <div className='firstm-left'>
        <video autoPlay loop muted playsInline className="hero-video">
            <source src="/Videos/p1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='firstm-right'>
            <div className='firstm-content'>
                <h2 className='firstm-header'>Sprejemanje telesne vadbe in obvladovanje nelagodja</h2>
                <p className='firstm-paragraph'>Ohranjanje telesne dejavnosti med nosečnostjo ne spodbuja le dobrega počutja, ampak tudi pripravlja telo na porod. Nujno je prilagoditi vadbeno rutino spremembam v nosečnosti, se izogibati dejavnostim z visokim tveganjem ter se osredotočati na vadbe z zmerno intenzivnostjo. Redna telesna vadba lahko zmanjša tveganje za gestacijski diabetes, izboljša okrevanje po porodu in zmanjša možnost poporodne depresije. Vendar je ključnega pomena prekinitev telesne dejavnosti ob kakršnem koli nelagodju ali zaskrbljujočih simptomih.</p>
                <button className='arrow-button'>Preberi več<span class="arrow"></span></button>
            </div>
        </div>

      </div>




    </div>
  )
}

export default Vadba
