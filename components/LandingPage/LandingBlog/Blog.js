'use client'

import React from 'react'
import './Blog.css'
import './Hero.css'


const Blog = () => {

    const handleNavigation = (target) => {
        // Toggle the menu first

        window.location.href = `${target}`;
    };

  return (
    <div className='blog-main'>
        <div className='blog-wrapperr'>
        <div className='blog-online'>
                <div className='blog-wrapper'>
                    <div className='blog-headers-wrapper'>
                    <div className='header-wrapped st-et'>
                        <p className='text-regular-semibold   nomr matg '>Novice</p>
                    </div>
                        <div className='blog-header-wrapper'>
                            <h3 className='heading-desktop-h3 black ' >Preberi naše novice in zanimive nasvete.</h3>
                        </div>

                        <div className='blog-header-wrapper'>
                            <h3 className='text-medium-normal  black'>Odkrij nasvete, trike in strokovna priporočila.</h3>
                        </div>
                    </div>

                    <div className='programi-row'>
                        <div className='program-cell opacity-cell' >
                            <div className='program-img-wrapper'>
                                <img src="/Images/novica1.webp" className='program-img' alt='beginner' onClick={() => handleNavigation('/novice/rak-zunanjega-spolovila')}/>
                            </div>
                            <div className='ontopmrgin'></div>
                            <div className='highlighted-row'>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins matg'>Rak</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins matg'>Zunanje spolovilo</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins matg'>Histopatološki pregled</p>
                                </div>
                            </div>
                            <h4 className='program-header black'>Rak zunanjega spolovila</h4>
                            <h3 className='text-medium-normal black' >Imate na zunanjem spolovilu spremembo, morda ranico, ki se ne pozdravi? Smiselno je, da spremembo pokažete svojemu ginekologu...</h3>
                            
                        </div>

                        <div className='program-cell opacity-cell'>
                            <div className='program-img-wrapper'>
                                <img src="/Images/novica2.webp" className='program-img' alt='intermediate' onClick={() => handleNavigation('/novice/vpliv-debelosti-na-nosecnost')}/>
                            </div>
                            <div className='ontopmrgin'></div>
                            <div className='highlighted-row'>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins matg'>Estrogen</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins matg'>Maščobne celice</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins matg'>Hormonsko neravnovesje</p>
                                </div>
                            </div>
                            <h4 className='program-header black'>Ali lahko debelost vpliva na zanositev?</h4>
                            <h3 className='text-medium-normal black' >Ženski hormon, kot je estrogen, nastaja pretežno v jajčniku. Dodatno pa ga proizvajajo maščobne celice...</h3>
                            
                        </div>

                        <div className='program-cell opacity-cell' >
                            <div className='program-img-wrapper'>
                                <img src="/Images/novica3.webp" className='program-img' alt='advanced' onClick={() => handleNavigation('/novice/povecana-porascenost')}/>
                            </div>

                            <div className='ontopmrgin'></div>
                            <div className='highlighted-row'>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins matg'>Testosteron</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins matg'>Hirzutizm</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins matg'>PCOS</p>
                                </div>
                                
                            </div>
                            <h4 className='program-header black'>Opažate povečano poraščenost po telesu?</h4>
                            <h3 className='text-medium-normal black' >Kadar pri ženskah opažamo povečano poraščenost telesa po moškem tipu, govorimo o hirzutizmu...</h3>
                            
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Blog
