import React from 'react'
import './Mid.css'
import { Table } from "antd";

const dataSource = [
  {
    key: '1',
    Stopnja: '1',
    Razvoj: 'Žleznega tkiva v predelu dojk ne vidimo in ne tipamo.',
  },
  {
    key: '2',
    Stopnja: '2',
    Razvoj: 'Žlezno tkivo v predelu prsi malo nabrekne, poveča se premer alveole (temnejši kolobar okoli bradavice).',
  },
  {
    key: '3',
    Stopnja: '3',
    Razvoj: 'Dojki in alveoli se povečata, ne izstopata iz obrisa prsi.',
  },
  {
    key: '4',
    Stopnja: '4',
    Razvoj: 'Areola in bradavica se povečata in izstopita iz obrisa prsi.',
  },
  {
    key: '5',
    Stopnja: '5',
    Razvoj: 'Dojki se nekoliko povesita, aleoli se pomakneta v raven prsi, izstopa bradavica.',
  },
];

const dataSource2 = [
  {
    key: '1',
    Stopnja: '1',
    Razvoj: 'Poraščenosti ni.',
  },
  {
    key: '2',
    Stopnja: '2',
    Razvoj: 'Redke dlake v sredini.',
  },
  {
    key: '3',
    Stopnja: '3',
    Razvoj: 'Dlake postanejo temnejše, nakodrane in se širijo na sramni griček.',
  },
  {
    key: '4',
    Stopnja: '4',
    Razvoj: 'Dlake postanejo bolj grobe, gostejše, a manj številne kot pri odraslih.',
  },
  {
    key: '5',
    Stopnja: '5',
    Razvoj: 'Poraščenost v obliki obrnjenega trikotnika kot pri odraslih. Širi se na notranjo stran stegen.',
  },
];

const columns = [
  {
    title: 'Stopnja',
    dataIndex: 'Stopnja',
    key: 'Stopnja',
  },
  {
    title: 'Razvoj prsi',
    dataIndex: 'Razvoj',
    key: 'Razvoj',
  },

];

const columns2 = [
  {
    title: 'Stopnja',
    dataIndex: 'Stopnja',
    key: 'Stopnja',
  },
  {
    title: 'Pubična poraščenost.',
    dataIndex: 'Razvoj',
    key: 'Razvoj',
  },

];

