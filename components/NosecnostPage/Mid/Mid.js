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
          <div className='cas-branja'> Čas branja: 35min</div>
        </div>
        <h1 className='doc-main-header'>Nosečnost</h1>
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/18.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="spremembe-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Spremembe pri nosečnici po tednih</h2>
        
        <p className='doc-main-paragraph'>Nosečnost je obdobje od oploditve jajčne celice do rojstva otroka. Nosečnost traja 40 lunarnih tednov oziroma 280 dni. Za natančnejše spremljanje nosečnosti se ta opisuje po tednih. </p>
        <p className='doc-main-paragraph'>Nosečnost računamo po prvem dnevu zadnje menstruacije.</p>

        <p className='doc-main-paragraph'><span className='green-word'>3. teden</span> Lahko se pojavi blag krvav izcedek iz nožnice. Krvavitev je posledica ugnezditve zarodka v maternično votlino. To imenujemo ugnezditvena krvavitev.</p>
        <p className='doc-main-paragraph'><span className='green-word'>4. teden</span> Menstruacija zaostane. Test nosečnosti je pozitiven.</p>
        <p className='doc-main-paragraph'><span className='green-word'>5.‒12. teden </span> Pojavita se utrujenost in slabost, lahko je pridruženo bruhanje. Pojavlja se predvsem jutranja slabost, pri nekaterih nosečnicah lahko slabost z bruhanjem traja tudi ves dan. V tem obdobju se lahko spremeni okus, lahko se pojavi neprenašanje določene vrste hrane ali nenavadna želja po določeni vrsti hrane (npr.: kumarice). Lahko se pojavi glavobol. Napet trebušček je predvsem posledica upočasnjene prebave in napihnjenosti. Maternica in plod sta še majhna.</p>
        <p className='doc-main-paragraph'><span className='green-word'>12. teden  </span> Maternica se zaradi nosečnosti poveča, začne rasti iz male medenice. V tem času se lahko že vidi nosečniški trebušček. Ob rasti maternice se napenjajo vezi, s katerimi je maternica priraščena v malo medenico. Zaradi raztezanja vezi lahko ženske občutijo špikanje ali nelagodje v spodnjem delu trebuha.</p>
        <p className='doc-main-paragraph'><span className='green-word'>13. teden </span> Večina zgodnjih nosečniških simptomov preneha.</p>
        <p className='doc-main-paragraph'><span className='green-word'>14.‒19. teden </span> Pod vplivom hormonov nosečnosti se upočasni prebava, pojavi se lahko zaprtje ali zgaga. Krvi tlak se lahko zniža, lahko se pojavi občutek omotice. </p>
        <p className='doc-main-paragraph'><span className='green-word'>20. teden</span> Maternica sega do popka. Okoli 20. tedna se zaznajo gibi ploda. Ženske, ki so že rodile, gibe ploda običajno zaznajo prej. </p>
        <p className='doc-main-paragraph'><span className='green-word'>21.‒25. teden</span> Zaradi povečanja trebuha nosečnice se spremeni težišče telesa. Pojavijo se lahko bolečine v križu. Ob raztezanju kože na trebuhu se pojavijo <a href='/'>strije</a> ali <a href='/'>srbečica kože. </a></p>
        <p className='doc-main-paragraph'><span className='green-word'>25.‒30. teden</span> Otekati začnejo spodnje okončine, saj se količina tekočine v telesu povečuje. Otekanje je še posebno izrazito v poletnih mesecih, ob vročini. </p>
        <p className='doc-main-paragraph'><span className='green-word'>30.‒35. teden</span> Pojavijo se Braxton-Hicksovi popadki, tako imenovani lažni popadki. Ti popadki so neredni, kratki in praviloma neboleči. V teh tednih maternica sega visoko nad popek in s pritiskom na želodec dodatno povzroča zgago. Velika maternica pritiska tudi navzdol v malo medenica in na mehur, zato morajo nosečnice pogosto hoditi na vodo. Pogosto se zaradi teže noseče maternice pojavijo hemoroidi.</p>
        <p className='doc-main-paragraph'><span className='green-word'>35.‒37. teden</span> Maternica sega do prsnice in zaradi svoje velikosti lahko povzroča nelagodje pri nosečnici, lahko se pojavi nespečnost.</p>
        <p className='doc-main-paragraph'><span className='green-word'>37.‒40. teden</span> Plod se postavi v porodni kanal, ob tem se čuti blag pritisk navzdol. Pojavi se povečan izcedek iz nožnice. Znaki začetka poroda so luščenje čepa, krči, odtekanje plodovnice.</p>

        <div id="razvoj-smear-section" className='thesection-div'></div>
          <h2 className='doc-main-subheader'>Razvoj ploda po tednih</h2>
        
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/p2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className='doc-main-paragraph'><span className='green-word'>1.‒2.teden.</span> Obdobje predzarodka. To je čas od zadnje menstruacije do ovulacije. Po ovulaciji jajčna celica potuje po jajcevodu, kjer pride do oploditve s spermijem. Nastane zarodek.</p>
        <p className='doc-main-paragraph'><span className='green-word'>3. teden.</span> Zarodek ostane v jajcevodu 3 dni, nato potuje 8 ur do maternične votline in se ugnezdi. Ob ugnezditvi lahko pride do manjše krvavitve, kar imenujemo ugnezditvena krvavitev ali lažna menstruacija. Časovno lahko ta krvavitev sovpada s pričakovano naslednjo menstruacijo, je pa običajno krvavitev šibkejša od redne menstruacije. </p>
        <p className='doc-main-paragraph'><span className='green-word'>4. teden.</span> Celice zarodka se hitro delijo. </p>
        <p className='doc-main-paragraph'><span className='green-word'>5.‒6. teden</span> Razvije se srčno-žilni sistem, v tem obdobju lahko na UZ prvič vidimo srčni utrip. Posteljica tehta 6 gramov.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Do 10. tedna</span> Poteka razvoj zarodka, razvijajo se vsi vitalni organi, poteka t. i. organogeneza. Ob koncu embrionalnega razvoja zarodek meri 28 mm. Zaključi se obdobje zarodka (embrija) in se začne obdobje ploda (fetusa). Posteljica tehta 26 gramov.</p>
        <p className='doc-main-paragraph'><span className='green-word'>12. teden</span> Plod meri od 6 do 8 cm, razvijejo se mu prsti na rokah in nogah. Spolni organi kažejo značilno sliko. Začnejo se spontani gibi ploda. Plod odpira in zapira dlani.</p>
        <p className='doc-main-paragraph'><span className='green-word'>16. teden</span> Plod meri okoli 12 cm (po meritvi razdalje teme‒trtica). </p>
        <p className='doc-main-paragraph'><span className='green-word'>20. teden</span> Plod je zdaj že tako velik, da ne merimo več razdalje teme‒trtica, vendar izmerimo obsege glavice, trebuha in dolžino stegnenice, računalniški sistem pa iz teh podatkov izračuna ocenjeno telesno težo. Plod v tem obdobju tehta okoli 300 gramov. Na ultrazvoku so lahko vidni obrazni gibi (grimase, zehanje, požiranje). </p>
        <p className='doc-main-paragraph'><span className='green-word'>24. teden</span> Teža ploda je okoli 650 gramov. Koža se naguba, nalaga se podkožno maščevje, razvijajo se pljučni mešički. Posteljica tehta 200 gramov.</p>
        <p className='doc-main-paragraph'><span className='green-word'>28. teden</span> Plod tehta okoli 1100 gramov. Oči že občasno odpira, ima trepalnice in nohte na prstih.</p>
        <p className='doc-main-paragraph'><span className='green-word'>32. teden</span> Plod tehta okoli 1800 gramov. Fantkom se v moda spustijo testisi.</p>
        <p className='doc-main-paragraph'><span className='green-word'>36. teden</span> Plod tehta okoli 2500 gramov. Podkožno maščevje se prerazporedi, koža ni več nagubana. Posteljica tehta 430 gramov.</p>
        <p className='doc-main-paragraph'><span className='green-word'>40. teden</span> Plod je popolnoma razvit. Povprečno tehta 3500 gramov. </p>

        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Za dečke</h3>
        <div className='table-margin'></div>
        <Table dataSource={dataSource} columns={columns} />
        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Za deklice</h3>
        <div className='table-margin'></div>
        <Table dataSource={dataSource2} columns={columns} />
        <div className='table-margin'></div>
        <div id="nos-smear-section" className='thesection-div'></div>

          <h2 className='doc-main-subheader'>Nosečnost po trimesečjih</h2>
        
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/p4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Prvo trimesečje</h3>
        <div className='table-margin'></div>

        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a9.webp' />

          </div>

          <div className='grid-right'>
          <p className='doc-main-paragraph'><span className='green-word'>Izostanek menstruacije</span> - Prvi znak nosečnosti je izostanek menstruacije. Ob tem se lahko pojavijo tudi drugi simptomi:</p>

