'use client'


import React, { useState } from 'react';
import './LNav.css'
import Link from 'next/link'; // Import Link from next/link

const LNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(true);
  const [isVisible7, setIsVisible7] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };

  const toggleVisibility4 = () => {
    setIsVisible4(!isVisible4);
  };

  const toggleVisibility5 = () => {
    setIsVisible5(!isVisible5);
  };

  const toggleVisibility6 = () => {
    setIsVisible6(!isVisible6);
  };

  const toggleVisibility7 = () => {
    setIsVisible7(!isVisible7);
  };


  const handleScrollToSection = (sectionId) => {
    // Prevent the default anchor link behavior
    event.preventDefault();

    // Use the history API to change the URL without navigating
    window.history.pushState({}, '', `/dokumentacija/prva-menstruacija#${sectionId}`);

    // Scroll to the section with the specified ID
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust for navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navigateAndScroll = (e, href) => {
    e.preventDefault();
    window.location.href = href; // This causes the browser to navigate to the new page and keep the hash
  };


  return (
    <div className='Lnav-main'>
      <div className='lnavigations-wrapper'>

        <div className='lnav-extended'>

          <div className='lnav-row' >
            <Link href='/dokumentacija/prva-menstruacija'><p className='lnav-nav'>Prva menstruacija</p></Link>
            <div className={`lnav-arrow ${isVisible ? 'tilt' : ''}`} onClick={toggleVisibility}></div>
          </div>


          <div className={`lnav-hidden ${isVisible ? 'visible' : ''}`} >

            

            <Link href="/dokumentacija/prva-menstruacija#prv-smear-section">
              <p className='lnav-hidden-nav'>Prva menstruacija – menarha</p>
            </Link>

            <Link href="/dokumentacija/prva-menstruacija#raz-smear-section">
              <p className='lnav-hidden-nav'>Razvoj sekundarnih spolnih znakov</p>
            </Link>

            <Link href="/dokumentacija/prva-menstruacija#cep-smear-section">
              <p className='lnav-hidden-nav'>Cepljenje proti HPV v osnovni šoli</p>
            </Link>


          </div>

        </div>
        <div className='lnav-extended'>

          <div className='lnav-row' >
            <Link href='/dokumentacija/prvi-obisk'><p className='lnav-nav'>Prvi obisk pri ginekologu</p></Link>
            <div className={`lnav-arrow ${isVisible2 ? 'tilt' : ''}`} onClick={toggleVisibility2}></div>
          </div>

          <div className={`lnav-hidden ${isVisible2 ? 'visible' : ''}`}>

            <Link href="/dokumentacija/prvi-obisk#pap-smear-section">
              <p className='lnav-hidden-nav'>Kaj pomeni PAP bris?</p>
            </Link>

            <Link href="/dokumentacija/prvi-obisk#hpv-smear-section">
              <p className='lnav-hidden-nav'>Kaj povzroča HPV?</p>
            </Link>

            <Link href="/dokumentacija/prvi-obisk#krvavitve-smear-section">
              <p className='lnav-hidden-nav'>Nepravilne krvavitve iz maternice</p>
            </Link>

            <Link href="/dokumentacija/prvi-obisk#kontracepcija-smear-section">
              <p className='lnav-hidden-nav'>Kontracepcija</p>
            </Link>


          </div>

        </div>
        <div className='lnav-extended'>
          <div className='lnav-row' >
            <Link href='/dokumentacija/zanositev'><p className='lnav-nav'>Zanositev/Neplodnost</p></Link>
            <div className={`lnav-arrow ${isVisible3 ? 'tilt' : ''}`} onClick={toggleVisibility3}></div>
          </div>

          <div className={`lnav-hidden ${isVisible3 ? 'visible' : ''}`}>

            <Link href="/dokumentacija/zanositev#kdaj-smear-section">
              <p className='lnav-hidden-nav'>Kdaj h ginekologu, če ne zanosim?</p>
            </Link>

            <Link href="/dokumentacija/zanositev#dod-smear-section">
              <p className='lnav-hidden-nav'>Katere dodatke je smiselno jemati, ko načrtujem nosečnost?</p>
            </Link>

            <Link href="/dokumentacija/zanositev#adem-smear-section">
              <p className='lnav-hidden-nav'>Adenomioza</p>
            </Link>


          </div>

        </div>
        <div className='lnav-extended'>
          <div className='lnav-row' >
            <Link href='/dokumentacija/nosecnost'><p className='lnav-nav'>Nosečnost</p></Link>
            <div className={`lnav-arrow ${isVisible4 ? 'tilt' : ''}`} onClick={toggleVisibility4}></div>
          </div>

          <div className={`lnav-hidden ${isVisible4 ? 'visible' : ''}`}>
            <Link href="/dokumentacija/nosecnost#spremembe-smear-section">
              <p className='lnav-hidden-nav'>Spremembe pri nosečnici po tednih</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#razvoj-smear-section">

              <p className='lnav-hidden-nav'>Razvoj ploda po tednih nosečnosti</p>
            </Link>

            <Link href="/dokumentacija/nosecnost#nos-smear-section">

              <p className='lnav-hidden-nav'>Nosečnost po trimesečjih</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#pril-smear-section">

              <p className='lnav-hidden-nav'>Prilagoditev materinega telesa na nosečnost</p>
            </Link>

            <Link href="/dokumentacija/nosecnost#krv-smear-section">

              <p className='lnav-hidden-nav'>Krvavitev iz nožnice med nosečnostjo</p>
            </Link>

            <Link href="/dokumentacija/nosecnost#vag-smear-section">
              <p className='lnav-hidden-nav'>Vaginalni izcedek v nosečnosti</p>
            </Link>

            <Link href="/dokumentacija/nosecnost#oku-smear-section">

              <p className='lnav-hidden-nav'>Okužba s streptokokom skupine B</p>
            </Link>

            <Link href="/dokumentacija/nosecnost#nose-smear-section">

              <p className='lnav-hidden-nav'>Nosečniška sladkorna bolezen</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#cep-smear-section">

              <p className='lnav-hidden-nav'>Cepljenje nosečnic</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#molar-smear-section">

              <p className='lnav-hidden-nav'>Molarna nosečnost</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#holes-smear-section">

              <p className='lnav-hidden-nav'>Holestaza v nosečnosti</p>
            </Link>

            <Link href="/dokumentacija/nosecnost#otek-smear-section">

              <p className='lnav-hidden-nav'>Otekle noge</p>
            </Link>


            <Link href="/dokumentacija/nosecnost#kako-smear-section">

              <p className='lnav-hidden-nav'>Kako se izračuna termin poroda</p>
            </Link>
            
            <Link href="/dokumentacija/nosecnost#dv-smear-section">

              <p className='lnav-hidden-nav'>Dvojčki</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#tr-smear-section">

              <p className='lnav-hidden-nav'>Trojčki</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#tel-smear-section">

              <p className='lnav-hidden-nav'>Telovadba v nosečnosti</p>
            </Link>

            <Link href="/dokumentacija/nosecnost#bolec-smear-section">

              <p className='lnav-hidden-nav'>Bolečina v križu</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#vroc-smear-section">

              <p className='lnav-hidden-nav'>Vročina in nosečnost</p>
            </Link>

            <Link href="/dokumentacija/nosecnost#preh-smear-section">

              <p className='lnav-hidden-nav'>Prehrana v nosečnosti</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#preb-smear-section">

              <p className='lnav-hidden-nav'>Prebava v nosečnosti</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#dod-smear-section">

              <p className='lnav-hidden-nav'>Prehrambeni dodatki v nosečnosti</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#prip-smear-section">

              <p className='lnav-hidden-nav'>Priporočen prirast telesne teže v nosečnosti</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#las-smear-section">

<p className='lnav-hidden-nav'>Lasje v nosečnosti in po porodu</p>
</Link>
            <Link href="/dokumentacija/nosecnost#strije-smear-section">

              <p className='lnav-hidden-nav'>Strije</p>
            </Link>
            
            <Link href="/dokumentacija/nosecnost#preg-smear-section">

              <p className='lnav-hidden-nav'>Pregledi v nosečnosti</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#ulr-smear-section">

              <p className='lnav-hidden-nav'>Ultrazvok v nosečnosti</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#nuh-smear-section">

              <p className='lnav-hidden-nav'>Kaj je nuhalna svetlina?</p>
            </Link>
            <Link href="/dokumentacija/nosecnost#rhd-smear-section">

              <p className='lnav-hidden-nav'>Rh-D negativne nosečnice</p>
            </Link>

            
            

            
          </div>

        </div>
        <div className='lnav-extended'>
          <div className='lnav-row' >
            <Link href='/dokumentacija/poporodno-obdobje'><p className='lnav-nav'>Poporodno obdobje</p></Link>
            <div className={`lnav-arrow ${isVisible5 ? 'tilt' : ''}`} onClick={toggleVisibility5}></div>
          </div>

          <div className={`lnav-hidden ${isVisible5 ? 'visible' : ''}`}>
            <Link href="/dokumentacija/poporodno-obdobje#cis-smear-section">

              <p className='lnav-hidden-nav'>Čišča ali lohija</p>
            </Link>
            <Link href="/dokumentacija/poporodno-obdobje#krc-smear-section">

              <p className='lnav-hidden-nav'>Krčenje maternice po porodu</p>
            </Link>
            <Link href="/dokumentacija/poporodno-obdobje#doj-smear-section">

              <p className='lnav-hidden-nav'>Dojenje</p>
            </Link>
            <Link href="/dokumentacija/poporodno-obdobje#okr-smear-section">

              <p className='lnav-hidden-nav'>Okrevanje po vaginalnem porodu</p>
            </Link>
            <Link href="/dokumentacija/poporodno-obdobje#car-smear-section">

              <p className='lnav-hidden-nav'>Okrevanje po carskem rezu</p>
            </Link>
            <Link href="/dokumentacija/poporodno-obdobje#spol-smear-section">

              <p className='lnav-hidden-nav'>Spolni odnosi po porodu</p>
            </Link>
            <Link href="/dokumentacija/poporodno-obdobje#men-smear-section">

              <p className='lnav-hidden-nav'>Menstruacija po porodu</p>
            </Link>
            <Link href="/dokumentacija/poporodno-obdobje#dia-smear-section">

              <p className='lnav-hidden-nav'>Diastaza</p>
            </Link>
            <Link href="/dokumentacija/poporodno-obdobje#tel-smear-section">

              <p className='lnav-hidden-nav'>Telovadba po porodu</p>
            </Link>
          </div>
        </div>
        <div className='lnav-extended'>
          <div className='lnav-row' >
            <Link href='/dokumentacija/menopavza'><p className='lnav-nav'>Menopavza</p></Link>
            <div className={`lnav-arrow ${isVisible6 ? 'tilt' : ''}`} onClick={toggleVisibility6}></div>
          </div>

          <div className={`lnav-hidden ${isVisible6 ? 'visible' : ''}`}>
            <Link href="/dokumentacija/menopavza#per-smear-section">

              <p className='lnav-hidden-nav'>Perimenopavza</p>
            </Link>
            <Link href="/dokumentacija/menopavza#nep-smear-section">

              <p className='lnav-hidden-nav'>Nepravilne krvavitve</p>
            </Link>
            <Link href="/dokumentacija/menopavza#suh-smear-section">

              <p className='lnav-hidden-nav'>Suha nožnica</p>
            </Link>
            <Link href="/dokumentacija/menopavza#nes-smear-section">

              <p className='lnav-hidden-nav'>Nespečnost</p>
            </Link>
            <Link href="/dokumentacija/menopavza#vrc-smear-section">

              <p className='lnav-hidden-nav'>Vročinski polivki</p>
            </Link>
            <Link href="/dokumentacija/menopavza#spl-smear-section">

              <p className='lnav-hidden-nav'>Spolni odnosi</p>
            </Link>
            <Link href="/dokumentacija/menopavza#vpl-smear-section">

              <p className='lnav-hidden-nav'>Dolgoročni vpliv menopavze</p>
            </Link>
            
            <Link href="/dokumentacija/menopavza#hor-smear-section">

              <p className='lnav-hidden-nav'>Nadomestna hormonska terapija</p>
            </Link>

          </div>

        </div>



        <div className='lnav-extended'>
          <div className='lnav-row' >
            <Link href='/dokumentacija/ginekolosko-zdravje'><p className='lnav-nav'>Ginekološko zdravje</p></Link>
            <div className={`lnav-arrow ${isVisible7 ? 'tilt' : ''}`} onClick={toggleVisibility7}></div>
          </div>

          <div className={`lnav-hidden ${isVisible7 ? 'visible' : ''}`}>
          <Link href="/dokumentacija/ginekolosko-zdravje#zdrs-smear-section">

              <p className='lnav-hidden-nav'>ZDRS (prolaps) medeničnih organov</p>
          </Link>

          <Link href="/dokumentacija/ginekolosko-zdravje#uri-smear-section">

              <p className='lnav-hidden-nav'>Urinska inkontinenca</p>
          </Link>           

          </div>

        </div>


      </div>
    </div>
  )
}

export default LNav
