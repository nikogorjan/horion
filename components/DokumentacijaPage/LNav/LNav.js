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
  const [isVisible6, setIsVisible6] = useState(false);

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

  return (
    <div className='Lnav-main'>
      <div className='lnavigations-wrapper'>
        
        <div className='lnav-extended'>

          <div className='lnav-row' >
            <Link href='/dokumentacija/prva-menstruacija'><p className='lnav-nav'>Prva menstruacija</p></Link>
            <div className={`lnav-arrow ${isVisible ? 'tilt' : ''}`}></div>
          </div>


          <div className={`lnav-hidden ${isVisible ? 'visible' : ''}`} onClick={toggleVisibility}>
            <p className='lnav-hidden-nav'>Razvoj sekundarnih spolnih znakov</p>
            <p className='lnav-hidden-nav'>Prva menstruacija – menarha</p>
            <p className='lnav-hidden-nav'>Cepljenje proti HPV v osnovni šoli</p>
            <p className='lnav-hidden-nav'>Zakaj PAP bris? </p>
            <p className='lnav-hidden-nav'>Kaj povzroča HPV</p>
            <p className='lnav-hidden-nav'>Nepravilne krvavitve</p>
            <p className='lnav-hidden-nav'>Kontracepcija</p>
            <p className='lnav-hidden-nav'>Vaginalen izcedek</p>

          </div>

        </div>
        <div className='lnav-extended'>

          <div className='lnav-row' >
          <Link href='/dokumentacija/prvi-obisk'><p className='lnav-nav'>Prvi obisk pri ginekologu</p></Link>
            <div className={`lnav-arrow ${isVisible2 ? 'tilt' : ''}`} onClick={toggleVisibility2}></div>
          </div>

          <div className={`lnav-hidden ${isVisible2 ? 'visible' : ''}`}>
            <p className='lnav-hidden-nav'>Zakaj PAP bris?</p>
            <p className='lnav-hidden-nav'>Kaj povzroča HPV</p>
            <p className='lnav-hidden-nav'>Nepravilne krvavitve iz maternice</p>
            <p className='lnav-hidden-nav'>Kontracepcija</p>

          </div>

        </div>
        <div className='lnav-extended'>
          <div className='lnav-row' >
          <Link href='/dokumentacija/zanositev'><p className='lnav-nav'>Zanositev/Neplodnost</p></Link>
            <div className={`lnav-arrow ${isVisible3 ? 'tilt' : ''}`} onClick={toggleVisibility3}></div>
          </div>

          <div className={`lnav-hidden ${isVisible3 ? 'visible' : ''}`}>

            <p className='lnav-hidden-nav'>Kdaj h ginekologu, če ne zanosim?</p>
            <p className='lnav-hidden-nav'>Katere dodatke je smiselno jemati, ko načrtujem nosečnost?</p>


          </div>

        </div>
        <div className='lnav-extended'>
          <div className='lnav-row' >
            <Link href='/dokumentacija/nosecnost'><p className='lnav-nav'>Nosečnost</p></Link>
            <div className={`lnav-arrow ${isVisible4 ? 'tilt' : ''}`} onClick={toggleVisibility4}></div>
          </div>

          <div className={`lnav-hidden ${isVisible4 ? 'visible' : ''}`}>
            <p className='lnav-hidden-nav'>Spremembe pri nosečnici po tednih</p>
            <p className='lnav-hidden-nav'>Razvoj ploda po tednih nosečnosti</p>
            <p className='lnav-hidden-nav'>Nosečnost po trimesečjih</p>
            <p className='lnav-hidden-nav'>Kako se izračuna termin poroda</p>
            <p className='lnav-hidden-nav'>Prilagoditev materinega telesa na nosečnost</p>
            <p className='lnav-hidden-nav'>Dvojčki</p>
            <p className='lnav-hidden-nav'>Trojčki</p>
            <p className='lnav-hidden-nav'>Telovadba v nosečnosti</p>
            <p className='lnav-hidden-nav'>Prehrana v nosečnosti</p>
            <p className='lnav-hidden-nav'>Prebava v nosečnosti</p>
            <p className='lnav-hidden-nav'>Prehrambeni dodatki v nosečnosti</p>
            <p className='lnav-hidden-nav'>Priporočen prirast telesne teže v nosečnosti</p>
            <p className='lnav-hidden-nav'>Lasje v nosečnosti in po porodu</p>
            <p className='lnav-hidden-nav'>Pregledi v nosečnosti</p>
            <p className='lnav-hidden-nav'>Ultrazvok v nosečnosti</p>
            <p className='lnav-hidden-nav'>Kaj je nuhalna svetlina?</p>
            <p className='lnav-hidden-nav'>Rh-D negativne nosečnice</p>
            <p className='lnav-hidden-nav'>Krvavitev iz nožnice med nosečnostjo</p>
            <p className='lnav-hidden-nav'>Vaginalni izcedek v nosečnosti</p>
            <p className='lnav-hidden-nav'>Okužba s streptokokom skupine B</p>
            <p className='lnav-hidden-nav'>Nosečniška sladkorna bolezen</p>
            <p className='lnav-hidden-nav'>Cepljenje nosečnic</p>
            <p className='lnav-hidden-nav'>Molarna nosečnost</p>
            <p className='lnav-hidden-nav'>Holestaza v nosečnosti</p>
            <p className='lnav-hidden-nav'>Otekle noge</p>
            <p className='lnav-hidden-nav'>Bolečina v križu</p>
            <p className='lnav-hidden-nav'>Vročina in nosečnost</p>
            <p className='lnav-hidden-nav'>Strije</p>

          </div>

        </div>
        <div className='lnav-extended'>
          <div className='lnav-row' >
            <Link href='/dokumentacija/poporodno-obdobje'><p className='lnav-nav'>Poporodno obdobje</p></Link>
            <div className={`lnav-arrow ${isVisible5 ? 'tilt' : ''}`} onClick={toggleVisibility5}></div>
          </div>

          <div className={`lnav-hidden ${isVisible5 ? 'visible' : ''}`}>
            <p className='lnav-hidden-nav'>Čišča ali lohija</p>
            <p className='lnav-hidden-nav'>Krčenje maternice po porodu</p>
            <p className='lnav-hidden-nav'>Dojenje</p>
            <p className='lnav-hidden-nav'>Okrevanje po vaginalnem porodu</p>
            <p className='lnav-hidden-nav'>Okrevanje po carskem rezu</p>
            <p className='lnav-hidden-nav'>Spolni odnosi po porodu</p>
            <p className='lnav-hidden-nav'>Menstruacija po porodu</p>
            <p className='lnav-hidden-nav'>Diastaza</p>
            <p className='lnav-hidden-nav'>Telovadba po porodu</p>

          </div>
        </div>
        <div className='lnav-extended'>
        <div className='lnav-row' >
          <Link href='/dokumentacija/menopavza'><p className='lnav-nav'>Menopavza</p></Link>
            <div className={`lnav-arrow ${isVisible6 ? 'tilt' : ''}`} onClick={toggleVisibility6}></div>
          </div>

          <div className={`lnav-hidden ${isVisible6 ? 'visible' : ''}`}>
            <p className='lnav-hidden-nav'>Nepravilne krvavitve</p>
            <p className='lnav-hidden-nav'>Suha nožnica</p>
            <p className='lnav-hidden-nav'>Nespečnost</p>
            <p className='lnav-hidden-nav'>Vročinski polivki</p>
            <p className='lnav-hidden-nav'>Spolni odnosi</p>
            <p className='lnav-hidden-nav'>Dolgoročni vpliv menopavze</p>
            <p className='lnav-hidden-nav'>Menstruacija po porodu</p>
            <p className='lnav-hidden-nav'>Diastaza</p>
            <p className='lnav-hidden-nav'>Nadomestna hormonska terapija</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default LNav