<p className='doc-main-paragraph'><span className='green-word'>Prsi postanejo občutljivejše in otekle.</span></p>
<p className='doc-main-paragraph'><span className='green-word'>Slabosti in bruhanje</span> - Slabosti brez bruhanja/z bruhanjem se pogosto pojavijo zjutraj, čeprav ima lahko nosečnica težave ves dan. Običajno se slabosti začnejo en mesec po začetku nosečnosti in trajajo do konca prvega trimesečja. Svetuje se uživanje majhnih količin hrane ves dan. Izogibati se je treba praznemu želodcu. Uživa naj se lahko prebavljiva hrana, ki ni premastna in preslana. Ob tem je treba piti dovolj tekočine. Izogibati se je treba močnim vonjem, saj lahko slabost poslabšajo.</p>
<p className='doc-main-paragraph'><span className='green-word'>Sprememba v prehrani</span> - Lahko pride do pretirane potrebe po določeni vrsti hrane ali pa zavračanju, kar je posledica hormonskih sprememb.</p>
<p className='doc-main-paragraph'><span className='green-word'>Utrujenost in zaspanost</span> - V prvem trimesečju se raven progesterona poviša, kar lahko povzroči močno utrujenost in zaspanost. Svetuje se zmeren počitek. Zmerna telesna dejavnost lahko izboljša počutje.</p>
<p className='doc-main-paragraph'><span className='green-word'>Zaprtost in napihnjenost</span> - Pojavita se lahko zaprtost in napihnjenost. Pod vplivom hormonov se namreč upočasni prebava, upočasni se praznjenje želodca, relaksira se sfinkter. Pomembni sta dieta z veliko vlakninami in ustrezna hidracija.</p>


          </div>
        </div>
        




        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Drugo trimesečje</h3>
        <div className='table-margin'></div>



        <p className='doc-main-paragraph'>Drugo trimesečje je čas najboljšega počutja. Začetne slabosti se umirijo in maternica s plodom še ni tako velika, da bi povzročala nelagodje.</p>
        <p className='doc-main-paragraph'>Spremembe v drugem trimesečju:</p>



        <div className='the-grid'>
          <div className='grid-left mobilekop'>
            <img alt='blogimg' className='grid-img' src='/Images/a10.webp' />

          </div>

          <div className='grid-left'>
          <p className='doc-main-paragraph'><span className='green-word'>Povečanje trebuščka in prsi</span> - Trebušček se povečuje, povečajo se tudi prsi. Svetuje se uporaba nedrčka brez kosti (sicer lahko kost v nedrčku pritiska na mlečne žleze in povzroči zastojne dojke).</p>
        <p className='doc-main-paragraph'><span className='green-word'>Nizek krvni tlak</span> - V drugem trimesečju je zaradi sprememb v cirkulaciji krvni tlak običajno najnižji in nosečnice so lahko omotične. Svetujeta se dobra hidracija in izogibanje daljšemu stoječemu položaju, vstajati je treba počasi in postopno. V primeru občutka omotice se je treba usesti in spustiti glavo čim nižje, do/pod kolena in počakati kakšno minuto. Krvni tlak v glavi se bo povišal in omotica bo minila.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Krči maternice</span> - Pojavijo se lahko blagi, neredni krči maternice. To so tako imenovani Braxton-Hickovi popadki. Običajno se pojavljajo popoldne in zvečer, po fizični dejavnosti ali po spolnem odnosu. V primeru rednih in močnih popadkov je potreben takojšen pregled pri ginekologu, saj obstaja tveganje prezgodnjega poroda.</p>
        


          </div>

          <div className='grid-right deskotop'>
            <img alt='blogimg' className='grid-img' src='/Images/a10.webp' />

          </div>
        </div>

        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a11.webp' />

          </div>

          <div className='grid-right'>
          <p className='doc-main-paragraph'><span className='green-word'>Zamašen nos</span> - Lahko se pojavi zamašen nos, kar je posledica zadrževanja vode v telesu in edema nosne sluznice. Svetuje se uporaba fiziološke raztopine za nos ali inhalacije slane vode.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Občutljive dlesni in krvavitev ob ščetkanju</span> - Ustna sluznica postane zadebeljena, edematozna in močneje prekrvavljena. Dlesni so bolj občutljive in ob ščetkanju zob pogosteje pride do krvavitve. Smiselna je uporaba mehkih zobnih ščetk. Ustna higiena je med nosečnostjo zelo pomembna, saj je po raziskavah prezgodnji porod močno povezan z vnetji, tudi s parodontozami (vnetjem obzobnih tkiv).</p>
        <p className='doc-main-paragraph'><span className='green-word'>Temne lise po koži</span> - Nosečniški hormoni stimulirajo pigmentne celice (melanin) v koži. Pojavi se več rjavih lis po telesu (melazme), lahko se opazi temna črta po sredini trebuha, običajno od popka navzdol (linea nigra). Te spremembe so pogoste in po porodu izginejo. Spremembe so še posebno izrazite ob izpostavitvi soncu, zato se svetuje uporaba kreme z zaščitnim faktorjem.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Krči v nogah</span> - Krči v nogah so pogosti v nosečnosti. Posebno pogosto se pojavljajo zvečer in ponoči. Za preprečevanje krčev sta pomembni primerna telesna dejavnost in dobra hidracija. Priporočajo se magnezijevi preparati.</p>


          </div>
        </div>
        
        
        
        

        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Tretje trimesečje</h3>
        <div className='table-margin'></div>
        <p className='doc-main-paragraph'>V tretjem trimesečju je lahko teža maternice že precejšnja in ovira gibanje, začne se pričakovanje poroda. Pojavijo se simptomi:</p>
        
        
        <div className='the-grid'>
          <div className='grid-left mobilekop'>
            <img alt='blogimg' className='grid-img' src='/Images/a12.webp' />

          </div>

          <div className='grid-left'>
          <p className='doc-main-paragraph'><span className='green-word'>Krči maternice</span> - Pojavijo se blagi, neredni krči maternice. To so tako imenovani Braxton-Hickovi popadki. Običajno se pojavljajo popoldne in zvečer. Redni in močni popadki so lahko začetek poroda. </p>
        <p className='doc-main-paragraph'><span className='green-word'>Zadihanost</span> - Lahko se pojavi zadihanost. Zadihanost se še hitreje pojavi ob anemiji nosečnice.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Zgaga</span> - Težave z zgago. Želodec se pod vplivom nosečniških hormonov počasneje prazni, zaklopka med želodcem in požiralnikom slabše deluje, ob tem pa visoko noseča maternica pritiska na želodec. Vse to vodi vračanje želodčne vsebine v požiralnik in povzroča pekočo bolečino. Treba je redno uživati majhne obroke in upoštevati želodčno dieto.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Zaprtost in hemeroidi</span> - Zaradi pritiska maternice navzdol in pogoste zaprtosti se v nosečnosti radi pojavijo hemoroidi. Pomembna je skrb za mehko odvajanje blata (dieta, bogata z vlakninami, uživanje zadostne količine sadja in zelenjave, ustrezna hidracija). Hemoroidi lahko po porodu spontano izginejo v nekaj tednih, če hemoroidi ostajajo in povzročajo težave, se obrnite na izbranega osebnega zdravnika.</p>
        

          </div>

          <div className='grid-right deskotop'>
            <img alt='blogimg' className='grid-img' src='/Images/a12.webp' />

          </div>
        </div>


        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a13.webp' />

          </div>

          <div className='grid-right'>
          <p className='doc-main-paragraph'><span className='green-word'>Bolečina v križu</span> - Z naraščanjem velikosti trebuha se spremeni težišče telesa. Hrbtenica se ukrivi, kar povzroča bolečine v križu. Ob tem se pod vplivom nosečniških hormonov sproščajo vezi, predvsem vezi medeničnega obroča. Pomembna je ustrezna telesna vadba. Nosečnica naj nosi udobna obuvala. V primeru vztrajanja ali stopnjevanja bolečine je smiseln pregled pri ginekologu.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Žilne spremembe</span> - Med nosečnostjo se poveča krvni pretok. Na koži trupa in okončin lahko vidimo drobne rdeče vene (pajkasti nevusi), ki običajno spontano izginejo po porodu. Varice (krčne žile) se pojavijo po nogah ali spolovilu. To so otekle in povečane vene. Povzročajo bolečino, napetost, neprijeten občutek na mestu pojava in imajo lahko tudi estetski vpliv. Izogibati se je treba dolgemu sedenju ali stanju na mestu, ob vsaki priložnosti naj se noge dvignejo ali naj se nosečnica sprehodi.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Na koži se pojavijo strije</span> - Strije (striae gravidarum) so pasovi spremenjene kože, ki potekajo po trebuhu, stegnih, dojkah, lahko tudi po zadnjici in drugih delih telesa. Ob pojavu so rdeče, modre do vijoličaste barve, sčasoma počasi zbledijo do belo-srebrnkaste barve. Trenutno še ni možno zanesljivo preprečiti nastanka ali zdraviti strij. Z nekaterimi metodami se lahko njihov nastanek in razvoj omilita, morda tudi preprečita. Za preprečevanje sta pomembni predvsem ustrezna hidracija in zdrava prehrana, bogata z vitamini, minerali in vlakninami. Ob tem je smiselna uporaba krem in olj, ki kožo na problematičnih predelih nahranijo ter pomagajo pri vlaženju in izboljšanju elastičnosti kože. Ob nanašanju krem je pomembna ustrezna nežna masaža, ki izboljša prekrvavitev in elastičnost kože. Če so strije zelo moteče, je možno poznejše lasersko zdravljenje. </p>
        <p className='doc-main-paragraph'><span className='green-word'>Pogosto uriniranje</span> - Velika maternica pritiska na malo medenico, posledično sečni mehur nima prostora za raztezanje. Zato je v tem obdobju prisotno pogosto uriniranje. Lahko se pojavi tudi uhajanje urina, ki je še bolj izrazito ob kašljanju, kihanju ali smejanju, saj se ob tem dodatno poveča pritisk v trebušni votlini. </p>


          </div>
        </div>
        
        
        
        

        <div id="pril-smear-section" className='thesection-div'></div>

          <h2 className='doc-main-subheader'>Prilagoditev materinega telesa na nosečnost</h2>
        
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/28.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Srce in ožilje</h3>
        <div className='table-margin'></div>
        <p className='doc-main-paragraph'>Srčni utrip v mirovanju se poveča za 10‒15 utripov na minuto. To pomeni, da srce nosečnice bije hitreje. Trebušna prepona se dvigne in pomakne srce v levo. Poveča se količina krvi, ki jo srce črpa po telesu. Spremeni se pretok krvi skozi posamezne organe. Količina krvi, ki teče skozi maternico, se skozi nosečnost povečuje. Zniža se krvni tlak v arterijah, nosečnice so lahko bolj utrujene in omotične. Poveča se tlak v venah, predvsem v nogah, kar vodi v nastanek oteklin in varic nog.</p>
        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Pljuča</h3>
        <div className='table-margin'></div>
        <p className='doc-main-paragraph'>Nosečnica ima v telesu večji volumen krvi, to kri srce hitreje črpa in posledično se poveča pretok krvi skozi pljuča. Nosečnica zato hitreje diha (hiperventilira).</p>
        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Sečila</h3>
        <div className='table-margin'></div>
        <p className='doc-main-paragraph'>Ko maternica raste, s svojo velikostjo in težo pritisne na sosednje organe. Če pritisne na mehur, morajo nosečnice pogosto urinirati. Ob pritisku na spodnji del sečevoda je lahko prisotna blaga razširitev sečevoda v njegovem zgornjem delu. Razširitev nastane tudi zaradi hormonske relaksacije stene sečevoda. Hkrati se ob tem poveča pretok krvi skozi ledvica v drugem trimesečju nosečnosti.</p>
        <p className='doc-main-paragraph'>Med nosečnostjo se v telesu zadržuje voda. Povprečno je v telesu nosečnice 8 litrov vode, največ v posteljici, plodu in plodovnici, poveča pa se tudi količina vode v materinih tkivih. Celotna telesna teža se povprečno povečuje 1 kg/mesec v prvi tretjini in po 5 kg v drugi in tretji tretjini nosečnosti. Zato je optimalna pridobitev telesne teže v času nosečnosti 12‒13 kg.</p>
        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Zunanje spolovilo</h3>
        <div className='table-margin'></div>
        <p className='doc-main-paragraph'>Progesteron, hormon nosečnosti, zadebeli sluznico nožnice. Izloča se kisli izcedek s pH od 3,5 do 4,5. Kisli izcedek je delno zaščitni, saj predstavlja neugodno okolje za rast patogenih (slabih) bakterij. V nosečnosti je zaradi spremenjenega pH nožnice pogostejše glivično vnetje. Normalno je v nosečnosti nekoliko povečan vaginalen izcedek, ki je sestavljen iz vode, elektrolitov, epitelijskih celic in mikroorganizmov.</p>
        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Koža</h3>
        <div className='table-margin'></div>
        <p className='doc-main-paragraph'>Hormoni stimulirajo melanocite, zaradi česar se poveča <a href='/'>pigmentacija kože</a>. Potemnita bradavici dojk in področje zunanjega spolovila. Pojavi se linea fusca, temna črta med popkom in simfizo. Pri nekaterih nosečnicah se spremeni obarvanost obraza, brazgotine lahko potemnijo. </p>
        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Sklepi</h3>
        <div className='table-margin'></div>
        <p className='doc-main-paragraph'>Zaradi delovanja estrogena postanejo vezi mehkejše in v okolici sklepov se zadržuje tekočina. Sprošča se hormon relaksina, ki zmehča vezi in sklepe. Zaradi zmehčanja se v nosečnosti lahko poveča tudi številka noge. K temu lahko dodatno pripomore povečana telesna teža. </p>
        <div id="krv-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Krvavitev iz nožnice med nosečnostjo</h2>
        
       
        <p className='questiongraph'>V času nosečnosti ni menstruacije</p>
        <p className='doc-main-paragraph'>Med nosečnostjo se sluznica maternice pod vplivom nosečniških hormonov ne lušči in ni menstrualne krvavitve. </p>

        
        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a14.webp' />

          </div>

          <div className='grid-right'>
          <p className='questiongraph'>Krvavitev v začetku nosečnosti</p>
        <p className='doc-main-paragraph'>V začetku nosečnosti se lahko pojavi blaga krvavitev ob ugnezditvi zarodka v maternični votlini. To je fiziološki – naraven pojav in ne predstavlja tveganja za to nosečnost. Krvavitev je blaga in se jo lahko zamenja za šibkejšo menstruacijo, saj se pojavi ravno v času pričakovane menstruacije.</p>

        <p className='questiongraph'>Krvavitev po spolnem odnosu</p>
        <p className='doc-main-paragraph'>Med nosečnostjo se lahko v 48 urah po spolnem odnosu pojavi blag krvav izcedek, ki je posledica krvavitve iz občutljivega predela materničnega vratu. Pod vplivom nosečniških hormonov in teže maternice je lahko maternični vrat bolj prekrvavljen, žleze na vhodu v maternico so poudarjene in ob stiku lahko pride do blage krvavitve v tem predelu. </p>

        <p className='questiongraph'>Krvavitev ob začetku poroda</p>
        <p className='doc-main-paragraph'>Ob začetku poroda se lahko pojavi blag krvav izcedek zaradi luščenja čepa in odpiranja materničnega vratu. To je normalen fiziološki pojav.</p>
        <p className='doc-main-paragraph'>Razen omenjenih krvavitev je vsaka krvavitev v nosečnosti nenormalna in je potreben pregled pri ginekologu za opredelitev vzroka krvavitve.</p>


          </div>
        </div>
        
        

        <div id="vag-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Vaginalni izcedek v nosečnosti</h2>
        

        <p className='questiongraph'>Normalen izcedek v nosečnosti</p>
        <p className='doc-main-paragraph'>V nosečnosti se pod vplivom delovanja hormonov poveča izločanje žlez, posledično se lahko vaginalno pojavi nekoliko povečan izcedek. Običajno je ta izcedek manjši, prozoren do bel in brez vonja.</p>
        
        <p className='questiongraph'>Kaj pa ni normalen vaginalen izcedek v nosečnosti?</p>
        <p className='doc-main-paragraph'> Če se pojavi obilen izcedek, smrdeč, sesirjen ali rumeno-zelen izcedek iz nožnice v času nosečnosti, je potreben pregled pri ginekologu, ki bo po potrebi predpisal ustrezno zdravljenje. Pregled je potreben tudi v primeru močnejšega vodenega izcedka, saj je možno odtekanje plodovnice. </p>
        
        <div id="oku-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Okužba s streptokokom skupine B</h2>
        

          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a15.webp' />

          </div>

          <div className='grid-right'>
          <p className='questiongraph'>Kaj je SGB?</p>
        <p className='doc-main-paragraph'>Bakterija streptokok skupine B (SGB) je lahko prisotna v nožnici ali črevesju nosečnice. Bakterija je običajno le prisotna (kolonizacija) in ne povzroča okužbe pri nosečnici, zato je med nosečnostjo ne zdravimo z antibiotiki. </p>
        <p className='questiongraph'>Zakaj je potreben bris na SGB v nosečnosti?</p>
        <p className='doc-main-paragraph'>Čeprav bakterija streptokok skupine B (SGB) pri materi ne povzroča okužbe, pa le-ta lahko med porodom preide na novorojenca in pri njem povzroči okužbo. Pride lahko do sepse novorojenca. Prenos bakterije z matere na otroka se med vaginalnim porodom zgodi pri polovici nosilk, invazivna okužba novorojenčka se razvije le pri 1‒2 % novorojenčkov. In čeprav je tveganje za okužbo majhno, pa je v primeru okužbe in bolezni to hud zaplet za novorojenca. Nosečnice, ki imajo prisotno bakterijo SGB, zato prejmejo preventivno antibiotično zaščito ob porodu.</p>
        <p className='questiongraph'>Kdaj se vzame bris na SGB?</p>
        <p className='doc-main-paragraph'>Za dokaz o prisotnosti bakterije odvzame izbrani ginekolog pri 35.‒37. tednov nosečnosti bris nožice, presredka in zadnjika nosečnice. V primeru pozitivnega brisa na SGB nosečnice ob porodu prejmejo antibiotično zaščito. S tem preprečimo prehod bakterije na novorojenčka in preprečimo okužbo pri njem.</p>
        <p className='questiongraph'>Kaj če se otrok rodi pred odvzemom brisa na SGB?</p>
        <p className='doc-main-paragraph'>Matere vseh novorojencev, ki so rojeni pred 37. tednom nosečnosti,  prejmejo antibiotično zaščito ob porodu. Pri prezgodaj rojenih je tveganje za okužbo s SGB povečano.</p>
        
        

          </div>
        </div>

        
        <div className='table-margin'></div>
        <h3 className='doc-main-header3'>Prezgodnji porod</h3>
        <div className='table-margin'></div>
        <p className='questiongraph'>Kdaj govorimo o prezgodnjem porodu?</p>
        <p className='doc-main-paragraph'>Nosečnost traja 40 tednov ali 280 dni. Kadar pride do poroda pred 37. tednom nosečnosti, govorimo o prezgodnjem porodu. </p>
        <p className='questiongraph'>Pomembno je, pri katerih tednih nosečnosti je prišlo do prezgodnjega poroda.</p>
        <p className='doc-main-paragraph'>Če se plod rodi pred 22. tednom nosečnosti, govorimo o splavu, saj razvoj ploda še ni zadosten, da bi bilo združljivo z življenjem. Po 22. tednu nosečnosti govorimo o porodu. Med 22. in 24. tednom nosečnosti je plod še tako nezrel, da so možnosti preživetja minimalne. Pri porodu med 24. in 28. tednom govorimo o ekstremno prezgodnjem porodu, pri 28. do 32. tednu o zelo prezgodnjem porodu, med 32. in 34. tednom o prezgodnjem porodu in med 34. in 37. tednom nosečnosti o pozno prezgodnjem porodu. Večina prezgodnjih porodov je pozno prezgodnjih. Pri ekstremno in zelo prezgodnjem porodu sta tveganje za umrljivost in obolevnost novorojenčka velika.</p>
        
        
        <p className='questiongraph'>Kdaj je večje tveganje za prezgodnji porod?</p>

        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Kadar je nosečnica že imela predhodni prezgodnji porod,</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Pri večplodni nosečnosti (nosečnost z dvojčki ali trojčki),</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Kadar je kratek interval med nosečnostmi. Tvegane so predvsem nosečnosti, kjer je interval med porodom in novo nosečnostjo krajši od 6 mesecev. Idealen interval med porodi je od 18 do 24 mesecev,</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Po umetni oploditvi,</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Pri ponavljajočih se spontanih splavih,</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Pri okužbah,</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Ob prirojenih nepravilnostih maternice,</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Ter drugo (podhranjenost matere, prekomerna telesna teža, zelo mlada ali starejša prvorodnica, kajenje, zloraba drog in alkohola …).</p>
        </div>
        <p className='questiongraph'>Pri veliko primerih prezgodnjega poroda ni znanega dejavnika tveganja.</p>
        <p className='questiongraph'>Ali obstajajo kakšni ukrepi za zmanjšanje tveganja za prezgodnji porod?</p>
        <p className='doc-main-paragraph'>Pravi vzrok prezgodnjega poroda pogosto ni znan. Poznamo nekaj metod za zmanjšanje tveganja za prezgodnji porod.</p>
               
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'><span className='green-word'>Progesteron.</span> Progesteron je hormon, ki ima pomembno vlogo med nosečnostjo. V primeru krajšanja materničnega vratu se svetuje jemanje progesteronskih vaginalnih tablet. </p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'><span className='green-word'>Cerklaža.</span> Cerklaža je operacija, pri kateri nastavimo zanko okoli materničnega vratu in jo zavežemo. S tem se maternični vrat dodatno podpre in se preprečuje njegovo spontano odpiranje. Cerklaža se odveže pri 37 tednih nosečnosti oziroma ob začetku poroda.</p>
        </div>

        <div id="nose-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Nosečniška sladkorna bolezen</h2>
        

          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a16.webp' />

          </div>

          <div className='grid-right'>
          <p className='questiongraph'>Kaj je nosečnostna sladkorna bolezen?</p>
        <p className='doc-main-paragraph'>To je sladkorna bolezen, ki se pojavi le med nosečnostjo. Visok krvni sladkor v nosečnosti prehaja do ploda in vpliva na njegovo zdravje. Prepoznava nosečnostne sladkorne bolezni je zelo pomembna, saj lahko z ustreznimi ukrepi vplivamo na dober potek nosečnosti in zdravje otroka. </p>
        <p className='questiongraph'>Po porodu se krvni sladkor povrne na normalno raven.</p>
        <p className='doc-main-paragraph'>Vendar pa je pri ženskah, ki so imele v nosečnosti sladkorno bolezen, večje tveganje za pojav sladkorne bolezni tipa 2 pozneje v življenju, zato je pri njih svetovan zdrav življenjski slog vse življenje (kar se pravzaprav svetuje vsem ljudem).</p>
        
        

          </div>
        </div>

        
        
        
        <p className='questiongraph'>Zakaj je potrebno imeti urejen krvni sladkor?</p>
        <p className='doc-main-paragraph'><span className='green-word'>Vpliv na porod</span> - Visok sladkor v krvi matere preko posteljice prehaja do ploda. Plod prehitro pridobiva na telesni teži in njegova rast je pospešena. Raste predvsem obseg trupa. Pri teh plodovih je večje tveganje za zaplete pri porodu kot je carski rez in operativno dokončanje poroda, saj je večje tveganje za zastoj ramen pri porodu. Ker je glavica normalno velika, se ob prehodu skozi porodni kanal lahko novorojenček zatakne pri ramenih. Treba je izvesti manevre, da se rame porodijo, ob tem se lahko zlomi ključnica ali poškodujejo živci v tem predelu. Ob ustrezno urejenem krvnem sladkorju je prirast teže ustrezen in ni povečane nevarnosti za zaplete.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Prezgodnji porod</span> - Zaradi neurejene nosečniške sladkorne bolezni lahko pride do prezgodnjega poroda. </p>
        <p className='doc-main-paragraph'><span className='green-word'>Vpliv na povišan krvni tlak v nosečnosti</span> - Neurejena sladkorna bolezen poveča tveganje za gestacijsko hipertenzijo in preeklampsijo. </p>
        <p className='doc-main-paragraph'><span className='green-word'>Razvoj pljuč</span> - Visok sladkor v krvi ploda lahko zavre pravilen razvoj pljuč in novorojenčki mater, ki ima nosečniško sladkorno bolezen, imajo lahko več težav z dihanjem v prvih dneh življenja.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Smrt ploda v maternici</span> - Nezdravljen in nenadzorovan povišan krvni sladkor poveča tveganje za smrt ploda v maternici.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Dolgoročen vpliv</span> - Otroci, ki so bili med nosečnostjo izpostavljeni visokemu krvnemu sladkorju, imajo večje tveganje za debelost in sladkorno bolezen tipa 2 pozneje v življenju.</p>




        <h3 className='doc-main-header3'>Merjenje krvnega sladkorja</h3>
        <div className='table-margin'></div>

        <p className='questiongraph'>Zakaj je potrebno tolikokrat meriti krvni sladkor?</p>
        <p className='doc-main-paragraph'>Skrbno spremljanje sladkorja in upoštevanje navodil diabetologa in ginekologa sta pri nosečniški sladkorni bolezni (NSB) izjemno pomembna. Z ustreznim vodenjem se zmanjšajo ali celo preprečijo zapleti. Svetuje se 4x dnevno merjenje in beleženje krvnega sladkorja. </p>
        <p className='questiongraph'>Krvni sladkor se meri 4x dnevno.</p>
        <p className='doc-main-paragraph'>Sladkor se izmeri na tešče in 90 minut po glavnih obrokih (zajtrk, kosilo, večerja). Vrednosti sladkorja naj bodo znotraj predpisanih mej: na tešče do 5,3 mmol/l in do 6,6 mmol/l 90 minut po obrokih.</p>
        <p className='questiongraph'>Kako vemo, da je pri nosečnici prisotna nosečniška sladkorna bolezen (NSB)?</p>
        <p className='doc-main-paragraph'>V nosečnosti se v sklopu rednega predporodnega varstva pri vseh nosečnicah izvedejo presejalni testi za NSB. Prvo presejanje se izvede ob prvem pregledu v nosečnosti (8.‒12. teden), pogleda se krvni sladkor na tešče. Drugo v drugem trimesečju (24.‒28.tednov) z OGTT (oralnim glukoznim tolerančnim testom).</p>
        <p className='questiongraph'>Prvo testiranje za nosečniško sladkorno bolezen</p>
        <p className='doc-main-paragraph'>Prvo testiranje se izvede ob prvem pregledu v nosečnosti (8.‒12. teden). Izmeri se koncentracija glukoze v plazmi nosečnice na tešče. Pomembno je, da se nosečnica na preiskavo ustrezno pripravi. Večer pred odvzemom krvi naj nosečnica zaužije lahko večerjo in od 22. ure dalje ne uživa hrane ali sladkane pijače. Pije lahko le navadno vodo. Nosečniška sladkorna bolezen je potrjena, če je koncentracija glukoze v krvi na tešče 5,1 mmol/l ali več.</p>
        <p className='questiongraph'>Testiranje v drugem trimesečju – OGTT</p>
        <p className='doc-main-paragraph'>Presejanje je v drugem trimesečju (24.‒28.tednov): testiranje se izvede pri vseh nosečnicah, ki so imele ob prvem testiranju normalno koncentracijo glukoze v krvi na tešče in če nosečnica nima predobstoječe sladkorne bolezni (sladkorna bolezen tipa 1 ali 2). To preiskavo imenujemo oralno glukozni tolerančni test (OGTT). </p>
        <p className='questiongraph'>Kako poteka testiranje OGTT?</p>
        <p className='doc-main-paragraph'>Test traja približno tri ure. Prvi vzorec venske krvi se odvzame na tešče, če je glukoza 5,1 mmol/l ali več, je potrjena diagnoza NSB. V tem primeru nosečnica testa ne nadaljuje, saj je diagnoza NSB potrjena. Če je glukoza na tešče pod diagnostično vrednostjo (pod 5,1 mmol/l), nosečnica prejme tekočino, ki vsebuje 75 g glukoze. Običajno se 75 g sladkorja raztopi v 250 do 300 ml navadne vode, ki jo nosečnica popije po požirkih v 5 minutah. Za lažje zaužitje se lahko doda limonin sok. Sledi odvzem krvi čez 60 minut, če je raven glukoze v krvi 10 mmmol/l ali več, se potrdi diagnoza NSB, sicer se ponovno odvzame kri čez 60 minut (oziroma 120 minut od zaužitja glukoze). Pri glukozi 8,5 mmol/l in več se potrdi diagnoza NSB. Ob glukozi pod 8,5 mmol/l nosečnica nima NSB. Test se zaključi.</p>
        <p className='questiongraph'>Normalne in patološke vrednosti glukoze v krvi pri oralnem glukoznem tolerančnem testu (OGTT) med nosečnostjo.</p>
 
        <div className='table-margin'></div>
        <Table dataSource={dataSource3} columns={columns2} />
        <div className='table-margin'></div>

        <div id="cep-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Cepljenje nosečnic proti oslovskemu kašlju</h2>
        

          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a17.webp' />

          </div>

          <div className='grid-right'>
          <p className='questiongraph'>Kaj je oslovski kašelj?</p>
        <p className='doc-main-paragraph'>Oslovski kašelj (pertussis) je bakterijska okužba dihal. Pri odraslih se kaže kot dražeč kašelj, ki traja več tednov. Bistveno bolj kot odrasli so ob okužbi ogroženi otroci, predvsem do šestega meseca starosti. <span className='green-word'>Novorojenčki in dojenčki ob okužbi običajno ne kašljajo, vendar imajo dihalne stiske, prenehajo dihati in pomodrijo.</span> Ob tem je veliko tveganje za zaplete okužbe, kot so pljučnica, okužba možganov (encefalopatija) in celo smrt. Večina okuženih dojenčkov potrebuje bolnišnično zdravljenje. </p>
        <p className='questiongraph'>Cepljenje proti oslovskem kašlju v nosečnosti</p>
        <p className='doc-main-paragraph'>Če se nosečnica cepi proti oslovskemu kašlju, s tem zaščiti sebe, predvsem pa zaščiti novorojenčka v prvih tednih življenja. Nosečnica po cepljenju tvori protitelesa, ki prek posteljice prehajajo na plod in ga pasivno zaščitijo. Cepljenje se priporoča po 24. tednu nosečnosti in v vsaki nosečnosti, ker zaščita ni trajna. </p>
        <p className='questiongraph'>Ali je cepivo varno?</p>
        <p className='doc-main-paragraph'>Cepivo je varno za nosečnico in plod. Cepivo je mrtvo in ne more povzročiti bolezni. Ne obstaja samostojno cepivo proti oslovskemu kašlju, obstaja le združeno cepivo, ki vključuje tudi zaščito pred tetanusom in davici. Cepljenje nosečnic je brezplačno. </p>
        

          </div>
        </div>

        


        <h2 className='doc-main-subheader'>Cepljenje nosečnic proti gripi</h2>
        <p className='questiongraph'>Zakaj se je smiselno cepiti proti gripi v nosečnosti?</p>
        <p className='doc-main-paragraph'>Nosečnice imajo povečano tveganje za zaplete ob prebolevanju gripe. Svetuje se cepljenje kadarkoli med nosečnostjo. Cepivo je v nosečnosti varno in za nosečnice brezplačno. </p>
        

       
        <div id="molar-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Molarna nosečnost</h2>
        
        <p className='questiongraph'>Kaj je to molarna nosečnost?</p>
        <p className='doc-main-paragraph'>Molarna nosečnost ali mehurčasta snet ali hidatidozna mola je redek zaplet v nosečnosti. Pride do nenormalne rasti trofoblastnih celic. Te celice so običajno del zdrave posteljice, kadar pa pride do nenadzorovane in povečane rasti trofoblastnih celic, govorimo o molarni nosečnosti. Poznamo dve vrsti molarnih nosečnosti: popolna mola (placentarno tkivo zajema celotno maternično votlino, vidne so tekočinske ciste, ni ploda) in delna mola (posteljica je delno iz zdravega in delno iz molarnega tkiva. Lahko je prisoten plod. Pogosto pride do splava v zgodnji nosečnosti). <span className='green-word'>Molarno nosečnost je treba ustrezno odstraniti iz maternice, saj lahko vodi v redke oblike rakavih obolenj.</span></p>
        <p className='questiongraph'>Kako pride do molarne nosečnosti?</p>
        <p className='doc-main-paragraph'>Vzrok za molarno nosečnost je običajno oploditev jajčne celice z dvema spermijema ali oploditev jajčne celice brez dednega materiala (prazno jajčece). Pri popolni moli se očetovi kromosomi kopirajo, materini manjkajo ali ne delujejo. Pri delni molarni nosečnosti so materini kromosomi prisotni, vendar sta prisotna dva seta očetovih kromosomov.</p>
        

       
        <div id="holes-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Holestaza v nosečnosti</h2>
        

        <p className='doc-main-paragraph'><span className='green-word'>Holestaza v nosečnosti je obolenje jeter.</span> Stanje sproži močno srbenje, srbijo predvsem dlani in podplati, lahko celotna koža.</p>
        <p className='questiongraph'>Zakaj pride do obolenja jeter v nosečnosti?</p>
        <p className='doc-main-paragraph'>Vzrok za pojav holestaze v nosečnosti ni popolnoma pojasnjen. Pride do zmanjšanega ali zaustavljenega odtoka žolčnih kislin. Žolč se ne izloča v črevesje in zastaja v jetrih. Žolčne kisline posledično vstopijo v krvni obtok. Žolč je sicer normalno prisoten v prebavnih tekočinah in sodeluje pri razgradnji maščob. </p>
        <p className='doc-main-paragraph'><span className='green-word'>Zaradi povišanih žolčnih kislin lahko v nosečnosti nastanejo resni zapleti.</span> Lahko pride do prezgodnjega poroda in smrti ploda v maternici, pogostejše je prisotna mekonijska plodovnica (mekonij je prvo blato, ki ga plod izloči v plodovnico).</p>

       
        
        
        <div id="otek-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Otekle noge</h2>
       


          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a18.webp' />

          </div>

          <div className='grid-right'>
          <p className='questiongraph'>Otekanje spodnjih okončin</p>
        <p className='doc-main-paragraph'>V nosečnosti lahko pride do otekanja spodnjih okončin. Otekanje nog je v nosečnosti pogosto in običajno spontano izzveni v nekaj tednih po porodu. </p>
        <p className='questiongraph'>Zakaj otekajo noge v času nosečnosti?</p>
        <p className='doc-main-paragraph'>Vzroki za to so različni: med nosečnostjo se v telesu zadržuje več tekočine, maternica s svojo težo pritiska na vene in povzroča zastoj tekočine, na zastoj vplivajo tudi nosečniški hormoni.</p>
        

          </div>
        </div>


        
        
        
        
        <p className='questiongraph'>Nekaj ukrepov za preprečevanje otekanja:</p>
        
        
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'><span className='green-word'>Izogibati se je treba predolgemu stanju na nogah.</span> Če le lahko, se je treba usesti in dvigniti noge, občasno pomigati z gležnji. Treba je pokrčiti in sprostiti stopalo, da se pokrčijo mišice v goleni. V ležečem položaju je smiselno nekoliko dodatno dvigniti noge. Odsvetuje se dolgo sedenje z nogami navzdol. </p>
        </div>
       
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'><span className='green-word'>Gibanje.</span> Svetuje se vsaj pol ure vadbe dnevno. Priporoča se hitra hoja, pri kateri se s skrčenjem mišic goleni pomaga pri vračanju krvi iz spodnjih okončin.</p>
        </div>

        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'><span className='green-word'>Spanje na levi strani telesa.</span> Kri se iz spodnjih okončin po venah vrača nazaj do srca. Glavna žila, ki se vrača, je spodnja vena kava, ki teče nekoliko po desni strani telesa. Z ležanjem na levem boku se spodnja vena kava razbremeni.</p>
        </div>

        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'><span className='green-word'>Uporaba kompresijskih nogavic ali povojev.</span> Nogavice ali povoji se čez dan namestijo na spodnje okončine.</p>
        </div>

        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'><span className='green-word'>Uporaba lahkih oblačil.</span> Odsvetujejo se tesna oblačila, ki lahko preprečijo odtekanje krvi. Ni dobro nositi tesnih kavbojk, ki stiskajo v dimljah, ali nogavic, ki se zažamejo okoli gležnjev. </p>
        </div>

        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'><span className='green-word'>Zmanjševanje vnosa tekočine (pitja pijač) ne zmanjša otekanja!</span> Ustrezna hidracija je za zdravo nosečnost nujna. Priporoča se 2‒3 litre tekočine dnevno.</p>
        </div>

        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'><span className='green-word'>Vendar pozor:</span> V primeru izrazitega otekanja le ene noge in/ali bolečin v goleni obstaja tveganje, da je vzrok težav globoka venska tromboza (nastanek strdka). V takih primerih je nujen pregled pri ginekologu.</p>
        </div>
        
        
        
        <div id="kako-smear-section" className='thesection-div'></div>
          <h2 className='doc-main-subheader'>Kako se izračuna termin poroda</h2>
        
        <p className='doc-main-paragraph'>Termin poroda se izračuna po prvem dnevu zadnje menstruacije. Datumu prvega dne zadnje menstruacije se prišteje 7 dni in odšteje 3 mesece. To je Naegelejeva formula. Pri približno tretjini nosečnic je datum zadnje menstruacije neustrezen za oceno pričakovanega dneva poroda (PDP). To velja predvsem za nosečnice z nerednimi menstrualnimi ciklusi, za nosečnice, ki so zanosile v času dojenja, hitro po splavu ali po prenehanju jemanja oralne kontracepcije. Nekatere si datuma zadnje menstruacije ne zapomnijo. </p>
        <p className='questiongraph'>Ali velikost ploda na ultrazvoku spremeni termin poroda?</p>
        <p className='doc-main-paragraph'>Z zgodnjo ultrazvočno preiskavo se potrdi izračunan termin poroda. Le v primeru če velikost ploda ob ultrazvočni meritvi odstopa za več kot 7 dni od izračunanega datuma poroda, se termin poroda prestavi. </p>
        
        
        
        <div id="dv-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Dvojčki</h2>

          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a20.webp' />

          </div>

          <div className='grid-right'>
          <p className='doc-main-paragraph'>Dvojčki se pojavijo v 1‒2 % vseh nosečnosti. V približno dveh tretjinah so dvojčki dvojajčni, v eni tretjini enojajčni. Dvojčke delimo na bihorijske (to pomeni, da ima vsak dvojček svojo posteljico in svojo horijsko ovojnico) in monohorijske (dvojčka imata skupno posteljico in skupen horij) ter na biamnijske (vsak dvojček ima svojo amnijsko ovojnico) in monoamnijske (dvojčka imata skupno amnijsko votlino). Vsi dvojajčni dvojčki so vedno bihorijski in biamnijski (BI-BI). Enojajčni dvojčki pa so lahko bihorijski-biamnijski ali monohorijski-biamnijski (BI-BI ali MO-BI), 1 % monohorijskih je tudi monoamnijskih (MO-MO). </p>
        <p className='doc-main-paragraph'><span className='green-word'>Za kakšne vrste dvojčka gre, se določi z ultrazvočno preiskavo v zgodnji nosečnosti.</span> Oceni se stik amnijskih membran in lege posteljic. Najlažje je ocenjevanje, če sta dvojčka različnih spolov, tedaj gre zagotovo za dvojajčno nosečnost.</p>
        

          </div>
        </div>
        
        <div id="tr-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Trojčki</h2>


          <div className='the-grid'>
          <div className='grid-left mobilekop'>
            <img alt='blogimg' className='grid-img' src='/Images/a21.webp' />

          </div>

          <div className='grid-left'>
          <p className='doc-main-paragraph'>Nosečnost s trojčki je zelo redka. Večina trojčkov je trojajčnih in imajo vsak svoj horij in amnij. Lahko vidimo tudi nosečnost, kjer gre za kombinacijo monohorijskih dvojčkov in posameznega trojčka. To so visoko tvegane nosečnosti, do poroda pride predčasno.</p>



          </div>

          <div className='grid-right deskotop'>
            <img alt='blogimg' className='grid-img' src='/Images/a21.webp' />

          </div>
        </div>
        
        
        

        <div id="tel-smear-section" className='thesection-div'></div>
          <h2 className='doc-main-subheader'>Telovadba v nosečnosti</h2>
        
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/p1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p className='doc-main-paragraph'><span className='green-word'>Med nosečnostjo je pomembno vzdrževanje telesne kondicije.</span> Svetuje se redna telesna aktivnost. </p>
       
        <p className='doc-main-paragraph'>To je pomembno za dobro počutje in dober metabolizem. Ženske, ki so v nosečnosti fizično dejavne, so tudi v boljši pripravljenosti za fizični napor med porodom. Raziskave so pokazale, da imajo ženske, ki so v nosečnosti fizično dejavne in nadaljujejo redno vadbo, manjše tveganje za razvoj nosečniške sladkorne bolezni, manjše tveganje za dokončanje poroda s carskim rezom ali vakuumsko ekstrakcijo ter imajo krajši čas okrevanja po porodu. Telesna vadba zmanjša tudi tveganje za poporodno depresijo. </p>
        <p className='questiongraph'>Kdaj telovadba ni svetovana?</p>
        <p className='doc-main-paragraph'>Telesna dejavnost mora biti prilagojena ali je celo odsvetovana ob zapletih nosečnosti (npr.: grozeč prezgodnji porod, predležeča posteljica …) ali ob predobstoječih boleznih matere.</p>
        <p className='questiongraph'>Kakšna je primerna telesna aktivnost?</p>
        <p className='doc-main-paragraph'>V nosečnosti se svetuje nadaljevanje telesne dejavnosti, ki jo je ženska izvajala pred zanositvijo, s prilagoditvijo nosečnosti. Prilagoditev je potrebna zaradi normalnih anatomskih in fizioloških sprememb nosečnosti. <span className='green-word'>Absolutno se odsvetujejo vsi kontaktni športi, pri katerih bi lahko prišlo do udarcev </span>(borilni športi in podobno), ter športi, kjer se meče žoga z veliko silo (squash, rokomet …). <span className='green-word'>Odsvetujejo se ekstremne športne dejavnosti</span>, kot je maratonski tek, kajti pri povečanem telesnem naporu začne telo ščititi vitalne organe matere, poveča se prekrvavitev prek srca in možganov ter zmanjša prekrvavitev maternice. Zaradi slabše prekrvavitve maternice lahko pride do zastojev rasti ploda, smrti ploda v maternici, splava ali prezgodnjega poroda. Zato se svetuje, da je športna dejavnost prilagojena nosečnosti, tudi višini nosečnosti. Svetuje se zvišanje srčnega pulza do okoli 130 utripov/ minuto, ob tem, da je še možen pogovor med vadbo. V primeru hude zadihanosti se je potrebno ustaviti, nadihati in nato z vadbo nadaljevati. Ženske, ki so pred nosečnostjo tekle, lahko v nosečnosti nadaljujejo s tekom. Ženskam, ki pred nosečnostjo niso bile fizično dejavne, se v nosečnosti priporočajo daljši sprehodi, predvsem po glavnih obrokih. </p>
        <p className='doc-main-paragraph'>Prav tako se <span className='green-word'>odsvetuje izvajanje vaj z daljšim ležanjem na hrbtu</span>, saj povečana in težka maternica ob ležanju na hrbtu pritiska na žilo, ki vrača kri v srce (spodnja vena kava) in pride do slabšega polnjenja srca s krvjo, slabšega iztisa krvi iz srca, kar občuti nosečnica kot slabost in omotico. Odsvetuje se skakanje (npr.: trampolini) ter sunkoviti in silni gibi. </p>
        <p className='doc-main-paragraph'><span className='green-word'>Odsvetovana je tudi vadba v pregretih prostorih</span> (npr.: hot joga), saj povišana telesna temperatura lahko škoduje plodu. Ob vadbi je pomembna dobra hidracija telesa.</p>
        <p className='questiongraph'>Pri intenzivnejših športnih dejavnostih je treba skrbeti za ustrezen kalorijski vnos, da ne prihaja do izgube telesne teže.</p>
        <p className='questiongraph'>Koliko pa lahko trenira vrhunski športnik?</p>
        <p className='doc-main-paragraph'>Pri vrhunskih in ekstremnih športnikih je potrebna individualna prilagoditev. Najboljše se je posvetovati z izbranim zdravnikom/ ginekologom. Vedno se priporoča aktivnost do 80% oz 90% obremenitve. Nikoli se ne pretirava s telesno aktivnostjo.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Vadbo v času nosečnosti je treba prekiniti, če se pojavi:</span> vaginalna krvavitev, bolečina v trebuhu, boleči krči v trebuhu, odtekanje plodovnice, težko dihanje že pred začetkom vadbe, omotica, glavobol, bolečina v prsnem košu, šibkost mišic s slabim ravnotežjem, drugo.</p>

        <p className='questiongraph'>Telesna aktivnost v nosečnosti:</p>

        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Fizična dejavnost je izjemno pomembna za zdravo nosečnost.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Ob odsotnosti nosečniških ali medicinskih zapletov je fizična dejavnost v nosečnosti varna in zaželena.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Na splošno velja, da naj bo vadba v nosečnosti prilagojena tako, da se nosečnica zadiha le toliko, da se lahko ob vadbi še pogovarja.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Priporoča se vsaj 150 minut zmerno intenzivne vadbe na teden oziroma vsaj 20 min na dan med nosečnostjo in v poporodnem obdobju.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Med telesno dejavnostjo je pomembna skrb za dobro hidracijo.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Z redno vadbo se lažje vzdržuje primerna telesna teža oziroma prirast telesne teže v nosečnosti.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Odsvetujejo se ekstremni šport, kontaktni športi, visoko intenzivne vadbe.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Odsvetuje se vadba v pregretih prostorih ali v vroči vodi (izogibanje pregrevanju telesa).</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Odsvetuje se gibanje na visoki nadmorski višini (nad 2500 metrov n. v.) ali globoki potopi.</p>
        </div>
       
       
        <div id="bolec-smear-section" className='thesection-div'></div>
          <h2 className='doc-main-subheader'>Bolečina v križu</h2>
        

          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a22.webp' />

          </div>

          <div className='grid-right'>
          <p className='doc-main-paragraph'>V nosečnosti pride do povečanja telesne teže, kar povzroči spremembo težišča telesa in vodi v ukrivljanje hrbtenice, v tako imenovano lordozo. Spremembe vodijo v povečano silo na sklepe in hrbtenico. Posledično več kot 60 % nosečnic občuti bolečino v spodnjem delu hrbtenice. </p>
        <p className='questiongraph'>Kakšni so ukrepi za zmanjšanje bolečine v križu?</p>
        <p className='doc-main-paragraph'>S krepitvijo trebušnih mišic in mišic hrbta se zmanjša tveganje za bolečine med nosečnostjo. V kolikor so bolečine močne in se stopnjujejo, je smiselna napotitev na fizioterapevtsko obravnavo. </p>
        

          </div>
        </div>
        
     
     
        <div id="vroc-smear-section" className='thesection-div'></div>
          <h2 className='doc-main-subheader'>Vročina in nosečnost</h2>
        

          <div className='the-grid'>
          <div className='grid-left mobilekop'>
            <img alt='blogimg' className='grid-img' src='/Images/a23.webp' />

          </div>

          <div className='grid-left'>
          <p className='questiongraph'>Ali gre lahko nosečnica v savno ali v vročo kopel?</p>
        <p className='doc-main-paragraph'>Pregrevanje telesa v nosečnosti ni priporočeno. Odsvetuje se uporaba savn in vročih kopeli. </p>
        <p className='questiongraph'>Kaj pa sončenje?</p>
        <p className='doc-main-paragraph'>Odsvetuje se pregrevanje telesa na soncu v poletnih mesecih. Ne priporoča se dolgotrajno sončenje. Ob tem je treba poudariti, da je malo sončenja priporočljivo, da telo izdela dovolj vitamina D. Pregrevanje telesa je najbolj odsvetovano v prvem trimesečju, saj lahko vodi v spontane splave ali napake pri plodu. Ob vročih poletnih mesecih se svetuje, da se nosečnice zadržujejo v senci in ohlajenih prostorih ter ob tem skrbijo za ustrezno hidracijo telesa.</p>
        


          </div>

          <div className='grid-right deskotop'>
            <img alt='blogimg' className='grid-img' src='/Images/a23.webp' />

          </div>
        </div>

        

        <div id="preh-smear-section" className='thesection-div'></div>
          <h2 className='doc-main-subheader'>Prehrana v nosečnosti</h2>
        
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/30.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p className='doc-main-paragraph'>V nosečnosti se je treba redno prehranjevati. Priporoča se 3‒5 obrokov dnevno. Prehrana naj bo uravnotežena, z dovolj proteini, vlakninami. Naj ne bo premastna, preslana ali presladka. Odsvetujejo se doma pripravljeni mesni izdelki (domače salame …) in mehki siri. Izbirajo naj se polnozrnati izdelki, ki ne povzročajo glikemičnih vrhov v krvi. Odsvetuje se uživanje belega sladkorja in sladic iz belega sladkorja.</p>
        
        <p className='questiongraph'>Dve preprosti pravili:</p>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Izogibajte se vnaprej pripravljeni hrani.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Če je le možno, uživajte sveže pripravljena živila.</p>
        </div>

        <p className='doc-main-paragraph'><span className='green-word'>Nosečnost ne zahteva posebne diete.</span> Dieta je občasno potrebna, kot je dieta ob nosečniški sladkorni bolezni, jetrna dieta ob povišanih jetrnih testih in podobno. Nosečnost gotovo ni čas za hujšanje, saj pomanjkanje posameznih hranil in snovi lahko vodi v nizko porodno težo, prezgodnji porod in druge zaplete v nosečnosti. </p>
        <p className='doc-main-paragraph'><span className='green-word'>Med nosečnostjo je izjemno pomembna ustrezna hidracija.</span> Uživa naj se predvsem voda ali nesladkan čas, da ob tekočinskem vnosu ne prihaja do nepotrebnega kalorijskega vnosa (kot so sadni sokovi, sladkane pijače, gazirane pijače ...). </p>
        <p className='questiongraph'>Hrana, ki se odsvetuje v nosečnosti:</p>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>uživanje v naprej pripravljene hrane, kot so sveže paštete, majoneza, mesni narezki, mesni in ribji nadevi, in sicer zaradi tveganja za razvoj škodljivih mikroorganizmov v njih;</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>uživanje surovih (tudi sušenih, prekajenih) rib, školjk in drugih morskih sadežev;</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>uživanje surovega mesa, kot je tatarski biftek, carpaccio, manj pečeno meso (rare, medium rare pečeno meso). Meso naj bo dobro prepečeno (well-done);</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>uživanje sirov s plesnijo;</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>uživanje surovih jajc;</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>uživanje gob.</p>
        </div>
        <p className='questiongraph'>Zakaj se v nosečnosti določena vrsta hrane odsvetuje?</p>
        <p className='doc-main-paragraph'>Pri surovem mesu je povečano tveganje za zastrupitev z bakterijami, kot so salmonela, kampilobakter, virusi, kot sta hepatitis A in E, ter paraziti, kot je toksoplazmoza. Prav tako je tveganje za okužbe večje pri uživanju surovih rib in drugih morskih sadežev, ob tem je tudi tveganje za vnos višjih koncentracij živega srebra. V surovem mleku in mlečnih izdelkih so lahko prisotne bakterije, na primer listeria. Siri s plesnijo lahko vsebujejo tudi zdravju škodljive plesni, ki jih ne opazimo in sproščajo toksine. Gobe so težko prebavljive, in ker je v nosečnosti prebava upočasnjena, lahko težko prebavljiva hrana povzroča prebavne težave.</p>


        <div id="preb-smear-section" className='thesection-div'></div>
          <h2 className='doc-main-subheader'>Prebava v nosečnosti</h2>
        

        <p className='questiongraph'>Prebava v nosečnosti lahko povzroča težave.</p>
        <p className='doc-main-paragraph'>V nosečnosti se prebava pod vplivom hormonov upočasni. Hormon progesteron relaksira gladke mišice v prebavnem sistemu, kar upočasni prebavo hrane. Upočasni se tudi praznjenje želodca. To lahko vodi v <span className='green-word'>zaprtost, napenjanje in prebavne motnje</span>. Z rastjo maternice se poveča pritisk na želodec, kar lahko vodi v vračanje kisline v požiralnik in povzroči <span className='green-word'>zgago</span>. Z rastjo ploda mati poveča potrebo po hranilih, kar posledično vodi v <span className='green-word'>povečan apetit matere</span>. Nosečnice pogosto jedo prevelike obroke hrane in prehitro. V primeru zaprtosti in ob tem večjega pritiska navzdol zaradi teže noseče maternice je večje tveganje za nastanek <span className='green-word'>hemoroidov</span>. </p>
        <p className='questiongraph'>V nosečnosti sta pomembna ustrezna hidracija in uživanje zadostne količine vlaknin. Priporoča se uživanje manjših obrokov večkrat dnevno.</p>

        

        <div id="dod-smear-section" className='thesection-div'></div>
          <h2 className='doc-main-subheader'>Prehrambeni dodatki v nosečnosti</h2>
        

        <h3 className='doc-main-header3'>Folna kislina</h3>
        <p className='doc-main-paragraph'>Z raziskavami so dokazali, da je prenizka raven folne kisline pri materi povezana z napakami pri plodu, kot sta razcep ustnice (tako imenovana zajčja ustnica) in spina bifida. Folna kislina je vitamin skupine B. Človeško telo vitamina B9 ne proizvaja, treba ga je zaužiti v ustreznih količinah, zato je ustrezno nadomeščanje folne kisline v 3 mesecih pred zanositvijo in v prvem trimesečju izjemno pomembno. Svetuje se dodatek 400 րց folne kisline na dan. </p>
        <h3 className='doc-main-header3'>Vitamin D</h3>
        <p className='doc-main-paragraph'>Priporoča se vnos 600‒800 IU na dan v času nosečnosti. Vitamin D je med nosečnostjo pomemben, saj sodeluje pri absorpciji kalcija, ki je potreben za razvoj plodovih kosti in zob. Vitamin D ima pomembno vlogo tudi pri delovanju imunskega sistema in zmanjšuje zaplete nosečnosti, kot je preeklampsija. Odsvetuje se jemanje prevelikih količin vitamina D (več kot 4000 IU na dan).</p>
      
        <div id="prip-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Priporočen prirast telesne teže v nosečnosti</h2>
        
        <p className='questiongraph'>Svetovan prirast telesne teže v nosečnosti je odvisen od indeksa telesne mase (ITM) nosečnice pred zanositvijo. </p>
        <p className='doc-main-paragraph'>Pri ženskah z normalnim ITM (18‒25 cm/kg) se svetuje pridobitev 11‒16 kg med nosečnostjo. Pri znižanem ITM (pod 18 cm/kg) se svetuje pridobitev 13‒18 kg, pri prekomernem ITM (25‒29) 7‒11 kg in pri debelosti (ITM nad 30) 5‒9 kg. Ob ustrezni pridobitvi telesne teže v nosečnosti se zmanjša tveganje za zaplete, kot so preeklampsija, nosečnostna sladkorna bolezen in prezgodnji porod. Poleg pridobivanja telesne teže v nosečnosti sta zelo pomembna zdrava prehrana in ustrezna telesna dejavnost. </p>
        

        <div id="las-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Lasje v nosečnosti in po porodu</h2>
        
        <p className='questiongraph'>Lasje po porodu mi obilno izpadajo, pa tako lepi so bili v času nosečnosti!</p>
        <p className='doc-main-paragraph'>Na rast in izpadanje las vplivajo hormonske spremembe. Med nosečnostjo visoka raven estrogena spodbuja rastno fazo las (anagena faza), zaradi česar lasje manj izpadajo, lasje so gosti, bujni in sijoči. Po porodu raven estrogena na hitro upade, posledično številni lasni folikli preidejo iz rastne faze v fazo mirovanja (katagena faza). Sledi povečano izpadanje las (telogena faza). <span className='green-word'>Izpadanje las po porodu (imenovano tudi poporodna aloplecija) je pogost pojav, ki prizadene številne novopečene matere</span>. Poleg hormonskih sprememb na povečano izpadanje las v tem obdobju vpliva tudi pomanjkanje ustreznih hranljivih snovi, predvsem zmanjšana raven cinka in vitaminov skupine B, pomanjkanje spanja in slabša nega las.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Izpadanje las je ponavadi prehodno in spontano izzveni po šestih do dvanajstih mesecih.</span> V vmesnem obdobju lahko ženske skrbijo za ustrezno prehrano, spanje, zmanjšujejo stres in uporabljajo nežne preparate za nego las.</p>

        
        <div id="strije-smear-section" className='thesection-div'> </div>
          <h2 className='doc-main-subheader'>Strije</h2>
       

          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a24.webp' />

          </div>

          <div className='grid-right'>
          <p className='questiongraph'>Kaj so strije?</p>
        <p className='doc-main-paragraph'>Strije (striae gravidarum) so pasovi spremenjene kože, ki potekajo po trebuhu, stegnih, dojkah, lahko tudi po zadnjici in drugih delih telesa. Ob pojavu so rdeče, modre do vijoličaste barve, sčasoma počasi zbledijo do belo-srebrnkaste barve. </p>
        <p className='questiongraph'>Ali strije bolijo?</p>
        <p className='doc-main-paragraph'>Običajno strije niso boleče, vendar lahko nekatere nosečnice občutijo srbečico in neprijeten občutek na prizadetih predelih kože.</p>
        <p className='questiongraph'>Zakaj se strije pojavijo?</p>
        <p className='doc-main-paragraph'>Strije nastanejo kot posledica pridobivanja telesne teže, saj se koža v nosečnosti pod vplivom hormonskih sprememb in ob rasti ploda hitro razteza. Hormonske spremembe vplivajo na kolagen v koži. Če je kolagena premalo, se elastična vlakna zamenjajo z manj kakovostnimi, tanjšimi vlakni, kar se na koži kaže kot strije. Elastičnost kolagena je odvisna od starosti in tudi genetske predispozicije. Na nastanek strij vpliva nizka starost nosečnic, visok indeks telesne mase, veliko povečanje telesne teže v nosečnosti (več kot 15 kg), velik plod in večplodna nosečnost. </p>
        

          </div>
        </div>
        <p className='questiongraph'>Ali lahko preprečimo nastanek strij?</p>
        <p className='doc-main-paragraph'>Za zdaj še ne znamo zanesljivo preprečiti nastanka ali zdraviti strij. Z nekaterimi metodami lahko njihov nastanek in razvoj omilimo, morda preprečimo. Za preprečevanje sta predvsem pomembna ustrezna hidracija in zdrava prehrana, bogata z vitamini, minerali in vlakninami. Ob tem je smiselna uporaba krem in olj, ki kožo na problematičnih predelih nahranijo in pomagajo pri vlaženju in izboljšanju elastičnosti kože. Ob nanašanju krem je pomembna ustrezna nežna masaža, ki izboljša prekrvavitev in elastičnost kože. Če so strije zelo moteče, je možno poznejše lasersko zdravljenje. </p>
        <p className='doc-main-paragraph'><span className='green-word'>VENDAR POZOR:</span> Ker se kreme in olja vpijajo v kožo in naredijo dodatno plast, s tem zmanjšajo prehod ultrazvočnih žarkov prek trebušne stene. Pomembno je, da nosečnice nekaj dni pred pregledom ne nanašajo izdelkov na trebuh in tako omogočijo čim boljšo preglednost ob ultrazvočni preiskavi ploda.</p>



        <div id="preg-smear-section" className='thesection-div'></div>
          <h2 className='doc-main-subheader'>Pregledi v nosečnosti</h2>
        
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/27.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p className='doc-main-paragraph'>Med nosečnostjo je predvidenih deset rednih pregledov, tri ultrazvočne preiskave in pregled za presejanje na kromosomske napake pri plodu. </p>
        <p className='doc-main-paragraph'>Pregledi so predvideni v 8.‒12. tednu, 16., 24., 28., 32., 35., 37., 38., 39. in 40. tednu nosečnosti.</p>
        <p className='doc-main-paragraph'>Prvi pregled nosečnice opravi primarni ginekolog v času do 12. tedna nosečnosti in opredeli stopnjo ogroženosti nosečnosti. Po potrebi napoti nosečnico v sekundarni ali terciarni center. Ponovni sistematični preventivni pregledi so okvirno v 24., 28., 35. in 40. tednu nosečnosti in jih opravi izbrani ginekolog. V 20.‒21. tednu nosečnosti se opravi ultrazvočni pregled morfologije ploda. Preostalih pet sistematičnih pregledov pri zdravi nosečnici z majhnim tveganjem za zaplete lahko v 16., 32., 37., 38. in 39. tednu nosečnosti opravi diplomirana babica, če je tveganje povečano ali babica ne more opraviti pregleda, ga opravi ginekolog. </p>
        
        <h3 className='doc-main-header3'>do 12. tedna nosečnosti </h3>
        <p className='doc-main-paragraph'>Na prvem pregledu se izda in izpolni materinska knjižica.  </p>
        <p className='doc-main-paragraph'><span className='green-word'>ANAMNEZA:</span> Nosečnico se vpraša o boleznih v družini, o boleznih in zdravljenju pri njej, o jemanju redne terapije, alergijah, preteklih transfuzijah in operacijah. Povpraša se tudi o preteklih ginekoloških težavah, o predhodnih splavih, nosečnostih in porodih. </p>
        <p className='doc-main-paragraph'><span className='green-word'>SVETOVANJE:</span> Ginekolog priporoča nosečnici skrb za zdravo prehrano, dobro hidracijo, ustrezno gibanje, pogovorita se o ustreznem pridobivanju telesne teže v nosečnosti. Povpraša jo tudi o uporabi alkohola, tobaka in drog ter vse odsvetuje v času nosečnosti.</p>
        <p className='doc-main-paragraph'><span className='green-word'>DUŠEVNO ZDRAVJE:</span> Ginekolog z nosečnico spregovori o obporodni depresiji in anksioznosti, ki sta v nosečnosti pogosti. Postavi vprašanja, ali je morda nosečnica žrtev domačega nasilja, in ji svetuje o možnostih ukrepanja. Pri tem uporabi standardizirane vprašalnike za presejanje na depresivne in anksiozne motnje, odvisnosti in nasilje v družini. Preveri, ali nosečnica prejema folno kislino in vitamin D. Če ju nosečnica še ne prejema, ji to svetuje. Izmerita se telesna teža in krvni tlak ter vpiše telesna višina nosečnice.</p>
        <p className='doc-main-paragraph'>Opravi se ginekološki pregled z brisom materničnega vratu, če je ta po smernicah potreben (zadnji izvid starejši od treh let ali zadnji izvid APC-N ali več).</p>
        <p className='doc-main-paragraph'>Ultrazvočna preiskava:</p>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Določi se število zarodkov (enojček, dvojčki, trojčki). </p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Prikaže se zarodek in zarodkov srčni utrip ter izmeri dolžino teme‒trtica zarodka (CRL).  </p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Iskanje morebitnih nepravilnosti maternice, adneksov ali drugih sprememb v spodnjem delu trebuha. </p>
        </div>
        <p className='questiongraph'>Laboratorijske preiskave, ki se opravijo v začetku nosečnosti: </p>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>hemogram;</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>krvni sladkor na tešče – presejanje na nosečnostno sladkorno bolezen;</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>krvna skupina, Rh D in ICT; </p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>serološke preiskave na toksoplazmozo, sifilis, HIV (anti-HIV), hepatitis B (določitev HBsAg); </p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>urinske preiskave (osnovna analiza, sediment, urinokultura). </p>
        </div>
        <p className='doc-main-paragraph'>Nosečnici se ponudi presejalna preiskava za kromosomske napake in zgodnjo morfologijo pri plodu v prvem trimesečju (ultrazvočna preiskava z merjenjem nuhalne svetline in biokemični test). </p>
        
        <h3 className='doc-main-header3'>16. teden nosečnosti  </h3>
        <p className='doc-main-paragraph'>Nosečnico se povpraša o počutju in morebitnih težavah. </p>
        <p className='doc-main-paragraph'>Izmerita se telesna teža in krvni tlak.</p>
        <p className='doc-main-paragraph'>Preveri se srčni utrip ploda.</p>
        <p className='doc-main-paragraph'>Napoti se na laboratorijske preiskave pred naslednjim preventivnim pregledom.</p>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Hemogram. </p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Serološke preiskave na toksoplazmozo.</p>
        </div>
        <h3 className='doc-main-header3'>Pregled morfologije ploda - 19. - 23. teden nosečnosti</h3>
        <p className='doc-main-paragraph'>Morfologija ploda – plod se pregleda po organskih sistemih </p>
        <p className='doc-main-paragraph'>Ocenijo se plodova rast, položaj posteljice in količina plodovnice </p>
        <h3 className='doc-main-header3'>24. teden nosečnosti </h3>
        <p className='doc-main-paragraph'>Nosečnico se povpraša o počutju in morebitnih težavah. </p>
        <p className='doc-main-paragraph'>Izmerita se telesna teža in krvni tlak.</p>
        <p className='doc-main-paragraph'>Preveri se srčni utrip ploda.</p>
        <p className='doc-main-paragraph'>Izmeri se razdalja simfiza‒fundus (vrh) maternice pri nosečnici. Tako se oceni, ali je velikost maternice in s tem ploda ustrezna. </p>
        <p className='doc-main-paragraph'>Nosečnica prejme vprašalnik za presejanje na depresivne in anksiozne motnje, odvisnost in nasilje v družini.</p>
        <p className='doc-main-paragraph'>Napotitev na laboratorijske preiskave pred naslednjim pregledom.</p>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Urin.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Pri RhD-negativnih nosečnicah se določi RhD genotip ploda iz proste plodove DNK iz materine krvi in kontrolni ICT. </p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Presejanje za nosečnostno sladkorno bolezen (OGTT). </p>
        </div>
        <h3 className='doc-main-header3'>28. teden nosečnosti </h3>
        <p className='doc-main-paragraph'>Nosečnico se povpraša o počutju in morebitnih težavah. </p>
        <p className='doc-main-paragraph'>Izmerita se telesna teža in krvni tlak.</p>
        <p className='doc-main-paragraph'>Preveri se srčni utrip ploda.</p>
        <p className='doc-main-paragraph'>Izmeri se razdalja simfiza‒fundus (vrh) maternice pri nosečnici. Tako se oceni, ali je velikost maternice in s tem ploda ustrezna. </p>
        <p className='doc-main-paragraph'>Aplicira se antiD-IgG zaščita pri RhD neg. nosečnicah, pri katerih je predviden plodov RhD fenotip pozitiven in imajo negativen izvid ICT. </p>
        <p className='doc-main-paragraph'>Napoti se na laboratorijske preiskave pred naslednjim pregledom.</p>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Urin</p>
        </div>
        <h3 className='doc-main-header3'>32. teden nosečnosti </h3>
        <p className='doc-main-paragraph'>Nosečnico se povpraša o počutju in morebitnih težavah. </p>
        <p className='doc-main-paragraph'>Izmerita se telesna teža in krvni tlak. </p>
        <p className='doc-main-paragraph'>Preveri se srčni utrip ploda. </p>
        <p className='doc-main-paragraph'>Izmeri se razdalja simfiza‒fundus (vrh) maternice pri nosečnici. Tako se oceni, ali je velikost maternice in s tem ploda ustrezna. </p>
        <p className='doc-main-paragraph'>Nosečnica prejme vprašalnik za presejanje na depresivne in anksiozne motnje, odvisnost in nasilje v družini.</p>
        <p className='doc-main-paragraph'>Napotitev na laboratorijske preiskave pred naslednjim pregledom.</p>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Hemogram.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Urin.</p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Serološke preiskave na toksoplazmozo.</p>
        </div>
        <h3 className='doc-main-header3'>35. teden nosečnosti </h3>
        <p className='doc-main-paragraph'>Nosečnico se povpraša o počutju in morebitnih težavah. </p>
        <p className='doc-main-paragraph'>Izmerita se telesna teža in krvni tlak.</p>
        <p className='doc-main-paragraph'>Preveri se srčni utrip ploda.</p>
        <p className='doc-main-paragraph'>Ultrazvočna preiskava za oceno plodove rasti (35.‒37. t. n.). </p>
        <p className='doc-main-paragraph'>Odvzem brisa na streptokok B (35.‒37. t. n.), </p>
        <p className='doc-main-paragraph'>Napotitev na laboratorijske preiskave pred naslednjim pregledom.</p>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Urin</p>
        </div>
        <h3 className='doc-main-header3'>37., 38., 39. in 40. teden nosečnosti </h3>
        <p className='doc-main-paragraph'>Nosečnico se povpraša o počutju in morebitnih težavah.  </p>
        <p className='doc-main-paragraph'>Izmerita se telesna teža in krvni tlak.  </p>
        <p className='doc-main-paragraph'>Posname in odčita se CTG.</p>
        <p className='doc-main-paragraph'>Izmeri se razdalja simfiza‒fundus (vrh) maternice pri nosečnici. Tako se oceni, ali je velikost maternice in s tem ploda ustrezna. </p>
        <p className='doc-main-paragraph'>Napotitev na laboratorijske preiskave pred naslednjim pregledom.</p>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Urin</p>
        </div>
        <div id="ulr-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Ultrazvoki v nosečnosti</h2>
        
        <p className='doc-main-paragraph'>V času nosečnosti so predvidene tri ultrazvočne preiskave, ki so del sistematičnega pregleda, in dodatna ultrazvočna preiskava za presejanje za kromosomopatije pri plodu.</p>
        
        
        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a25.webp' />

          </div>

          <div className='grid-right'>
          <h3 className='doc-main-header3'>Ultrazvočna preiskava se opravi ob prvem pregledu pri ginekologu.</h3>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Določi se število zarodkov (enojček, dvojčki, trojčki ...). </p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Prikaže se zarodek in zarodkov srčni utrip ter izmeri dolžino teme‒trtica zarodka (CRL). </p>
        </div>
        <div className='bullet-roww fr'>
          <div className='bullet-wrapper'><div className='greene-bullet'></div></div>
          <p className='doc-main-paragraph'>Iščejo se morebitne nepravilnosti maternice, adneksov ali drugih sprememb v spodnjem delu trebuha. </p>
        </div>

          </div>
        </div>
        
       
       
       
        <h3 className='doc-main-header3'>UZ PREGLED MORFOLOGIJE PLODA – 19.‒23. teden nosečnosti </h3>
        <p className='doc-main-paragraph'>Morfologija ploda: plod se natančno ultrazvočno pregleda. Pregled poteka v standardnih presekih. Treba je videti točno določene strukture. Odstopanja se natančno analizirajo. Če izbrani ginekolog postavi sum na nepravilnost, nosečnico napoti v sekundarni ali terciarni center. </p>
        <p className='doc-main-paragraph'><span className='green-word'>Ocena plodove rasti</span> – izmerijo se biparietalni premer, obseg glavice, obseg trebuha in dolžina stegnenice. Z meritvami se izračuna krivulja rasti.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Položaj posteljice</span> – posteljica lahko leži na sprednji, zadnji ali stranski steni maternice. Vseeno je, na kateri steni leži, pomembno je, da se oceni oddaljenost posteljice od materničnega vratu. Če posteljica leži prek notranjega materničnega ustja ali blizu njega, govorimo o predležeči posteljici (placenta previja).</p>
        <p className='doc-main-paragraph'><span className='green-word'>Količina plodovnice</span> – najpogosteje se ocenjuje najgloblji žep plodovnice. Lahko se meri tudi indeks plodovnice, pri katerem izmerimo navpične žepe plodovnice v štirih koncih maternice. Pri premalo plodovnice (oligohidramnij) je najgloblji žep plodovnice 2 cm. Najpogostejši vzrok je odtekanje plodovnice zaradi razpoka plodovih ovojev, drugi je nezadostno delovanje posteljice, redkeje nepravilnosti sečil. Prevelika količina plodovnice (polihidramnij) je lahko blaga (žep meri 8‒11 cm), zmerna (12‒15 cm) ali huda (več kot 16 cm). Prevelika količina plodovnice nastane, kadar plod izloča preveč seča (npr. pri sladkorni bolezni) ali požira manj plodovnice (nepravilnosti pri plodu). Pogosto vzrok za polihidramnij ni znan.</p>
        <h3 className='doc-main-header3'>Ultrazvočna preiskava za oceno plodove rasti – 35.–37. teden nosečnosti</h3>
        <p className='doc-main-paragraph'>Izmerijo se obseg plodove glave, trebuha in dolžina stegnenice. Iz meritev računalniški sistem izračuna okvirno težo ploda. Pregleda se količina plodovnice.</p>
        <h3 className='doc-main-header3'>DODATNA ULTRAZVOČNA PREISKAVA: 11 0/7–13 6/7 tednov nosečnosti</h3>
       
       
        <p className='questiongraph'>Ali je uporaba ultrazvoka v zgodnji nosečnosti varna?</p>
        <p className='doc-main-paragraph'>O varnosti uporabe ultrazvoka v nosečnosti je bilo opravljenih veliko raziskav. Po podatkih je uporaba ultrazvoka v nosečnosti varna in ni povezana z neugodnimi izidi za nosečnico ali plod, prav tako ni povezana s slabim nevrološkim ali intelektualnim razvojem otroka ali rakavimi obolenji. Pri ultrazvočni preiskavi UZ val potuje skozi tkiva, se na tkivih sipa in odbija nazaj proti sondi, ki odbite valove zazna in iz njih sestavi sliko. </p>
       
        

        
        
        
        <div id="nuh-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Kaj je nuhalna svetlina</h2>
        
        <p className='doc-main-paragraph'>Nuhalna svetlina (NS) je izmerjena debelina žepa tekočine pod kožo ploda na zatilju. Gre za tekočino, ki se na zatilni regiji nabere med mehkimi tkivi, ki pokrivajo hrbtenico in kožo. Pri plodovih s kromosomsko napako ali prirojeno anomalijo je nuhalna svetlina lahko povečana (pri Downovem sindromu v 75 %). Načeloma velja, da večja kot je NS, večje je tveganje za Downov sindrom (trisomija 21). NS je povečana tudi pri plodovih s trisomijo 18. in 13. kromosoma ter pri nekaterih drugih kromosomopatijah, nekaterih genetskih sindromih in pri večjih srčnih napakah. </p>

        <p className='questiongraph'>Kdaj se opravi nuhalno svetlino?</p>
        <p className='doc-main-paragraph'>Preiskavo se opravi med 11. tednom in 0 dni ter 13. tednom in 6 dni. Gre za ultrazvočno preiskavo ploda, kjer se med pregledom izmeri debelina žepa in naredi zgodnja morfologija ploda. Oceni se tudi frekvenca bitja srca pri plodu.</p>
       
        <p className='questiongraph'>Zakaj je potreben dvojni hormonski test (DHT)?</p>
        <p className='doc-main-paragraph'>Če meritvi nuhalne svetline dodamo še dvojni hormonski test (beta HCG in PAPP-A) iz krvi matere, se zanesljivost izračuna za odkrivanje Downovega sindroma poveča na 90 %. Če izračunom dodamo še podatek o prisotnosti nosne kosti in pretokov skozi žile, se zanesljivost testa še dodatno poveča.</p>
       

        
        
        <div id="rhd-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Rh-D negativne nosečnice</h2>
        


        <p className='questiongraph'>Kaj sploh je RhD skupina?</p>
        <p className='doc-main-paragraph'>Na človeških rdečih krvnih celicah (eritrocitih) so prisotni antigeni. Poznanih je več kot 400 različnih antigenov. Med najpomembnejšimi je RhD antigen. Če na rdečih krvnih celicah RhD ni prisoten, govorimo o RhD negativni krvni skupini, to ima okoli 15 % ljudi. </p>
       
       
        <p className='questiongraph'>Zakaj je potrebno vedeti kakšna je RhD skupina?</p>
        <p className='doc-main-paragraph'>Če v kri RhD negativne matere pride  RhD pozitivna kri ploda, zazna telo matere neznan antigen in prične tvoriti protitelesa proti njemu. To se lahko zgodi pri RhD negativni nosečnici in nosi plod, ki ima RhD pozitivne rdeče krvne celice. Ta protitelesa materi ne škodujejo, saj ona nima antigena, na katerega bi se protitelesa vezala. Ta protitelesa pa prehajajo preko posteljice do ploda in se lahko vežejo na njegove antigene (če je plod RhD pozitiven) in okvarijo njegove rdeče krvne celice. Posledično rdeče krvne celice ploda razpadejo, pride do slabokrvnosti pri plodu, kar pa lahko vodi tudi v njegovo smrt. Običajno pride do stika krvi šele proti koncu nosečnosti ali ob porodu. Telo matere potrebuje nekaj časa, da izdela protitelesa, tako da je ogrožen šele RhD pozitiven plod v naslednji nosečnosti. Zato je pomembno, da RhD negativno nosečnico zaščitimo in preprečimo tvorbo protiteles. Nosečnice prejmejo zaščito v 28. t. n. </p>
       
        <p className='questiongraph'>Ali zaščito potrebujejo vse RhD negativne nosečnice?</p>
        <p className='doc-main-paragraph'>Zaščito potrebujejo le RhD negativne nosečnice, ki nosijo RhD pozitiven plod. Da pa zaščito prejmejo le tiste nosečnice, ki so jo potrebujejo, se v 26. do 28. tednu nosečnosti odvzame kri matere in iz njene krvi določi, kakšno krvno skupino ima njen otrok. To določijo iz drobcev plodove DNK, ki kroži po materini krvi. </p>
       
        <p className='doc-main-paragraph'><span className='green-word'>RhD negativne matere prejmejo zaščito</span> v 28. tednu nosečnosti in po rojstvu RhD pozitivnega otroka ali po večjih posegih v nosečnosti (amniocenteza, biopsija horionskih resic, lasersko zdravljenje, krvavitev v nosečnosti).</p>

      </div>
    </div>
  )
}

export default Mid 
