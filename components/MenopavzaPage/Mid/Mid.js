import React from 'react'
import './Mid.css'
import { Table } from "antd";

const dataSource = [
  {
    key: '1',
    starost: '40. tednov',
    teža: '3600 g',
    dolžina: '51 cm',
    glava: '34,5 cm',

  },

  {
    key: '1',
    starost: '35. tednov',
    teža: '2500 g',
    dolžina: '46 cm',
    glava: '32 cm',

  },
  { 
    key: '1',
    starost: '32. tednov',
    teža: '1800 g',
    dolžina: '42 cm',
    glava: '30 cm',

  },
  {
    key: '1',
    starost: '28. tednov',
    teža: '1100 g',
    dolžina: '36,5 cm',
    glava: '27 cm',

  },
  {
    key: '1',
    starost: '24. tednov',
    teža: '650 g',
    dolžina: '31 cm',
    glava: '22 cm',

  },
];

const dataSource2 = [
  {
    key: '1',
    starost: '40. tednov',
    teža: '3400 g',
    dolžina: '51 cm',
    glava: '34,5 cm',

  },

  {
    key: '1',
    starost: '35. tednov',
    teža: '2400 g',
    dolžina: '46 cm',
    glava: '32 cm',

  },
  {
    key: '1',
    starost: '32. tednov',
    teža: '1700 g',
    dolžina: '42 cm',
    glava: '29,5 cm',

  },
  {
    key: '1',
    starost: '28. tednov',
    teža: '1000 g',
    dolžina: '36 cm',
    glava: '26 cm',

  },
  {
    key: '1',
    starost: '24. tednov',
    teža: '600 g',
    dolžina: '32 cm',
    glava: '21 cm',

  },
];

const dataSource3 = [
  {
    key: '1',
    glukoza: 'Na tešče',
    vrednosti: 'Manj kot 5,1 mmol/l',
    Potrjena: '5,1 mmol/l ali več',

  },

  {
    key: '1',
    glukoza: '60 minut po zaužitju glukozne raztopine',
    vrednosti: 'Manj kot 10,0 mmol/l',
    Potrjena: '10,0 mmol/l ali več',

  },
  {
    key: '1',
    glukoza: '120 minut po zaužitju glukozne raztopine',
    vrednosti: 'Manj kot 8,5 mmol/l',
    Potrjena: '8,5 mmol/l ali več',

  },

];


const columns = [
  {
    title: 'Gestacijska starost',
    dataIndex: 'starost',
    key: 'starost',
  },
  {
    title: 'teža',
    dataIndex: 'teža',
    key: 'teža',
  },
  {
    title: 'dolžina',
    dataIndex: 'dolžina',
    key: 'dolžina',
  },
  {
    title: 'Obseg glave',
    dataIndex: 'glava',
    key: 'glava',
  },

];

const columns2 = [
  {
    title: 'Določitev glukoze v krvi',
    dataIndex: 'glukoza',
    key: 'glukoza',
  },
  {
    title: 'Normalne vrednosti',
    dataIndex: 'vrednosti',
    key: 'vrednosti',
  },
  {
    title: 'Potrjena NSB',
    dataIndex: 'Potrjena',
    key: 'Potrjena',
  },

];