const Mid = () => {
  return (
    <div className='mid-main'>
      <div className='mid-wrapper'>
        <div className='cas-row'>
          <div></div>
          <div className='cas-branja'> Čas branja: 3min</div>
        </div>
        <h1 className='doc-main-header'>Zanositev / neplodnost</h1>
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/21.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div id="kdaj-smear-section" className='thesection-div'></div>
        <h2 className='doc-main-subheader'>Kdaj h ginekologu, če ne zanosim?</h2>


        <p className='doc-main-paragraph'>V enem letu rednih spolnih odnosov, kar pomeni 2‒3-krat na teden, zanosi okoli 80 % parov. Preostalih 5‒10 % zanosi v drugem letu, težave pri zanositvi lahko pričakujemo pri 10‒15 % populacije. Vzrok za neplodnost je približno v eni tretjini ženski dejavnik, v eni tretjini moški dejavnik in pri eni tretjini kombinacija obeh (pri obeh je zmanjšana sposobnost zanositve, skupno imata težave z zanositvijo, ki vodijo v neplodnost).  </p>
        <p className='doc-main-paragraph'>Če po enem letu rednih spolnih odnosov brez zaščite ne pride do zanositve, je potreben pregled pri osebnem ginekologu, ki lahko par nadalje napoti v center za zdravljenje neplodnosti. </p>

        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a7.webp' />

          </div>

          <div className='grid-right'>
            <p className='questiongraph'>Kako naprej?</p>
            <p className='doc-main-paragraph'>Vzroki za neplodnost se iščejo pri obeh spolih. Ob obravnavi neplodnega para se vzame natančna anamneza, gospo se ginekološko pregleda, opravijo se hormonske preiskave in po potrebi dodatne laboratorijske preiskave. Individualno se po potrebi odločijo za operativno zdravljenje. Pri partnerju se pregleda kakovost semena z analizo semena (s spermiogramom). </p>

            <p className='questiongraph'>Vzroki za neplodnost so različni. </p>
            <p className='doc-main-paragraph'>Najpogostejši vzroki so motnje ovulacije (sindrom policističnih jajčnikov, debelost), endometrioza in tuboperitonealni vzroki z neprehodnimi jajcevodi. Drugi vzroki so starost ženske, razvojne nepravilnosti maternice, miomi, prekomerna telesna teža, spolno prenosljive okužbe, sladkorna bolezen, bolezni ščitnice, zdravila in drugo. Pri okoli 10 % vzrok neplodnosti ni znan. </p>


          </div>
        </div>



        <div id="dod-smear-section" className='thesection-div'></div>
        <h2 className='doc-main-subheader'>Katere dodatke je smiselno jemati, ko načrtujem nosečnost?</h2>

        <div className='the-grid'>
          <div className='grid-left mobilekop'>
            <img alt='blogimg' className='grid-img' src='/Images/a8.webp' />

          </div>

          <div className='grid-left'>
            <p className='doc-main-paragraph'><span className='green-word'>Folna kislina.</span> Vsaj 3 mesece pred zanositvijo in prvih 12 tednov nosečnosti je priporočljivo jemanje folne kisline. Folna kislina ali folat je vodotopna oblika vitamina skupine B (imenovan tudi B9). Ljudje je ne proizvedemo sami in jo moramo v telo vnašati s hrano. Zadostne količine tega vitamina so pomembne za razvoj živčevja. Ob pomanjkanju so možne napake nevralne cevi (kot je spina bifida), razcepi ustnic in neba ter nekatere srčne okvare pri plodu.</p>
            <p className='doc-main-paragraph'>Folno kislino pridobimo z uživanjem živil, kot so leča in druge stročnice, oreščki, avokado, zelenolistnata solata, agrumi. Ker so ravni folne kisline v populaciji pogosto prenizke, se svetuje jemanje folne kisline v preparatih ob načrtovanju nosečnosti in do 12 tednov nosečnosti.</p>
            <p className='doc-main-paragraph'><span className='green-word'>Vitamin D.</span>  Pomanjkanje vitamina D v nosečnosti povezujejo s povečanim tveganjem za razvoj bolezni v nosečnosti, kot so nosečnostna sladkorna bolezen, preeklampsija, zastoj rasti ploda in prezgodnji porod. Vitamin D je povezan tudi z delovanjem imunskega sistema.</p>
            <p className='doc-main-paragraph'>Glavni vir vitamina D je sončna svetloba, saj ga ljudje sintetiziramo v koži pod vplivom UV-žarkov, medtem ko ga iz hrane pridobimo bistveno manj. Z raziskavami na slovenski populaciji je bilo ugotovljeno, da imamo pogosto znižano raven vitamina D predvsem v zimskih in spomladanskih mesecih, zato se v nosečnosti svetuje preventivno jemanje 1500‒2000 IE vitamina D na dan.
            </p>


          </div>

          <div className='grid-right deskotop'>
            <img alt='blogimg' className='grid-img' src='/Images/a8.webp' />

          </div>
        </div>


        <div id="adem-smear-section" className='thesection-div'></div>
        <h2 className='doc-main-subheader'>Ste že slišali za adenomiozo? Tudi ta lahko povzroča neplodnost.</h2>
        <p className='doc-main-paragraph'>Adenomioza je kronična benigna bolezen, pri kateri se žleze iz sluznice maternice preraščajo v mišični del maternice. <span className='green-word'>Adenomioza se kaže s povečano maternico, nepravilnimi krvavitvami iz maternice, bolečimi menstruacijami in bolečimi spolnimi odnosi.</span> Ena tretjina žensk z adenomiozo pa je asimptomatskih in nima nobenih kliničnih znakov. </p>
        <p className='doc-main-paragraph'><span className='green-word'>Adenomioza je lahko povezana z neplodnostjo.</span> Ženske z adenomiozo imajo več neuspešnih postopkov oploditve z biomedicinsko pomočjo (OBMP), manj uspešnih spontanih zanositev in več spontanih splavov. Pogosto se pojavlja sočasno z endometriozo.</p>

        <p className='questiongraph'>Kdaj se bolezen pojavi?</p>
        <p className='doc-main-paragraph'>Bolezen se pojavlja pri 20-35% žensk v rodni dobi, najpogosteje se pojavi po 30 letu starosti. </p>
        <p className='doc-main-paragraph'><span className='green-word'>Dejavniki tveganja za pojav adenomioze</span> so porod in predhodne operacije na maternici, vključno s carskim rezom, abrazijo, kirurškimi in z zdravili sproženimi splavi. Posegi na maternici naj bi povečali tveganje za nastanek adenomioze zaradi porušenja meje med žlezami sluznice in mišičnimi vitrami maternice in s tem omogočili invazijo sluznice v mišično plast. Mejo lahko poruši tudi sama nosečnost. Dejavniki tveganja so tudi zgodnja prva menstruacija, krajši menstruacijski cikel (≤25 dni) in nadomestno hormonsko zdravljenje.</p>

        <p className='questiongraph'>Ločimo dve obliki adenomioze.</p>
        <p className='doc-main-paragraph'>Glede na razporeditev žleznih sluznice v mišični steni maternice ločimo razpršeno (difuzno) in žariščno (fokalno) obliko. Razpršena adenomioza se morfološko kaže s v celoti povečano maternico, histopatološko so pogosta najdba manjši hemoragični ali čokoladno obarvnani nejasno omejeni predeli (posamezni otočki žlez v mišičnem delu maternice, ki se ob menstruaciji luščijo kot žleze v maternici). Žariščna adenomioza se pojavlja v obliki adenomiomov ali cist. Cistična adenomioza je redka oblika fokalne adenomize, za katero so značilne ciste, večje od 1 cm, ki se pogosteje pojavljajo pri mlajših bolnicah. Adenomiomi so skupki hemoragične ali čokoladno obarvane vsebine, neostro omejeni od okolice, ki so obdani s kroglastim okolnim mišičnim tkivom.</p>

        <p className='questiongraph'>Kako dobim diagnozo adenomioze?</p>
        <p className='doc-main-paragraph'>Diagnozo se v zadnjem času postavi s pomočjo slikovne diagnostike: ultrazvok in MRI. Dokončni dokaz je histopatološki (pregled vzorcev tkiva po barvanju pod mikroskopom).</p>

        <p className='questiongraph'>Zdravljenje adenomioze</p>
        <p className='doc-main-paragraph'>Zdravljenje adenomioze je potrebno prilagoditi glede na željo po zanositvi, izraženih simptomih in pridruženih boleznih. Ženski, ki ne načrtuje nosečnosti, se v prvi vrsti svetuje maternični vložek z levonorgestrelom. Saj ta zmanjša adenomiotične vozliče, izboljša krčenje maternice in zmanjša bolečino in krvavitev preko zmanjšanja lokalnih prostaglandinov.  Priporoča se lahko tudi oralne hormonske kontraceptive, ki ugodno delujejo na sluznico maternice. Pri hudih bolečinah se priporoča protibolečinsko terapijo. Pri ženskah, ki ne načrtujejo več nosečnosti, je dokončno zdravljenje kirurška odstranitev maternice. Pri ženskah, ki nosečnost še načrtujejo, se lahko kirurško odstrani fokalno adenomiozo. </p>
        <p className='doc-main-paragraph'>Pri zdravljenju neplodnosti, se pri ženskah z adenomiozo odločajo za uporabo dolgega protokola za stimulacijo.</p>

      </div>

    </div>
  )
}

export default Mid 
