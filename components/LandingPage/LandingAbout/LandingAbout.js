import React from 'react'
import './LandingAbout.css'

const LandingAbout = () => {
    return (
        <div className='landing-about-main'>
            <div className='landing-about-wrapper'>
                <div id="onas-smear-section" className='thesection-div'></div>

                <div className='alignme smallwidth'>
                    <div className='matg midmadg'>O nas</div>
                    <h2 className='math'>Ponujamo obsežne informacije o različnih ginekoloških temah</h2>
                    <p className='matp'>Naše vsebine so strokovno pregledane in prilagojene vašim potrebam.</p>
                </div>
                <div className='about-blog-holder'>
                    <div className='blog-row'>
                        <div className='blog-row-left'>
                            <img alt='blogimg' className='blog-row-img' src='/Images/novica1.webp' />

                        </div>
                        <div className='blog-row-right'>
                            <div className='blog-content-wrapper'>
                                <div className='keywords-row'>
                                    <div className="matg keyword">Rak</div>
                                    <div className="matg keyword">Zunanje spolovilo</div>
                                    <div className="matg keyword">Histopatološki pregled</div>

                                </div>
                                <p className='blog-hint'>GINEKOLOŠKO ZDRAVJE</p>
                                <p className='blog-header'>Rak zunanjega spolovila</p>
                                <p className='blog-paragraph'>Imate na zunanjem spolovilu spremembo, morda ranico, ki se ne pozdravi? Smiselno je, da spremembo pokažete svojemu ginekologu...</p>
                                <div className='underlined-button martop'>
                                    <a href="/novice/rak-zunanjega-spolovila">PREBERI VEČ</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*<img alt='blogimg' className='blog-row-img' src='/Images/dc.png' />
                    <div className='about-paragraphs'>
                        <div className='blog-content-wrapper'>
                            <div className='keywords-row'>
                                <div className='matg keyword'>Spremembe po tednih</div>
                                <div className='matg keyword kmargin'>Prilagoditev telesa</div>

                            </div>
                            <p className='blog-hint'>DR. MARIJANA VIDMAR ŠIMIC</p>
                            <p className='blog-header'>O MENI</p>
                            <p className='blog-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className='underlined-button'>
                                <a href="/About">PREBERI VEČ</a>
                            </div>
                        </div>
                    </div>*/}
                </div>

                <div className='kdosmo-wrapper'>
                    <div id="kdo-smear-section" className='thesection-div'></div>

                    <div className='alignme leftalign'>
                        <div className='matg'>Kdo smo</div>
                        <h2 className='math'>Avtorji člankov so strokovnjaki, subspecialisti, ki skrbijo za posamezne teme o ginekološkem zdravju žensk.</h2>
                        <p className='matp thep'>Subspecialisti so posamezniki z globoko specializiranim znanjem in izkušnjam na določenem področju. Vloga subspecialista ginekološke stroke je zagotoviti strokovno in specializirano znanje ter rešitve  stroke v specifičnih področjih. Svoje znanje nenehno izpopolnjujejo, sledijo najnovejšim raziskavam in tehnologijam ter prispevajo k inovacijam ginekološkega področja. Skupaj tvorijo pomemben del strokovne skupnosti, ki si prizadeva za izboljšanje razumevanja, prakse in rezultatov posameznih področij.</p>
                    </div>


                    {/*<img alt='blogimg' className='blog-row-img' src='/Images/specialisti.webp' />*/}

                    <div className='faq-wrapper'>

                        <div className='faq'>
                            <div className='thefqwrapper'>
                                <h2 className='faq-h'>Splošna ginekologija</h2>
                                <p className='faq-p'>Osredotoča se na splošno zdravje ženskega reproduktivnega sistema, vključno z rutinskimi pregledi, brisi PAP in zdravljenjem pogostih stanj, kot so okužbe ali menstrualne motnje.</p>
                            </div>
                        </div>
                        
                        <div className='faq'>
                            <h2 className='faq-h'>Pediatrična in adolescentna ginekologija</h2>
                            <p className='faq-p'>Osredotoča se na ginekološko oskrbo otrok in najstnikov ter obravnava vprašanja, kot so razvojne anomalije, menstrualne motnje in svetovanje glede kontracepcije.</p>
                        </div>
                        <div className='faq'>
                            <h2 className='faq-h'>Reproduktivna endokrinologija in neplodnost</h2>
                            <p className='faq-p'>Osredotoča se na hormonsko delovanje v zvezi z reprodukcijo in neplodnostjo. Specialisti reproduktivne endokrinologije in neplodnosti zdravijo stanja, kot je sindrom policističnih jajčnikov (PCOS), endometrioza in pomagajo pri zdravljenju neplodnosti, tudi s pomočjo umetne oploditve.</p>
                        </div>
                        <div className='faq'>
                            <h2 className='faq-h'>Porodništvo</h2>
                            <p className='faq-p'>Ukvarja se z nosečnostjo, porodom in poporodnim obdobjem. Porodničarji nudijo prenatalno oskrbo, pomagajo pri porodu in obvladujejo zaplete, povezane z nosečnostjo.</p>
                        </div>
                        <div className='faq'>
                            <h2 className='faq-h'>Maternalna in fetalna medicina</h2>
                            <p className='faq-p'> Podspecialnost porodništva, ki se ukvarja z visoko tveganimi nosečnostmi in nudi oskrbo tako matere kot plodu.</p>
                        </div>
                        <div className='faq'>
                            <h2 className='faq-h'>Ginekološka onkologija</h2>
                            <p className='faq-p'>Specializirana za diagnozo in zdravljenje rakov ženskega reproduktivnega sistema, kot so rak jajčnikov, maternice, materničnega vratu in vulve.</p>
                        </div>
                        
                        <div className='faq'>
                            <h2 className='faq-h'>Uroginekologija</h2>
                            <p className='faq-p'>Znana tudi kot medicina ženske medenice in rekonstruktivne kirurgije. To področje se ukvarja z motnjami medeničnega dna, uhajanjem urina in spustom medeničnih organov.</p>
                        </div>
                        
                        
                       
                        <div className='faq'>
                            <h2 className='faq-h'>Menopavzalna in geriatrična ginekologija</h2>
                            <p className='faq-p'>Osredotoča se na edinstvene ginekološke potrebe menopavznih in postmenopavznih žensk, vključno s hormonsko nadomestno terapijo in obvladovanjem stanj, povezanih s staranjem.</p>
                        </div>

                        <div className='faq'>
                            <h2 className='faq-h'>Minimalno invazivna ginekološka kirurgija</h2>
                            <p className='faq-p'>Specializirana za izvajanje ginekoloških operacij z uporabo minimalno invazivnih tehnik, kot sta laparoskopija in histeroskopija, za zmanjšanje časa okrevanja in zapletov.</p>
                        </div>
                    </div>

                </div>

                <div className='kdosmo-wrapper width-wrapper'>
                    <div id="cilj-smear-section" className='thesection-div'></div>


                    <div className='rightalign2'>
                    <img alt='blogimg' className='fullimg' src='/Images/cl4.webp' />

                    </div>


                    <div className='alignme leftalign2'>
                        <div className='matg'>Cilji</div>
                        <h2 className='math'>Razumevanje ženskega zdravja</h2>
                        <p className='matp thep '>Naš cilj je zagotoviti strokovne vsebine, ki bodo v pomoč ženskam pri razumevanju njihovega telesa, reproduktivnega zdravja in splošnega dobro počutja.</p>
                    
                        <div className='infoe-row'>
                            <div className='infoe-cell'>
                                <img alt='blogimg' className='relume-icon' src='/Images/message-square-check.svg' />
                                <p className='smallheader'>Zanesljive informacije</p>
                                <p className='matp thep '>Želimo prispevati k izobraževanju žensk in povečati ozaveščenost o pomenu skrbi za njihovo reproduktivno zdravje.</p>

                            </div>

                            <div className='infoe-cell'>
                                <img alt='blogimg' className='relume-icon' src='/Images/message-square-error.svg' />
                                <p className='smallheader'>Odpravljanje tabujev</p>
                                <p className='matp thep '> Želimo ustvariti podporno in vključujoče okolje, kjer se ženske počutijo udobno, da poiščejo pomoč in nasvete glede svojega reproduktivnega zdravja.</p>

                            </div>
                        </div>
                    
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LandingAbout
