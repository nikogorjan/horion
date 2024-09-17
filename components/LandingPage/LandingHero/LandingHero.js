
'use client'

import { useEffect, useState } from 'react';
import './LandingHero.css'
import Link from 'next/link'; // Import Link from next/link

const LandingHero = () => {
    const [navigateTo, setNavigateTo] = useState('');
    
    const handleNavigation = (path) => {
        window.location.href = path;

      };
    return (
        <>
            <div className='landing-hero-main desktop-main'>
                <div className='landing-wrapper'>
                    <div className='landing-left'>
                        <div className='blob-wrapper'>
                            <div className='blob'>
                                <img alt='hero' className='hero-img' src='/Images/hero-img.webp' />
                            </div>
                        </div>
                    </div>
                    <div className='landing-right'>
                        <div className='right-content-wrapper'>
                            <div className='content-holder'>
                                <h2 className='hero-header2'>Dobrodošle na naši spletni strani</h2>
                                <h1 className='hero-header1'>Posvečamo se vašemu zdravju in dobremu počutju skozi vse faze vašega <span className='greenspan'>ginekološkega</span> življenja</h1>
                                <p className='hero-paragraph2'>&quot;Razumemo, da je skrb za žensko zdravje pomembno in občasno lahko izziv, zato smo tu, da vam pomagamo navigirati skozi vsa obdobja in vam nudimo informacije, podporo ter strokovne nasvete&quot;</p>

                                <div className='icons-holder'>
                                    <div className='icon-row'>

                                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/prva-menstruacija')}>
                                            <div className='cell-wrapper' >
                                                <img alt='menstruacija' className='hero-icon' src='/Icons/01.svg' />
                                                <p className='icon-header'>Prva menstruacija</p>
                                            </div>

                                        </div>
                                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/prvi-obisk')}>
                                            <div className='cell-wrapper'>
                                                <img alt='menstruacija' className='hero-icon' src='/Icons/02.svg' />
                                                <p className='icon-header'>Prvi obisk ginekologa</p>

                                            </div>
                                        </div>
                                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/zanositev')}>
                                            <div className='cell-wrapper'>

                                                <img alt='menstruacija' className='hero-icon' src='/Icons/03.svg' />
                                                <p className='icon-header'>Zanositev</p>

                                            </div>
                                        </div>
                                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/nosecnost')}>
                                            <div className='cell-wrapper'>
                                                <img alt='menstruacija' className='hero-icon' src='/Icons/04.svg' />
                                                <p className='icon-header'>Nosečnost</p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='icon-row'>
                                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/nosecnost#preg-smear-section')}>
                                            <div className='cell-wrapper'>
                                                <img alt='menstruacija' className='hero-icon' src='/Icons/08.svg' />
                                                <p className='icon-header'>Pregledi med nosečnostjo</p>

                                            </div>

                                        </div>
                                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/poporodno-obdobje')}>
                                            <div className='cell-wrapper'>
                                                <img alt='menstruacija' className='hero-icon' src='/Icons/05.svg' />
                                                <p className='icon-header'>Poporodno obdobje</p>

                                            </div>
                                        </div>
                                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/menopavza')}>
                                            <div className='cell-wrapper'>
                                                <img alt='menstruacija' className='hero-icon' src='/Icons/06.svg' />
                                                <p className='icon-header'>Menopavza</p>

                                            </div>
                                        </div>
                                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/ginekolosko-zdravje')}>
                                            <div className='cell-wrapper'>
                                                <img alt='menstruacija' className='hero-icon' src='/Icons/07.svg' />
                                                <p className='icon-header'>Ginekološko zdravje</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='mobile-main'>
                <div className='mobile-main-wrapper'>
                    <div className='main-content-holder'>
                        <h2 className='hero-header2'>Dobrodošle na naši spletni strani</h2>
                        <h1 className='hero-header1'>Posvečamo se vašemu zdravju in dobremu počutju skozi vse faze vašega <span className='greenspan'>ginekološkega</span> življenja</h1>
                        <p className='hero-paragraph2'>&quot;Razumemo, da je skrb za žensko zdravje pomembno in občasno lahko izziv, zato smo tu, da vam pomagamo navigirati skozi vsa obdobja in vam nudimo informacije, podporo ter strokovne nasvete&quot;</p>

                    </div>

                </div>
                <div className='blob-holder'>
                    <div className='blob'>
                        <img alt='hero' className='hero-img' src='/Images/hero-img.webp' />
                    </div>
                </div>
                <div className='mobile-main-wrapper icon-last-wrappert'>

                    <div className='icon-row'>
                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/prva-menstruacija')}>
                            <div className='cell-wrapper'>
                                <img alt='menstruacija' className='hero-icon' src='/Icons/01.svg' />
                                <p className='icon-header'>Prva menstruacija</p>
                            </div>

                        </div>
                        <div className='icon-cell'  onClick={() => handleNavigation('/dokumentacija/prvi-obisk')}>
                            <div className='cell-wrapper'>
                                <img alt='menstruacija' className='hero-icon' src='/Icons/02.svg' />
                                <p className='icon-header'>Prvi obisk ginekologa</p>
                            </div>

                        </div>
                    </div>

                    <div className='icon-row'>
                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/zanositev')}>
                            <div className='cell-wrapper'>
                                <img alt='menstruacija' className='hero-icon' src='/Icons/03.svg' />
                                <p className='icon-header'>Zanositev</p>
                            </div>

                        </div>
                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/nosecnost')}>
                            <div className='cell-wrapper'>
                                <img alt='menstruacija' className='hero-icon' src='/Icons/04.svg' />
                                <p className='icon-header'>Nosečnost</p>
                            </div>

                        </div>
                    </div>

                    <div className='icon-row'>
                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/nosecnost#preg-smear-section')}>
                            <div className='cell-wrapper'>
                                <img alt='menstruacija' className='hero-icon' src='/Icons/08.svg' />
                                <p className='icon-header'>Pregledi med nosečnostjo</p>
                            </div>

                        </div>
                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/poporodno-obdobje')}>
                            <div className='cell-wrapper'>
                                <img alt='menstruacija' className='hero-icon' src='/Icons/05.svg' />
                                <p className='icon-header'>Poporodno obdobje</p>
                            </div>

                        </div>
                    </div>

                    <div className='icon-row'>
                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/menopavza')}>
                            <div className='cell-wrapper'>
                                <img alt='menstruacija' className='hero-icon' src='/Icons/06.svg' />
                                <p className='icon-header'>Menopavza</p>
                            </div>

                        </div>
                        <div className='icon-cell' onClick={() => handleNavigation('/dokumentacija/ginekolosko-zdravje')}>
                            <div className='cell-wrapper'>
                                <img alt='menstruacija' className='hero-icon' src='/Icons/07.svg' />
                                <p className='icon-header'>Ginekološko zdravje</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingHero
