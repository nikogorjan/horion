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
        <h1 className='doc-main-header'>Ginekološko zdravje</h1>
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/28.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div id="zdrs-smear-section" className='thesection-div'>
        </div>
        <h2 className='doc-main-subheader'>ZDRS (PROLAPS) MEDENIČNIH ORGANOV</h2>

        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a34.webp' />

          </div>

          <div className='grid-right'>
            <p className='doc-main-paragraph'>Spustitev maternice, sprednje ali zadnje stene nožnice je pri ženskah precej pogosto. Pojavljalo naj bi se pri okoli 40% žensk v starosti 50 do 70%. Pogosto pa se spuščanje medeničnih organov začne že precej pred 50 letom starosti.</p>

            <p className='questiongraph'>Kakšni so simptomi zdrsa medeničnih organov?</p>
            <p className='doc-main-paragraph'>Z zdrsom medeničnih organov so povezani simptomi kot je občutek tiščanja in pritiska v nožnici. Ker se najpogosteje pojavlja spust sprednje stene nožnice (40%), je z zdrsom pogosto povezano tudi uhajanje urina. V primeru zdrsa zadnje stene nožnice so prisotni simptomi spremenjene defekacije (zaprtost, oteženo odvajanje blata, redko inkontinenca blata). Lahko je otežena tudi spolnost.</p>


          </div>
        </div>

        <p className='questiongraph'>Kakšni so simptomi zdrsa medeničnih organov?</p>
        <p className='doc-main-paragraph'>V prvi vrsti je zdravljenje konzervativno z uporabo vaginalnih pesarjev. Pesarji obstajajo v različnih velikosti in oblikah, njihova funkcija je podpora medeničnih struktur. Z uporabo pesarjev se simptomi precej izboljšajo. Pesarje je potrebno redno menjavati, sicer lahko povzročijo dekubituse (otiščance nožnice). Potrebno je tudi redno čiščenje. Blagi zapleti so pogosti, kot je izcedek iz nožnice, krvavitev ali razjede v nožnici. Lahko pride tudi do vnetja nožnice in smrdečega izcedka. </p>

        <p className='questiongraph'>Lahko kaj naredim sama? Keglove vaje za krepitev mišic medeničnega dna</p>
        <p className='doc-main-paragraph'>Za izboljšanje zdrsa medeničnih organov je potrebna krepitev mišic medeničnega dna. Vaje za mišice je potrebno izvajati pravilno in redno. Priporoča se izvajanje Keglovih vaj. Pri zdrsu medeničnih organov preko vhoda v nožnico izrazitejšega izboljšanja stanja ali simptomov s krepitvijo mišic medeničnega dna ne pričakujemo. S krepitvijo mišic medeničnega dna ne vplivamo na sluznico in vezivno tkivo.</p>

        <p className='questiongraph'>Kaj pa lasersko zdravljenje?</p>
        <p className='doc-main-paragraph'>V zadnjem času prihaja do razpona laserskega zdravljenja spusta medeničnih organov. Z laserskem zdravljenjem se deluje na sluznico in vezivo, nima pa vpliva na mišice medeničnega dna. Lasersko se lahko zdravi spust medeničnih organov (cistokelo- spust sprednje stene nožnice, rektokelo – spust zadnje stene nožnice) in uhajanje urina, pa tudi ohlapno nožnico, atrofično nožnico, lihen in drugo. Običajno so potrebni 3 posegi v razmaku 4-6 tednov.  </p>

        <p className='questiongraph'>Kdaj je smiselno kirurško zdravljenje?</p>
        <p className='doc-main-paragraph'>Kirurško zdravljenje je potrebno pri posameznicah s simptomatskim zdrsom. Kirurško zdravljenje zdrsa medeničnih organov pri pacientkah, ki nimajo težav, izpostavlja pacientke tveganjem operativnega zdravljenja brez znanih koristi in se zato odsvetuje. Pri zdrsu sprednje vaginalne stene (cistokele) se naredi sprednja kolporafija, pri zdrsu zadnje stene  (rektokela) pa zadnja kolporafija, popravi se stena nožnice s šivi. Pristop je preko nožnice. Dodatno se lahko postavi šive na sprednji steni nožnice za podporo sečnice (šivi po Kellyju). Pri zdrsu svoda nožnice se napravi sakrokolpopeksija, ki lahko poteka preko abdominalnega (preko trebuha) ali preko vaginalnega (preko nožnice) pristopa. Od razvoja minimalno invazivne kirurgije je laparaskopska sakrokolpopeksija ocenjena kot ena najboljših kirurških tehnik za popravo spusta svoda nožnice. Pri ženskah, ki si ne želijo tveganj povezanih z laparaskopsko kirurgijo ali ne želijo uporabe mrežic, je primerna vaginalna tehnika s fiksacijo maternice ali vaginalnega krna. Ob zdrsih 3. in 4. stopnje (zdrs več kot 1 cm preko vhoda v nožnico do popolnega zdrsa) se pogosto ob operaciji tudi odstrani maternico.</p>




        <div id="uri-smear-section" className='thesection-div'></div>
        <h2 className='doc-main-subheader'>Urinska inkontinenca</h2>

        <p className='questiongraph'>Nenadzorovano uhanjanje urina ali urinska inkontinenca je težava, s katero se lahko srečajo ženske vseh starostih. </p>
        <p className='doc-main-paragraph'>Lahko gre za kakršnokoli nehoteno uhajanje urina, ki bolnici predstavlja oviro iz socialnega, zdravstvenega ali higienskega vidika, zaradi česar ima ženska omejitve v vsakdanjem življenju. Uhajanje urina se lahko pojavi v zelo različnih stopnjah, ključno je, da ta težava predstava za žensko težavo. Težave se lahko stopnjujejo od rahlo motečih do hudo omejujočih. Urinska inkontinenca lahko zelo močno vpliva na kvaliteto življenja ženske.</p>

        <p className='questiongraph'>Ali urin uhaja le meni?</p>
        <p className='doc-main-paragraph'>Uhajanje urina je zelo pogosta težava pri ženskah vseh starosti. Po znanih podatkih se urinska inkontinenca pojavlja pri ženskah v rodni dobi v okoli 20 do 30%, okoli menopavze v 30 do 40% in v postmenopavzi v 30 do 50%. </p>

        <p className='questiongraph'>Kaj povzroča/poslabša uhajanje urina?</p>
        <p className='doc-main-paragraph'>Med dejavnike tveganja za nastanek urinske inkontinence spadajo starost, nosečnost in večkratni porod, poškodbe nožnice ob porodu, operacije v mali medenici, menopavza (pomanjkanje hormonov), kronični kašelj (kadilke), debelost, zmanjšana telesna aktivnost, okužbe sečil, dvigovanje težkih bremen, prirojena šibkost vezivnega tkiva in kronično zaprtje (napenjanje ob odvajanju blata).</p>

        <p className='questiongraph'>Kakšne vrste urinske inkontinence poznamo?</p>
        <p className='doc-main-paragraph'>Urinska inkontinenca je lahko stresna (uhajanje urina ob napenjanju, naporu), urgentna (nujnostno uhajanje urina) ali mešana (prisotne značilnosti stresne in urgentne inkontinence urina). </p>

        <p className='questiongraph'>Stresna urinska inkontineca</p>
        <p className='doc-main-paragraph'>Pri stresni urinski inkontinenci prihaja do uhajanja urina med napenjanjem ali naporom, pa tudi med kihanjem in kašljanjem. Skratka pri vseh dogodkih, pri katerih pride do povečanja pritiska v trebušni votlini. </p>

        <p className='questiongraph'>Zakaj mi uhaja urin med telesno vadbo? </p>
        <p className='doc-main-paragraph'>Pri stresni urinski inkontinenci je značilno uhajanje urina med naporom pri telesni vadbi, predvsem pri skakanju po trampolinu, košarki, poskokih, teku…, skratka pri vseh aktivnostih, ki povečajo pritisk v trebušni votlini in medenici. Ker se poveča pritisk v trebušni votlini, se poveča tudi pritisk v sečnem mehurju in posledično uide urin, brez krčenja mišic sečnega mehurja. </p>

        <p className='questiongraph'>Kako pogosta je stresna urinska inkontinenca?</p>
        <p className='doc-main-paragraph'>Stresna urinska inkontinenca je najpogostejša oblika uhajanja urina in se pojavlja pri polovici vseh inkontinentnih žensk. Najpogosteje okoli 45. leta starosti.</p>

        <p className='questiongraph'>Urgentna urinska inkontinenca</p>
        <p className='doc-main-paragraph'>Pri urgentni urinski inkontinenci pride nenadne močne potrebe po uriniranju (urgenca), ki mu sledi nehoteno uriniranje. Najpogosteje se pojavlja na poti do stranišča, ob poslušanju tekoče vode ali umivanju z mrzlo vodo. Vzrok temu je nekontrolirano krčenje sečnega mehurja, ki povzroči urgenco.</p>

        <p className='questiongraph'>Kako pogosta je urgentna urinska inkontinenca?</p>
        <p className='doc-main-paragraph'>Pojavlja se pri okoli 10% žensk, predvsem v postmenopavzalnem obdobju.</p>

        <p className='questiongraph'>Prekomerno aktiven sečni mehur (PASM)</p>
        <p className='doc-main-paragraph'>Prekomerno aktiven sečni mehur je sindrom z znaki urgentne urinske inkontinence, ki jo spremlja pogosto uriniranje in nočno uriniranje (nokturija). Znani sta dve obliki: suhi PASM (ni uhajanja urina, prisotna je urgenca in pogoste mikcije) ali pa mokri PASM (uhajanje urina ob urgentni urinski inkontinenci, pogostem in nočnem uriniranju).</p>

        <p className='questiongraph'>Kaj je vzrok PASM?</p>
        <p className='doc-main-paragraph'>Vzrok za PASM je lahko povečana aktivnost sečnega mehurja zaradi okvare živčevja (npr: pri multipli sklerozi ali po možganski kapi, drugo) ali pa je vzrok neznan. Dejavniki tveganja za pojav so lahko pogoste okužbe sečil, visoka telesna teža, staranje, kajenje in uživanje kofeina. Pa tudi demenca, depresija in druge okvare kognitivnih funkcij.</p>

        <p className='questiongraph'>Kaj lahko naredim sama za zmanjšanje uhajanja urina?</p>
        <p className='doc-main-paragraph'>Svetuje se sprememba življenjskega stila. Zmanjšanje telesne teže, telesna aktivnost brez večjih poskokov, v vadbo naj bodo vključene vaje za medenično dno. Odsvetuje se kajenje in pretirano uživanje kofeina. Potrebna je ustrezna hidracija in redno uriniranje. Svetovano je redno treniranje mišic medeničnega dna (Keglove vaje) in uporaba pravilnega položaja pri mikciji in defekaciji. Priučiti se je potrebno pravilnih tehnik dvigovanja in ustreznih športnih aktivnosti. Pacientkam je lahko v pomoč fizioterapevtska obravnava.</p>

        <p className='questiongraph'>Nefarmakološko zdravljenje uhajanja urina.</p>
        <p className='doc-main-paragraph'>Svetuje se funkcionalna elektrostimulacija, zunajtelesna magnetna stimulacija (magnetni stol), lasersko zdravljenje in uporaba pesarjev.</p>

        <p className='questiongraph'>Kaj so Keglove vaje?</p>
        <p className='doc-main-paragraph'>Gre za vaje za mišice medeničnega dna. Ime nosijo po ameriškem ginekologu Arnoldu Kegelu, ki je leta 1948 objavil, kako z učenjem vaj za krepitev mišic medeničnega dna okrepimo mišico zapiralko sečnega mehurja. Gre za najstarejši poznan način zdravljenja urinske inkontinence pri ženski. Vadbe mišic medeničnega dna ni prvi iznašel dr. Kegel, saj opis vaj zasledimo že v izročilih starodavnih ljudstev in zapisih vzhodno azijskih kultur. Dr. Kegel je vaje priporočal za zdravljenje stresne urinske inkontinence in tudi za preprečevanje njenega nastanka (po porodu, v menopavzi). Vaje se uporabljajo še danes.</p>
        <p className='doc-main-paragraph'> Če se vaje aktivno izvajajo se poveča moč in vzdržljivost mišic medeničnega dna. Poveča se moč zapornega mehanizma sečnice, ko nenadno poraste pritisk v trebušni votlini (napor, kihanje, kašljanje). Zelo je pomembna pravilna izvedba vaj in krčenje pravih mišic. </p>

        <p className='questiongraph'>Kdaj se odločimo za operacijo?</p>
        <p className='doc-main-paragraph'>Ko s konzervativnimi pristopi ne izboljšamo težav z uhajanjem urina, se svetuje operativno zdravljenje. Indikacije za operativno zdravljenje pa so huda stresna urinska inkontinenca, in mešana urinska inkontinenca, pri kateri prevladujejo znaki stresne inkontinence. Pri operaciji se upošteva, da je urinski inkontinenci pogosto pridružen zdrs medeničnih organov. Glede na pristop ločimo vaginalne, retropubične, kombinirane (vaginalni in abdominalni pristop) in endoskopske (laparoskopske in igelne) operacije.</p>

        <p className='questiongraph'>Predvideno imam TVT operacijo. Kaj je to?</p>
        <p className='doc-main-paragraph'>Gre za kirurški poseg z nenapetostnim trakom (angl. tension-free vaginal tape (TVT)) za zdravljenje stresne urinske inkontinence. Poseg je prvi opisal Ulmsten leta 1996 in od takrat je to pogost kirurški poseg. Operacija je zelo uspešna in uspeh znaša okoli 90%, vendar je poseg povezan z možnimi zapleti, kot so poškodba sečnega mehurja in sečnice ter poškodba črevesa in velikih žil. Po operaciji lahko pride do obrabe mrežice, kronične bolečine, bolečih spolnih odnosov in okužb.  Tveganje za zaplete je celokupno majhno, morajo pa biti pacientke seznanjene z vsemi možnimi zapleti preden se za poseg odločijo.</p>

        <p className='questiongraph'>Zdravljenje urgentne urinske inkontinence</p>
        <p className='doc-main-paragraph'>Pri zdravljenju urgentne urinske inkontinence se uporabljajo zdravila, ki vplivajo na celoten živčni sistem. Najpogosteje je uporabljeno zdravilo mirebegron, ki sprosti gladke mišice sečnega mehurja. Pri ženskah, kjer zdravljenje z zdravili ni učinkovito, se lahko napravi injiciranje botoksa. Uporablja se predvsem pri prekomerno aktivnem sečnem mehurju, kjer zdravila ne pomagajo. </p>

        <p className='questiongraph'>Kaj je mešana urinska inkontinenca?</p>
        <p className='doc-main-paragraph'>Ko pride do uhajanja urina tako ob fizičnem naporu, kihanju in kašljanju in tudi do uhajanja urina ob urgenci, govorimo o mešani urinski inkontinenci. Gre za različne stopnje stresne in urgentne urinske inkontinence. Pojavlja se v okoli 20 do 35%.</p>


       
      </div>
    </div>
  )
}

export default Mid 
