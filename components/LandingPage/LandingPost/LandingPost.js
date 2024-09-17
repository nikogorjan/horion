import React from 'react'
import './LandingPost.css'

const LandingPost = () => {
  return (
    <div className='post-main'>
        <div className='post-wrapper'>

        <div className='kdosmo-wrapper width-wrapper'>
                    <div id="cilj-smear-section" className='thesection-div'></div>


                    


                    <div className='alignme leftalign2 norme'>
                        <div className='matg'>Materinstvo</div>
                        <h2 className='math'>Radosti in izivi materinstva</h2>
                        <p className='matp thep '>Po rojstvu otroka se začenja novo in vznemirljivo obdobje v življenju vsake mamice. Materinstvo prinaša številne radosti, od prvega nasmeha vašega otroka do njegovih prvih korakov, a hkrati prinaša tudi izzive, kot so neprespane noči, dojenje in skrbi glede otrokovega zdravja. Pomembno je, da si vzamete čas zase, poiščete podporo pri družini in prijateljih ter se obrnete na strokovnjake, kadar potrebujete nasvet ali pomoč. Vaše dobro počutje je ključno za srečno in zdravo družinsko življenje.</p>
                    
                        <div className='infoe-row'>
                            <div className='infoe-cell'>
                                <img alt='blogimg' className='relume-icon' src='/Images/donate-heart.svg' />
                                <p className='smallheader'>Podpora in pomoč</p>
                                <p className='matp thep '>Družina, prijatelji in strokovnjaki so tu, da vam pomagajo skozi izzive materinstva. Skupine za podporo materam so lahko odličen način za izmenjavo izkušenj in nasvetov.</p>

                            </div>

                            <div className='infoe-cell'>
                                <img alt='blogimg' className='relume-icon' src='/Images/health.svg' />
                                <p className='smallheader'>Skrb za svoje zdravje</p>
                                <p className='matp thep '> Skrb za svoje telesno in duševno zdravje je ključnega pomena. Vzemite si čas za počitek, uravnoteženo prehrano in redno telesno aktivnost. Če se počutite preobremenjeni ali se spopadate s poporodno depresijo, se posvetujte z zdravnikom ali terapevtom.</p>

                            </div>
                        </div>
                    
                    </div>

                    <div className='rightalign2 mrgon'>
                    <img alt='blogimg' className='fullimg' src='/Images/doc7.webp' />

                    </div>

                </div>
        </div>
    </div>
  )
}

export default LandingPost