const Mid = () => {
  return (
    <div className='mid-main'>
      <div className='mid-wrapper'>
        <div className='cas-row'>
          <div></div>
          <div className='cas-branja'> Čas branja: 7min</div>
        </div>
        <h1 className='doc-main-header'>Menopavza</h1>
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/33.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div id="per-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Kaj je perimenopavza?</h2>

          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a31.webp' />

          </div>

          <div className='grid-right'>
          <p className='doc-main-paragraph'>Že približno 10 let pred menopavzo (zadnjo menstruacijo) pride do postopnega upadanja delovanja jajčnikov. To obdobje se imenuje perimenopavzalni prehod. Jajčniki proizvajajo jajčne celice in sproščajo spolne hormone. V tem obdobju pred menopavzo se postopno zmanjšuje možnost zanositve, manj je antralnih foliklov v jajčniku, jajčne celice izločajo manj estradiola, kar po povratni zanki spodbudi povečano sproščanje FSH (folikel stimulirajočega hormona), ki lahko vzdržuje menstruacijski ciklus še nekaj let. Po 40. letu starosti lahko večkrat prihaja do izostanka ovulacije, menstruacije lahko postanejo redkejše ali neredne. Ko se pojavijo menstruacije na več kot 42 dni, menopavza običajno nastopi po letu ali dveh. </p>

<p className='questiongraph'>Kaj točno je menopavza?</p>
<p className='doc-main-paragraph'>Menopavza je zadnja menstruacija in se običajno pojavi okoli 50. leta starosti. Določimo jo retrogradno, ko je menstruacija odsotna eno leto. </p>


          </div>
        </div>  
        
       

        <div id="nep-smear-section" className='thesection-div'></div>
          <h2 className='doc-main-subheader'>Nepravilne krvavitve v menopavzi je potrebno opredeliti</h2>
        

        <p className='doc-main-paragraph'>Po zadnji menstruaciji je potrebno vsako vaginalno krvavitev opredeliti. Čeprav je večina postmenopavzalnih krvavitev posledica atrofije endometrija, jih je okoli 10 % posledica raka maternice. Zato je pri pojavu krvavitve v postmenopavzalnem obdobju potreben obisk ginekologa za opredelitev vzroka krvavitve.</p>

        <div id="suh-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Zakaj je v menopavzi nožnica suha?</h2>
        

          <div className='the-grid'>
          <div className='grid-left mobilekop'>
            <img alt='blogimg' className='grid-img' src='/Images/a32.webp' />

          </div>

          <div className='grid-left'>
          <p className='doc-main-paragraph'>V postmenopavzi (obdobju po menopavzi) se v sluznici in koži izgubljajo kolagenska in elastična vlakna, kar vodi v sušenje in luščenje zunanjih plasti epitelija. Zmanjša se krvni pretok v podkožju in pod sluznico. Zaradi pomanjkanja estrogena se stanjšajo stene sluznic, kar lahko vodi v oslabljeno odpornost sluznic ter pogostejše okužbe nožnice in sečnega mehurja. Nožnica postane suha. </p>
        <p className='questiongraph'>Posledice suhe nožnice</p>
        <p className='doc-main-paragraph'>Suha nožnica vodi v bolj boleče spolne odnose, srbenje nožnice in zunanjega spolovila ter neprijeten občutek v nožnici. Težave so še izrazitejše po nekajletnem pomanjkanju estrogena, kar vodi v atrofični vaginitis. </p>
        <p className='questiongraph'>Kaj lahko naredim, če imam suho nožnico?</p>
        <p className='doc-main-paragraph'>Za lajšanje simptomov se lahko uporabi sistemsko nadomestno hormonsko zdravljenje ali lokalno zdravljenje z estrogenom vaginalno, ki ima nekoliko dolgotrajnejši učinek. Medtem ko imajo različni lubrikanti, vaginalne globule s hialuronsko kislino in druge, ki spodbudijo obnovo sluznice, kratkotrajnejši učinek. V zadnjem času se uveljavlja tudi lasersko zdravljenje nožnice, ki spodbudi regeneracijo celic.</p>



          </div>

          <div className='grid-right deskotop'>
            <img alt='blogimg' className='grid-img' src='/Images/a32.webp' />

          </div>
        </div>

        
        
        <div id="suh-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader kajsuh-main-subheader'>Kaj lahko naredim, če imam suho nožnico?</h2>
        
        <p className='doc-main-paragraph'>Za lajšanje simptomov se lahko uporabi sistemsko nadomestno hormonsko zdravljenje ali lokalno zdravljenje z estrogenom vaginalno, ki ima nekoliko dolgotrajnejši učinek. Medtem ko imajo različni lubrikanti, vaginalne globule s hialuronsko kislino in druge, ki spodbudijo obnovo sluznice, kratkotrajnejši učinek. V zadnjem času se uveljavlja tudi lasersko zdravljenje nožnice, ki spodbudi regeneracijo celic.</p>


        <div id="nes-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>V menopavzi se pojavlja nespečnost</h2>
        
          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a33.webp' />

          </div>

          <div className='grid-right'>
          <p className='doc-main-paragraph'>Nespečnost je močno povezana z vročinskimi polivki, ki se pojavijo ponoči (tako imenovano nočno potenje). Pa vendar se v postmenopavzalnem obdobju spremeni tudi kakovost spanja. Izjemnega pomena je ustrezna higiena spanca. Priporoča se spanje v hladnih in temnih prostorih. Vsaj uro pred spanjem naj se ne gleda elektronskih naprav, v spalnih prostorih naj ne bo televizije. Lahko večerjo naj se zaužije vsaj uro ali dve pred spanjem. Izogiba naj se alkoholnim in poživilnim pijačam, predvsem v večernih urah. V posteljo naj se gre in vstaja ob istih urah. Redna telesna dejavnost lahko spanec bistveno izboljša.</p>


          </div>
        </div>


        <div id="vrc-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Kaj so vročinski polivki?</h2>
        
        <p className='doc-main-paragraph'>Vročinski polivki so najpogostejše težave v času okoli menopavze in so posledica sprememb na avtonomnem živčevju. Pojavljajo se lahko čez dan in so neprijetni, ponoči povzročajo zbujanje in motnje spanja. Ob navalu vročine se običajno pojavijo tudi znojenje, rdečica in razbijanje srca. Pojavijo se lahko po vsem telesu, vendar so pogostejši samo na vratu in obrazu. Trajajo lahko od nekaj sekund do nekaj minut. Vročinski polivki so še posebno izraziti, kadar pride do hitrega padca estrogena.</p>

        

        <div id="vpl-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Kakšni so dolgoročni vplivi menopavze?</h2>
        
        <p className='doc-main-paragraph'>Spolni hormoni, predvsem estrogen, imajo zaščitno vlogo. Po menopavzi, ko njihov vpliv upade, se pri ženskah povečajo vrednosti holesterola in maščob v krvi, poviša se krvni tlak, razvije se inzulinska rezistenca, ki lahko vodi v sladkorno bolezen. Vse to poveča tveganje za razvoj srčno-žilnih in možganskih bolezni (srčni infarkt, možganska kap …). Pomanjkanje estrogenov spodbudi osteoklaste v razgradnjo kosti, pojavi se osteoporoza. </p>
       
        <p className='questiongraph'>Menopavza in osteoporoza</p>
        <p className='doc-main-paragraph'>Osteoporoza je bolezen, pri kateri se zmanjšujeta količina in kakovost kostnega tkiva. Slabo kostno tkivo vodi do zlomov kosti v obdobju po menopavzi. Osteoporoza najpogosteje prizadene kosti rok, kolkov, vretenc in stegnenice. Opazno je znižanje telesne višine žensk. Simptom osteoporoze so difuzne bolečine po kosteh.</p>

        
        <div id="hor-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Kaj je nadomestna hormonska terapija?</h2>
        
        <p className='doc-main-paragraph'>Nadomestna hormonska terapija je zdravljenje, pri katerem se hormoni vnašajo v telo. Vnos lahko poteka v obliki tablet, obližev, vaginalnih kapsul, razprškov … Vnašanje hormonov je lahko sistemsko ali le lokalno. </p>
        
        <p className='questiongraph'>Sistemsko nadomestno hormonsko zdravljenje</p>
        <p className='doc-main-paragraph'>Pri sistemskem nadomestnem hormonskem zdravljenju se lahko vnaša le en hormon ali oba spolna hormona. </p>

        <p className='questiongraph'>Kateri hormon je potrebno vnašati?</p>
        <p className='doc-main-paragraph'>Za blaženje simptomov menopavze je ključen vnos estrogenov, dodatek progesterona ščiti sluznico maternice pred rakavim obolenjem. Zato je potrebno vnašati oba hormona. Ženske po odstranitvi maternice zaščite s progesteronom ne potrebujejo. </p>

        <p className='questiongraph'>Kaj je potrebno, da lahko pričnemo z nadomestnim hormonskim zdravljenjem?</p>
        <p className='doc-main-paragraph'>Uvaja se najmanjši možen odmerek hormonov, ki še ublaži oziroma prepreči menopavzalne težave. Pri uvedbi zdravljenja se izmerita krvni tlak in telesna teža ter izračuna indeks telesne teže, opravi se ginekološki pregled z ultrazvočno preiskavo in s PAP-brisom, če ni bil vzet zadnja 3 leta, opravi pa se tudi klinični pregled dojk z mamografijo. V času prejemanja nadomestne hormonske terapije se opravljajo letni ginekološki pregledi z ultrazvokom in ob trajanju zdravljenja več kot 5 let redni letni pregledi dojk z mamografijo. </p>

        <p className='questiongraph'>Zakaj je nadomestno hormonsko zdravljenje smiselno?</p>
        <p className='doc-main-paragraph'>Uvedba nadomestnega hormonskega zdravljenja zmanjšuje kratkoročne in dolgoročne vplive menopavze. Hormonsko zdravljenje zmanjša tveganje za srčno-žilne bolezni. Zdravljenje zniža raven holesterola, zmanjša kopičenje maščevja in zmanjša porast telesne teže, zmanjša tveganje za nastanek sladkorne bolezni tipa 2 in zmanjša nižanje kostne mase, posledično se zmanjša število zlomov zaradi osteoporoze. Omili čustveno labilnost, razdražljivost in nespečnost. Terapija se vedno ukinja postopno, sicer se lahko klimakterične težave ponovijo. </p>

        <p className='questiongraph'>Kaj pa zapleti?</p>
        <p className='doc-main-paragraph'>Nadomestna hormonska terapija ima po raziskavah povečano tveganje za nekatere zaplete. Tveganje za venske tromboembolizme se poveča za 2‒3-krat, če se jemlje oralno. Tveganje je manjše pri transdermalnem vnosu. Raziskave so pokazale nekoliko povečano tveganje za nastanek raka dojk pri uporabnicah nadomestnega hormonskega zdravljenja. Tveganje se povečuje z dolžino uporabe nadomestne hormonske terapije. Pri ženskah, ki so prebolele globoko vensko trombozo ali imele raka dojk, je zdravljenje kontraindicirano.</p>


      </div>
    </div>
  )
}

export default Mid 
