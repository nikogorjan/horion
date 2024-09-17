'use client'

import React, { useState, useEffect, useContext } from 'react'
import './Navbar.css'
import logo from '../../public/Images/HORION_03.png'
import Link from 'next/link'; // Import Link from next/link

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isContactVisible, setIsContactVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const sections = [
        { title: 'Prva menstruacija', link: '/dokumentacija/prva-menstruacija' },
        { title: 'Prva menstruacija – menarha', link: '/dokumentacija/prva-menstruacija#prv-smear-section' },
        { title: 'Kako oceniti, koliko so razvite prsi pri dekletih?', link: '/dokumentacija/prva-menstruacija#raz-smear-section' },
        { title: 'Cepljenje proti HPV v osnovni šoli', link: '/dokumentacija/prva-menstruacija#cep-smear-section' },
        { title: 'Prvi obisk pri ginekologu', link: '/dokumentacija/prvi-obisk' },
        { title: 'Kaj pomeni PAP bris?', link: '/dokumentacija/prvi-obisk#pap-smear-section' },
        { title: 'Kaj povzroča HPV?', link: '/dokumentacija/prvi-obisk#hpv-smear-section' },
        { title: 'Nepravilne krvavitve iz maternice', link: '/dokumentacija/prvi-obisk#krvavitve-smear-section' },
        { title: 'Kontracepcija', link: '/dokumentacija/prvi-obisk#kontracepcija-smear-section' },
        { title: 'Zanositev / neplodnost', link: '/dokumentacija/zanositev' },
        { title: 'Kdaj h ginekologu, če ne zanosim?', link: '/dokumentacija/zanositev#kdaj-smear-section' },
        { title: 'Katere dodatke je smiselno jemati, ko načrtujem nosečnost?', link: '/dokumentacija/zanositev#dod-smear-section' },
        { title: 'Nosečnost', link: '/dokumentacija/nosecnost' },
        { title: 'Spremembe pri nosečnici po tednih', link: '/dokumentacija/nosecnost#spremembe-smear-section' },
        { title: 'Razvoj ploda po tednih', link: '/dokumentacija/nosecnost#razvoj-smear-section' },
        { title: 'Nosečnost po trimesečjih', link: '/dokumentacija/nosecnost#nos-smear-section' },
        { title: 'Prilagoditev materinega telesa na nosečnost', link: '/dokumentacija/nosecnost#pril-smear-section' },
        { title: 'Krvavitev iz nožnice med nosečnostjo', link: '/dokumentacija/nosecnost#krv-smear-section' },
        { title: 'Vaginalni izcedek v nosečnosti', link: '/dokumentacija/nosecnost#vag-smear-section' },
        { title: 'Okužba s streptokokom skupine B', link: '/dokumentacija/nosecnost#oku-smear-section' },
        { title: 'Nosečniška sladkorna bolezen', link: '/dokumentacija/nosecnost#nose-smear-section' },
        { title: 'Cepljenje nosečnic proti oslovskemu kašlju', link: '/dokumentacija/nosecnost#cep-smear-section' },
        { title: 'Molarna nosečnost', link: '/dokumentacija/nosecnost#molar-smear-section' },
        { title: 'Holestaza v nosečnosti', link: '/dokumentacija/nosecnost#holes-smear-section' },
        { title: 'Otekle noge', link: '/dokumentacija/nosecnost#otek-smear-section' },
        { title: 'Kako se izračuna termin poroda', link: '/dokumentacija/nosecnost#kako-smear-section' },
        { title: 'Dvojčki', link: '/dokumentacija/nosecnost#dv-smear-section' },
        { title: 'Trojčki', link: '/dokumentacija/nosecnost#tr-smear-section' },
        { title: 'Telovadba v nosečnosti', link: '/dokumentacija/nosecnost#tel-smear-section' },
        { title: 'Bolečina v križu', link: '/dokumentacija/nosecnost#bolec-smear-section' },
        { title: 'Vročina in nosečnost', link: '/dokumentacija/nosecnost#vroc-smear-section' },
        { title: 'Prehrana v nosečnosti', link: '/dokumentacija/nosecnost#preh-smear-section' },
        { title: 'Prebava v nosečnosti', link: '/dokumentacija/nosecnost#preb-smear-section' },
        { title: 'Prehrambeni dodatki v nosečnosti', link: '/dokumentacija/nosecnost#dod-smear-section' },
        { title: 'Priporočen prirast telesne teže v nosečnosti', link: '/dokumentacija/nosecnost#prip-smear-section' },
        { title: 'Lasje v nosečnosti in po porodu', link: '/dokumentacija/nosecnost#las-smear-section' },
        { title: 'Strije', link: '/dokumentacija/nosecnost#strije-smear-section' },
        { title: 'Pregledi v nosečnosti', link: '/dokumentacija/nosecnost#preg-smear-section' },
        { title: 'Ultrazvoki v nosečnosti', link: '/dokumentacija/nosecnost#ulr-smear-section' },
        { title: 'Kaj je nuhalna svetlina', link: '/dokumentacija/nosecnost#nuh-smear-section' },
        { title: 'Rh-D negativne nosečnice', link: '/dokumentacija/nosecnost#rhd-smear-section' },
        { title: 'Poporodno obdobje', link: '/dokumentacija/poporodno-obdobje' },
        { title: 'Čišča ali lohija', link: '/dokumentacija/poporodno-obdobje#cis-smear-section' },
        { title: 'Krčenje maternice po porodu', link: '/dokumentacija/poporodno-obdobje#krc-smear-section' },
        { title: 'Dojenje', link: '/dokumentacija/poporodno-obdobje#doj-smear-section' },
        { title: 'Okrevanje po vaginalnem porodu', link: '/dokumentacija/poporodno-obdobje#okr-smear-section' },
        { title: 'Okrevanje po carskem rezu', link: '/dokumentacija/poporodno-obdobje#car-smear-section' },
        { title: 'Spolni odnosi po porodu', link: '/dokumentacija/poporodno-obdobje#spol-smear-section' },
        { title: 'Menstruacija po porodu', link: '/dokumentacija/poporodno-obdobje#men-smear-section' },
        { title: 'Diastaza', link: '/dokumentacija/poporodno-obdobje#dia-smear-section' },
        { title: 'Telovadba po porodu', link: '/dokumentacija/poporodno-obdobje#tel-smear-section' },
        { title: 'Menopavza', link: '/dokumentacija/menopavza' },
        { title: 'Kaj je perimenopavza?', link: '/dokumentacija/menopavza#per-smear-section' },
        { title: 'Nepravilne krvavitve v menopavzi je potrebno opredeliti', link: '/dokumentacija/menopavza#nep-smear-section' },
        { title: 'Zakaj je v menopavzi nožnica suha?', link: '/dokumentacija/menopavza#suh-smear-section' },
        { title: 'V menopavzi se pojavlja nespečnost', link: '/dokumentacija/menopavza#nes-smear-section' },
        { title: 'Kaj so vročinski polivki?', link: '/dokumentacija/menopavza#vrc-smear-section' },
        { title: 'Kakšni so dolgoročni vplivi menopavze?', link: '/dokumentacija/menopavza#vpl-smear-section' },
        { title: 'Kaj je nadomestna hormonska terapija?', link: '/dokumentacija/menopavza#hor-smear-section' },
        { title: 'Rak zunanjega spolovila', link: '/novice/rak-zunanjega-spolovila' },
        { title: 'Ali lahko debelost vpliva na zanositev?', link: '/novice/vpliv-debelosti-na-nosecnost' },
        { title: 'Opažate povečano poraščenost po telesu?', link: '/novice/povecana-porascenost' },
        { title: 'Ste že slišali za adenomiozo? Tudi ta lahko povzroča neplodnost.', link: '/dokumentacija/zanositev#adem-smear-section' },
        { title: 'ZDRS (PROLAPS) MEDENIČNIH ORGANOV', link: '/dokumentacija/ginekolosko-zdravje#zdrs-smear-section' },
        { title: 'Urinska inkontinenca', link: '/dokumentacija/ginekolosko-zdravje#uri-smear-section' },
        { title: 'Spustitev maternice', link: '/dokumentacija/ginekolosko-zdravje#zdrs-smear-section' },
        { title: 'Nasveti za pripravo na prvi obisk pri ginekologu', link: '/novice/priprava-na-prvi-obisk-ginekologa' },
        { title: 'Uhajanje urina v menopavzi: vzroki, rešitve in podpora', link: '/novice/uhajanje-urina' },


    ];

    const filteredSections = sections.filter(section =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleContact = () => {
        setIsContactVisible(!isContactVisible);
    };

    const toggleContactMobi = () => {
        setIsMenuOpen(false)
        setIsContactVisible(!isContactVisible);
    };

    const toggleMenu = () => {
        if (isMenuOpen === false) {
            setIsMenuOpen(!isMenuOpen);
        }
        else {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleNavigation = (target) => {
        // Toggle the menu first
        toggleMenu();

        window.location.href = `${target}`;
    };

    const navigateToPage = () => {
        window.location.href = '/dokumentacija/prva-menstruacija';
    };




    return (
        <>
            <div className='navbar-main'>



                <div className='navbar-row '>
                    <div className='empty-wrapper'>
                        <div className='hidden-logo-wrapper'>
                            <Link href='/'><img alt='logo' className='logo-img' src='/Images/HORION_02.png' /></Link>
                        </div>

                        <div className='navigations-horion-wrapper'>
                            <Link href='/dokumentacija/prva-menstruacija'><p className='horion-navigation'>Učilnica</p></Link>

                            <Link href='/novice'><p className='horion-navigation'>
                                Novice
                            </p></Link>

                            <Link href='/#kdo-smear-section'><p className='horion-navigation'>
                                O nas
                            </p></Link>

                            <Link href='/#faq-smear-section'><p className='horion-navigation'>
                                Pogosta vprašanja
                            </p></Link>

                            <Link href='/'><p className='horion-navigation'>
                                Domov
                            </p></Link>
                        </div>


                    </div>

                    <div className='icons-wrapper'>

                        <div className='search-bar-wrapper'>
                            <input
                                type="text"
                                placeholder="Vnesi iskalni niz"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="search-input"
                            />

                            {searchQuery && (
                                <ul className='section-list'>
                                    {filteredSections.map((section, index) => (
                                        <li key={index}>
                                            <Link href={section.link}>
                                                {section.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>

                        {/* Render the list only when there is a search query */}


                        {/* <button className='horion-contact-button'>Kontakt</button>*/}
                        <button className='horion-uci-button' onClick={navigateToPage}>Uči se</button>

                    </div>

                    <div className='menu-icon' onClick={toggleMenu}>
                        <div className={`menu-bar ${isMenuOpen ? 'bar1' : ''}`}></div>
                        <div className={`menu-bar ${isMenuOpen ? 'bar2' : ''}`}></div>
                    </div>

                </div>



                <div className={`hidden-menu ${isMenuOpen ? 'show-menu' : ''}`}>

                    <div className='navigationsopen-wraper'>

                        <Link href='/dokumentacija/prva-menstruacija'><div className='nav-open-wrapper'>
                            <p className='navigationopen' >Učilnica</p>
                            <div className='arrow-right'></div>
                        </div></Link>
                        <Link href='/novice'><div className='nav-open-wrapper'>
                            <p className='navigationopen'>Novice</p>
                            <div className='arrow-right'></div>
                        </div></Link>
                        <div className='nav-open-wrapper' onClick={() => handleNavigation('/#kdo-smear-section')}>
                            <div ><p className='navigationopen'>O nas</p></div>
                            <div className='arrow-right'></div>
                        </div>

                        <div className='nav-open-wrapper' onClick={() => handleNavigation('/#faq-smear-section')}>
                            <div ><p className='navigationopen'>Pogosta vprašanja</p></div>
                            <div className='arrow-right'></div>
                        </div>

                        <Link href='/'> <div className='nav-open-wrapper'>
                            <p className='navigationopen'>Domov</p>
                            <div className='arrow-right'></div>
                        </div></Link>

                        <div className='iskalnik-wrapper'>
                            <p className='horion-iskalnik'><span className='greenhorion'>HORION</span> iskalnik</p>
                            <img alt='blogimg' className='iskalnik-icon' src='/Icons/search.png' />

                        </div>

                        <div className='search-bar-wrapper'>
                            <input
                                type="text"
                                placeholder="Vnesi iskalni niz"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="search-input"
                            />

                            {searchQuery && (
                                <ul className='section-list'>
                                    {filteredSections.map((section, index) => (
                                        <li key={index}>
                                            <Link href={section.link}>
                                                {section.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>

                    </div>
                </div>








            </div>

        </>
    )
}

export default Navbar
