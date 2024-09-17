'use client'


import React, { useState } from 'react';
import './MobileContentNavbar.css'
import Link from 'next/link'; // Import Link from next/link

const MobileContentNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);

  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      document.body.classList.add('expand2-active');
    } else {
      document.body.classList.remove('expand2-active');
    }
  };
  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
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
    setIsVisible(!isVisible7);
  };


  return (
    <div className={`mobile-content-main-nav ${isVisible ? 'expand2' : 'hide-all-extended'}`}>
      <div className='lnav-row2' onClick={toggleVisibility}>
        <p className='lnav-nav'>Menu</p>
        <div className={`lnav-arrow ${isVisible ? 'tilt' : ''}`} ></div>
      </div>
      <div className='lnav-extended'>

        <div className='lnav-row' >
          <Link href='/dokumentacija/prva-menstruacija'><p className='lnav-nav'>Prva menstruacija</p></Link>
          <div className={`lnav-arrow ${isVisible1 ? 'tilt' : ''}`} onClick={toggleVisibility1}></div>
        </div>


        <div className={`lnav-hidden ${isVisible1 ? 'visible' : ''}`} >

          <Link href="/dokumentacija/prva-menstruacija#raz-smear-section" onClick={toggleVisibility}>
            <p className='lnav-hidden-nav'>Razvoj sekundarnih spolnih znakov</p>
          </Link>

          <Link href="/dokumentacija/prva-menstruacija#prv-smear-section" onClick={toggleVisibility}>
            <p className='lnav-hidden-nav'>Prva menstruacija – menarha</p>
          </Link>

          <Link href="/dokumentacija/prva-menstruacija#cep-smear-section" onClick={toggleVisibility}>
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

          <Link href="/dokumentacija/prvi-obisk#pap-smear-section" onClick={toggleVisibility}>
            <p className='lnav-hidden-nav'>Zakaj PAP bris?</p>
          </Link>

          <Link href="/dokumentacija/prvi-obisk#hpv-smear-section" onClick={toggleVisibility}>
            <p className='lnav-hidden-nav'>Kaj povzroča HPV?</p>
          </Link>

          <Link href="/dokumentacija/prvi-obisk#krvavitve-smear-section" onClick={toggleVisibility}>
            <p className='lnav-hidden-nav'>Nepravilne krvavitve iz maternice</p>
          </Link>

          <Link href="/dokumentacija/prvi-obisk#kontracepcija-smear-section" onClick={toggleVisibility}>
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

          <Link href="/dokumentacija/zanositev#kdaj-smear-section" onClick={toggleVisibility}>
            <p className='lnav-hidden-nav'>Kdaj h ginekologu, če ne zanosim?</p>
          </Link>

          <Link href="/dokumentacija/zanositev#dod-smear-section" onClick={toggleVisibility}>
            <p className='lnav-hidden-nav'>Katere dodatke je smiselno jemati, ko načrtujem nosečnost?</p>
          </Link>


        </div>

      </div>
      <div className='lnav-extended'>
        <div className='lnav-row' >
          <Link href='/dokumentacija/nosecnost'><p className='lnav-nav'>Nosečnost</p></Link>
          <div className={`lnav-arrow ${isVisible4 ? 'tilt' : ''}`} onClick={toggleVisibility4}></div>
        </div>

        <div className={`lnav-hidden ${isVisible4 ? 'visible' : ''}`}>
          <Link href="/dokumentacija/nosecnost#spremembe-smear-section" onClick={toggleVisibility}>
            <p className='lnav-hidden-nav'>Spremembe pri nosečnici po tednih</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#razvoj-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Razvoj ploda po tednih nosečnosti</p>
          </Link>

          <Link href="/dokumentacija/nosecnost#nos-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Nosečnost po trimesečjih</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#kako-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Kako se izračuna termin poroda</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#pril-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Prilagoditev materinega telesa na nosečnost</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#dv-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Dvojčki</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#tr-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Trojčki</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#tel-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Telovadba v nosečnosti</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#preh-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Prehrana v nosečnosti</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#preb-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Prebava v nosečnosti</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#dod-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Prehrambeni dodatki v nosečnosti</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#prip-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Priporočen prirast telesne teže v nosečnosti</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#las-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Lasje v nosečnosti in po porodu</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#preg-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Pregledi v nosečnosti</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#ulr-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Ultrazvok v nosečnosti</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#nuh-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Kaj je nuhalna svetlina?</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#rhd-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Rh-D negativne nosečnice</p>
          </Link>

          <Link href="/dokumentacija/nosecnost#krv-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Krvavitev iz nožnice med nosečnostjo</p>
          </Link>

          <Link href="/dokumentacija/nosecnost#vag-smear-section" onClick={toggleVisibility}>
            <p className='lnav-hidden-nav'>Vaginalni izcedek v nosečnosti</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#oku-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Okužba s streptokokom skupine B</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#nose-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Nosečniška sladkorna bolezen</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#cep-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Cepljenje nosečnic</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#molar-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Molarna nosečnost</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#holes-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Holestaza v nosečnosti</p>
          </Link>

          <Link href="/dokumentacija/nosecnost#otek-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Otekle noge</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#bolec-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Bolečina v križu</p>
          </Link>
          <Link href="/dokumentacija/nosecnost#vroc-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Vročina in nosečnost</p>
          </Link>

          <Link href="/dokumentacija/nosecnost#strije-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Strije</p>
          </Link>
        </div>

      </div>
      <div className='lnav-extended'>
        <div className='lnav-row' >
          <Link href='/dokumentacija/poporodno-obdobje'><p className='lnav-nav'>Poporodno obdobje</p></Link>
          <div className={`lnav-arrow ${isVisible5 ? 'tilt' : ''}`} onClick={toggleVisibility5}></div>
        </div>

        <div className={`lnav-hidden ${isVisible5 ? 'visible' : ''}`}>
          <Link href="/dokumentacija/poporodno-obdobje#cis-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Čišča ali lohija</p>
          </Link>
          <Link href="/dokumentacija/poporodno-obdobje#krc-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Krčenje maternice po porodu</p>
          </Link>
          <Link href="/dokumentacija/poporodno-obdobje#doj-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Dojenje</p>
          </Link>
          <Link href="/dokumentacija/poporodno-obdobje#okr-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Okrevanje po vaginalnem porodu</p>
          </Link>
          <Link href="/dokumentacija/poporodno-obdobje#car-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Okrevanje po carskem rezu</p>
          </Link>
          <Link href="/dokumentacija/poporodno-obdobje#spol-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Spolni odnosi po porodu</p>
          </Link>
          <Link href="/dokumentacija/poporodno-obdobje#men-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Menstruacija po porodu</p>
          </Link>
          <Link href="/dokumentacija/poporodno-obdobje#dia-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Diastaza</p>
          </Link>
          <Link href="/dokumentacija/poporodno-obdobje#tel-smear-section" onClick={toggleVisibility}>

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
          <Link href="/dokumentacija/menopavza#per-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Perimenopavza</p>
          </Link>
          <Link href="/dokumentacija/menopavza#nep-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Nepravilne krvavitve</p>
          </Link>
          <Link href="/dokumentacija/menopavza#suh-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Suha nožnica</p>
          </Link>
          <Link href="/dokumentacija/menopavza#nes-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Nespečnost</p>
          </Link>
          <Link href="/dokumentacija/menopavza#vrc-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Vročinski polivki</p>
          </Link>
          <Link href="/dokumentacija/menopavza#spl-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Spolni odnosi</p>
          </Link>
          <Link href="/dokumentacija/menopavza#vpl-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Dolgoročni vpliv menopavze</p>
          </Link>
          <Link href="/dokumentacija/menopavza#men-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Menstruacija po porodu</p>
          </Link>
          <Link href="/dokumentacija/menopavza#dia-smear-section" onClick={toggleVisibility}>

            <p className='lnav-hidden-nav'>Diastaza</p>
          </Link>
          <Link href="/dokumentacija/menopavza#hor-smear-section" onClick={toggleVisibility}>

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
          <Link href="/dokumentacija/ginekolosko-zdravje#zdrs-smear-section" onClick={toggleVisibility}>

              <p className='lnav-hidden-nav'>ZDRS (prolaps) medeničnih organov</p>
          </Link>

          <Link href="/dokumentacija/ginekolosko-zdravje#uri-smear-section" onClick={toggleVisibility}>

              <p className='lnav-hidden-nav'>Urinska inkontinenca</p>
          </Link>           

          </div>

        </div>



    </div>
  )
}

export default MobileContentNavbar
