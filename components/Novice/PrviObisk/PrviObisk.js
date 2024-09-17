import React from 'react'
import './PrviObisk.css'
 
const PrviObisk = () => {
  return (
    <div className='novica-main'>
            <div className='novica-wrapper'>
                <div className='novice-img-wrapper'>
                    <img alt='novica-img' className='novica-inner-img' src='/Images/novica7.webp' />
                </div>

                <div className='novica-content-wrapper'>
                    <div className='clock-row marginrow'>
                        <img alt='clock-img' className='clock-img' src='/Images/calendar.png' />
                        <p className='novica-date'>09/08/2024</p>
                    </div>
                    <div className='keywords-row'>
                        <div className="matg keyword">Obisk ginekologa</div>
                        <div className="matg keyword">Fizični pregled</div>

                    </div>
                    <p className='blog-hint'>PRVI OBISK PRI GINEKOLOGU</p>
                    <p className='novica-left-header'>Nasveti za pripravo na prvi obisk pri ginekologu</p>
                    <p className='novica-left-paragraph'>Prvi obisk pri ginekologu je lahko za marsikatero žensko nekoliko zastrašujoč, vendar z nekaj pripravami lahko zmanjšate morebitno nelagodje. Tukaj je nekaj nasvetov, ki vam bodo pomagali pri pripravi:</p>

                    <p className='novica-subheader martop'>Zberite svoje zdravstvene podatke</p>
                    <p className='novica-left-paragraph'>Pred obiskom pripravite seznam vaših zdravstvenih težav, alergij in vseh zdravil, ki jih trenutno jemljete. Pomembno je tudi, da veste datume svoje zadnje menstruacije in dolžino vašega menstrualnega cikla. Te informacije bodo ginekologu pomagale bolje razumeti vaše zdravstveno stanje.</p>

                    <p className='novica-subheader martop'>Zastavite vprašanja</p>
                    <p className='novica-left-paragraph'>Pripravite seznam vprašanj, ki jih želite zastaviti ginekologu. To lahko vključuje vprašanja o menstrualnem ciklu, kontracepciji, spolnem zdravju ali drugih pomislekih. Če imate kakršnekoli dvome ali skrbi, jih ne zadržujte zase. Ginekolog je tu, da vam pomaga.</p>

                    <p className='novica-subheader martop'>Bodite iskreni</p>
                    <p className='novica-left-paragraph'>Ginekolog je tu, da vam pomaga, zato je pomembno, da ste iskreni glede vašega zdravstvenega stanja in življenjskega sloga. To vključuje informacije o vašem spolnem življenju, uporabi kontracepcije in drugih pomembnih podrobnostih. Iskrenost zagotavlja, da dobite najboljšo možno oskrbo.</p>

                    <p className='novica-subheader martop'>Pripravite se na fizični pregled</p>
                    <p className='novica-left-paragraph'>Med prvim obiskom bo ginekolog verjetno opravil fizični pregled, ki lahko vključuje pregled prsi, medeničnega področja in morda tudi Papanicolaou test (PAP). Če se počutite nelagodno, to sporočite zdravniku, da vam bo lahko razložil postopek in vas pomiril.</p>

                    <p className='novica-subheader martop'>Sprostite se</p>
                    <p className='novica-left-paragraph'>Poskusite se sprostiti in vedite, da je ginekolog tam, da vam pomaga in zagotovi, da ste zdravi. Dihalne vaje in pozitivne misli vam lahko pomagajo zmanjšati stres pred obiskom. Sprostitev je ključna za zmanjšanje nelagodja in omogoča bolj gladek pregled.</p>

                    <p className='novica-subheader martop'>Pripeljite spremljevalca</p>
                    <p className='novica-left-paragraph'>Če se počutite bolj udobno, lahko s seboj pripeljete prijateljico, družinskega člana ali partnerja, ki vas bo podprl med obiskom. Obisk s spremljevalcem vam lahko nudi dodatno podporo in olajša morebitne skrbi.</p>

                </div>

            </div>
        </div>
  )
}

export default PrviObisk
