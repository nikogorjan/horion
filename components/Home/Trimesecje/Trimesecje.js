import React from 'react'
import './Trimesecje.css'

const Trimesecje = () => {
    return (
        <div className='trimesecje-main'>
            <div className='pr-video-wrapper wider-video'>
                <video autoPlay loop muted playsInline className="hero-video ">
                    <source src="/Videos/p4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className='pr-content-wrapper'>
                <h2 className='firstm-header centered marginpr marginbot'>Potovanje skozi nosečnost: Od začetka do rojstva</h2>

            </div>

            <div className='cells-row'>

                <div className='cell'>
                    <div className='cells-wrapper'>
                        <div className='cell-content-wrapper'>
                            <h2 className='firstm-header'>Prvo trimesečje: Začetek čudeža</h2>
                            <p className='firstm-paragraph'>V prvem trimesečju nosečnosti se pojavijo prvi znaki in simptomi, ki napovedujejo začetek novega življenjskega obdobja. Med temi so:</p>
                            <div className='bullets-holder'>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>

                                    <div className=' firstm-paragraph bullet-paragraph'>Izostanek menstruacije kot prvi signal nosečnosti.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Občutljivost in otekanje prsi, ki jih povzročajo hormonske spremembe.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Jutranja slabost, ki lahko traja cel dan, in nasveti za lajšanje težav.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Utrujenost in zaspanost, ki sta posledici povečane ravni progesterona.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Zaprtost in napihnjenost, za katere je pomembna pravilna prehrana in hidracija.</div>
                                </div>
                            </div>
                            <button className='arrow-button'>Preberi več<span class="arrow"></span></button>

                        </div>

                    </div>
                </div>

                <div className='cell'>
                    <div className='cells-wrapper'>
                        <div className='cell-content-wrapper'>

                            <h2 className='firstm-header'>Drugo trimesečje: Čas počutja</h2>
                            <p className='firstm-paragraph'>Drugo trimesečje prinaša obdobje boljšega počutja, ko se umirijo začetni simptomi:</p>
                            <div className='bullets-holder'>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>

                                    <div className=' firstm-paragraph bullet-paragraph'>Rast trebuščka in prsi, zato je pomembna prilagoditev oblačil.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Nižji krvni tlak lahko povzroča omotico, zato je pomembno počasno vstajanje.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Braxton-Hicksovi popadki kot blagi in neredni krči maternice.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Zamašen nos in spremembe na koži, vključno s pigmentacijo.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Krči v nogah so pogosti, pomaga pa primerna telesna dejavnost in hidracija.</div>
                                </div>
                            </div>
                            <button className='arrow-button'>Preberi več<span class="arrow"></span></button>
                        </div>
                    </div>
                </div>

                <div className='cell'>
                    <div className='cells-wrapper'>
                        <div className='cell-content-wrapper'>

                            <h2 className='firstm-header'>Tretje trimesečje: Priprava na porod</h2>
                            <p className='firstm-paragraph'>V zadnjem trimesečju se telesna teža in velikost trebuščka opazno povečata, kar prinaša nove izzive:</p>
                            <div className='bullets-holder'>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>

                                    <div className=' firstm-paragraph bullet-paragraph'>Braxton-Hicksovi popadki postanejo bolj pogosti in lahko napovedujejo bližajoči se porod.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Zgaga in hemoroidi so pogosti težavi zaradi pritiska rastoče maternice.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Bolečina v križu zaradi spremenjenega težišča in sproščanja vezi.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Žilne spremembe in strije kot estetske spremembe na koži.</div>
                                </div>
                                <div className='bullet-row'>
                                    <div className='bullet-wrapper'><div className='bullet'></div></div>
                                    <div className=' firstm-paragraph bullet-paragraph'>Pogosto uriniranje in možnost uhajanja urina, kar je posledica pritiska na mehur.</div>
                                </div>
                            </div>
                            <button className='arrow-button'>Preberi več<span class="arrow"></span></button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Trimesecje
