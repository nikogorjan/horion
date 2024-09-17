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
          <div className='cas-branja'> Čas branja: 9min</div>
        </div>
        <h1 className='doc-main-header'>Poporodno obdobje</h1>
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/32.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>



        <p className='doc-main-paragraph'>Obdobje po porodu se imenuje tudi puerperij. Za čas poporodnega obdobja se običajno šteje prvih šest tednov po porodu. V tem obdobju mine veliko nosečniških sprememb, vendar številne ostanejo dlje (tudi do 12) mesecev po porodu, nekatere so celo trajne. </p>
        <p className='questiongraph'>V poporodnem obdobju prihaja do številnih telesnih sprememb:</p>
        <p className='doc-main-paragraph'>organi se vračajo v stanje pred nosečnostjo, rane se celijo, vzpostavlja se dojenje in ponovno se vzpostavlja delovanje jajčnikov. Najbolj se spreminjajo spolovila, dojke, koža, obtočila, sečila, mišice, skelet. Ob telesnih spremembah poteka tudi psihološka prilagoditev matere na novonastalo življenjsko okolje. </p>

        <p className='doc-main-paragraph'><span className='green-word'>Žensko telo po porodu potrebuje čas, da si opomore.</span> Čas za obnovo je individualen, različen od ženske do ženske. Odvisen je od genske predispozicije, vadbe, poteka nosečnosti in poroda, odvisno od tega, kateri zaporedni porod je bil, ali gre za enoplodno ali večplodno nosečnost in drugo. V povprečju velja, da telo potrebuje vsaj devet mesecev za obnovo.</p>


        <div id="tel-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Telovadba po porodu</h2>
        

          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a26.webp' />

          </div>

          <div className='grid-right'>
          <p className='questiongraph'>Vadba po porodu je pomembna za zdrav življenjski slog. </p>
        <p className='doc-main-paragraph'>Telesna vadba naj se postopno uvaja po porodu, odvisno tudi od načina poroda. Nekatere lahko začnejo s telesno vadbo že po nekaj dneh. Izjemno so pomembne vaje za krepitev mišic medeničnega dna in vaje za krepitev mišic trebušne stene. </p>
        <p className='questiongraph'>Ali se lahko z visoko intenzivno vadbo začne takoj po porodu?</p>
        <p className='doc-main-paragraph'>Redna telesna dejavnost med dojenjem dokazano izboljša srčno-žilni sistem matere. Med nosečnostjo se sprošča hormon relaksin, ki zmehča vezi matere za lažji porod. Hkrati pa mehčanje in sproščanje vezi poveča mobilnost in nestabilnost sklepov telesa, kar lahko poveča tveganje za poškodbe. Po porodu so vezi še vedno zmehčane in takojšnja intenzivna vadba ni priporočena. </p>
        <p className='doc-main-paragraph'>V prvih šestih tednih po porodu naj se začne s krajšimi sprehodi in nežno, manj intenzivno vadbo. Bolj intenzivna vadba se priporoča šele po nekaj mesecih.</p>
        

          </div>
        </div>

        

        <div id="cis-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Čišča ali lohija</h2>
        

        <p className='questiongraph'>Čišča je normalen izcedek iz maternice po porodu in je znak celjenja rane v maternici. </p>
        <p className='doc-main-paragraph'>Imenujemo jo tudi lohija. Vsebuje kri, maščobne celice, sluz, odmrlo deciduo ter včasih majhne ostanke posteljice in jajčnih ovojev. </p>
        <p className='questiongraph'>Kakšna je normalna čišča?</p>
        <p className='doc-main-paragraph'>Videz in količina čišče se sčasoma spreminjata. V prvih dneh po porodu je čišča po količini največja (250–300 ml/dan), izcedek je najmočnejši zjutraj in ob dojenju. Vonj je podoben kot pri menstruaciji. 3. in 4. dan postane čišča bolj tekoča in živordeče barve, 5. in 6. dan gostejša in rjavo obarvana, 8. in 9. dan je rumenkasta, po 9. dnevu pa ima videz serozne, belkaste in redke tekočine. </p>
        <p className='questiongraph'>Koliko časa traja čišča?</p>
        <p className='doc-main-paragraph'>Običajno traja tri tedne, lahko tudi do 6 tednov po porodu. Trajanje čišče je odvisno od velikosti in lege ležišča posteljice, krčenja maternice, dejavnosti matere. Pomembno je, da čišča ne smrdi.</p>
        <p className='doc-main-paragraph'>Dokler je prisotna čišča, se svetuje uporaba klasičnih higienskih vložkov iz bombažne vate. Vložki naj ne bodo iz umetnih snovi ali z geli. Ob tem je pomembno redno umivanje spolovila s hladno vodo večkrat dnevno. </p>

        
        <div id="dia-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Diastaza</h2>
        

        <p className='questiongraph'>Kaj je diastaza?</p>
        <p className='doc-main-paragraph'>Med nosečnostjo se premi trebušni mišici (m. rectus abdominis) lahko razmakneta, tedaj govorimo o diastazi. </p>

        <p className='questiongraph'>Ali se diastaza po porodu popravi?</p>
        <p className='doc-main-paragraph'>Po porodu se stanje izboljšuje zelo individualno. V 2‒3 dneh po porodu se mišice same povrnejo, če razmak ostaja, se svetuje, da se za izboljšanje izvajajo ustrezne vaje. Kolikšna je diastaza ter kako hitro se stanje izboljšuje, je odvisno od posamezne ženske, njenega tkiva in skrbnosti pri izvajanju vaj. Za izboljšanje stanja so lahko potrebna 2‒3 leta. </p>

        <p className='questiongraph'>Kdaj je potrebna nadaljnja napotitev?</p>
        <p className='doc-main-paragraph'>Ženske napotijo na nadaljnjo fizioterapevtsko obravnavo, če sta mišici po šestih tednih po porodu razmaknjeni za več kot 2 prsta.</p>

        

        <div id="krc-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Krčenje maternice po porodu</h2>
        
        
        <p className='doc-main-paragraph'>Maternica je ob porodu težka približno 1 kilogram; v šestih tednih se vrne na predporodno težo – okoli 70 gramov. </p>
        
        
        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a27.webp' />

          </div>

          <div className='grid-right'>
          <p className='questiongraph'>Pri ženskah, ki so večkrat rodile, se maternica krči hitreje</p>
        <p className='doc-main-paragraph'>Krči so pri ženskah, ki so večkrat rodile, v prvih dneh po porodu običajno močnejši in bolj boleči. </p>

        <p className='questiongraph'>Kako ocenimo krčenje maternice?</p>
        <p className='doc-main-paragraph'>Krčenje maternice se spremlja s tipanjem vrha maternice preko trebuha. Po porodu sega vrh maternice do popka, v dveh tednih se skrči in izgine za simfizo, tedaj se maternica preko trebuha ne tipa več. </p>

        <p className='questiongraph'>Krčenje maternice ob dojenju.</p>
        <p className='doc-main-paragraph'>Pri dojenju se sprošča hormon oksitocin, ki omogoča izločanje mleka. Oksitocin pa je hormon, ki povzroča tudi krčenje maternice, zato so ob dojenju krči maternice močnejši in bolj boleči. To je naravni mehanizem, ki predstavlja naravno zaščito pred poporodno krvavitvijo. </p>

       

          </div>
        </div>
        


        <div id="doj-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Dojenje</h2>
       


          <div className='the-grid'>
          <div className='grid-left mobilekop'>
            <img alt='blogimg' className='grid-img' src='/Images/a29.webp' />

          </div>

          <div className='grid-left'>
          <p className='questiongraph'>Kako sploh pride do nastanka mleka po porodu?</p>
        <p className='doc-main-paragraph'>Po rojstvu se naglo zniža količina estrogena in progesterona v krvi, s tem se preneha njihov zaviralni učinek na dojko, ki je preprečeval nastajanje mleka med nosečnostjo. Ta zavora včasih ni popolna in lahko do sekreta iz dojke prihaja že med nosečnostjo. Prolaktin po porodu ostaja visok in laktacija se lahko vzpostavi. Za uspešno dojenje sta pomembna dva hormona – glavni je prolaktin, ki mleko proizvaja, drugi je oksitocin, ki omogoča praznjenje dojk. Količina sproščenega prolaktina je odvisna od pogostosti, jakosti in trajanja sesanja otroka.</p>

        <p className='questiongraph'>Žensko mleko se med dojenjem spreminja. </p>
        <p className='doc-main-paragraph'>Prvo mleko je kolostrum, izloča se prvi teden po porodu in je zaradi betakarotena rumene barve. Vsebuje veliko vitaminov, mineralov in zaščitnih snovi. Prehodno mleko se izloča od 3. do 14. dne in je prehodna oblika med kolostrumom in zrelim mlekom. Zrelo mleko se začne izločati 3. teden po porodu. Mleko je belo, rahlo prozorno. Bogato je z beljakovinami, maščobami, ogljikovimi hidrati, oligosaharidi, vitamini in minerali, hormoni, encimi, rastnimi faktorji in zaščitnimi faktorji. 90 % sestave mleka je voda. </p>

        <p className='questiongraph'>Sestava mleka je pomembna za novorojenčka in sledi njegovim potrebam. </p>
        <p className='doc-main-paragraph'>Spreminja se časovno in tudi med podojem. Mleko sprva vsebuje več vode in manj maščob, nato se gosti, postaja gostejše, bolj mastno in bolj kalorično. </p>



          </div>

          <div className='grid-right deskotop'>
            <img alt='blogimg' className='grid-img' src='/Images/a29.webp' />

          </div>
        </div>



        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a28.webp' />

          </div>

          <div className='grid-right'>
          <p className='questiongraph'>Ali je potrebno dojko čim bolj izprazniti?</p>
        <p className='doc-main-paragraph'>Pomembno je, da se dojka izprazni do konca, saj tako otrok prejme potreben kalorijski vnos. Mleko je na koncu podoja gostejše, bolj mastno in bolj kalorično.</p>

        <p className='questiongraph'>Laktacija se postopno vzpostavlja prva dva tedna po porodu. </p>
        <p className='doc-main-paragraph'>Otrok takoj po porodu še ni lačen, saj ima želodček še poln plodovnice, hrano je dobival prek popkovnice. Kljub temu, se novorojenčka čim prej po porodu pristavi na dojko, saj to stimulira nastajanje mleka, spodbuja sesalni refleks in vzpostavi povezavo med materjo in novorojenčkom. Mleko nastaja postopno s potrebami otroka. Tretji dan po porodu običajno pride do navala mleka in edema dojk. </p>

        <p className='questiongraph'>Dojke so polne trde in otečene. Kaj naj naredim?</p>
        <p className='doc-main-paragraph'>Mamicam se svetuje, naj gredo pred dojenjem pod vroč tuš ali uporabijo termofor, saj s segrevanjem razširijo mlečna izvodila in mleko postane bolj tekoče, s tem se izboljša praznjenje dojk. Ob podoju je pomembna nežna masaža dojke, predvsem masaža predela, kjer je bolečina večja in se lahko tipa mlečni vozlič. Ob tem je pomembno, da se dojk dotikamo vedno s čistimi rokami, da ne pride po nepotrebnem do okužbe dojk. </p>

          </div>
        </div>


        
        
        <p className='questiongraph'>Kako naj poteka dojenje?</p>
        <p className='doc-main-paragraph'>Pri dojenju je pomembno, da otrokova usta zaobjamejo celoten areol okoli bradavice in ne samo bradavice, kajti ob prijemu prek areola otrok z usti stiska izvodila žlez in s tem ustvarja črpanje. Če z usti prime le bradavico, ni pravega iztisa mleka, ob tem pa je pritisk na bradavico tako velik, da nastajajo rane ali ragade. </p>

        <p className='questiongraph'>Kako naj negujem dojke?</p>
        <p className='doc-main-paragraph'>Po končanem dojenju se priporoča mazanje bradavice s kapljico lastnega mleka ali uporaba lanolina oziroma kreme, ki vsebuje pantenol. Nedrček naj ne vsebuje kosti in ne sme biti pretesen, saj lahko s tem ovira praznjenje dojke. Po podoju se svetuje hlajenje dojk in uporaba blaznic za dojenje. Dojk se je treba vedno dotikati s čistimi rokami in blazinice za dojke redno menjavati, da ne pride do okužbe dojk, tako imenovanega mastitisa. V tem primeru je potrebno antibiotično zdravljenje.</p>



        <div id="okr-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Okrevanje po vaginalnem porodu</h2>
        


        <p className='doc-main-paragraph'>Presredek je lahko po porodu raztegnjen, raztrgan ali prerezan. Večina poškodb se pozdravi v treh tednih. Mišični tonus se delno obnovi v šestih tednih, regeneracija traja še mesece. Spremembe se lahko povrnejo v prvotno stanje, lahko tudi ne. Svetuje se skrb za čiščenje rane s hladno vodo, večkrat na dan. </p>
        
        
        
        
        <div id="spol-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Spolni odnosi po porodu</h2>
        

        <p className='questiongraph'>Spolni odnosi so lahko boleči.</p>
        <p className='doc-main-paragraph'>Spolni odnosi so lahko po porodu sprva boleči zaradi poškodb presredka. Na boleče spolne odnose vpliva tudi suha nožnica, kar je posledica pomanjkanja estrogenov ob dojenju. </p>

        <p className='questiongraph'>Kdaj začeti s spolnimi odnosi po porodu?</p>
        <p className='doc-main-paragraph'>Spolni odnosi se po porodu odsvetujejo, vsaj dokler traja čišča oziroma krvavitev, ker v tem času najpogosteje pride do vdora bakterij iz nožnice v zgornja rodila in do vnetja. Prav tako se odsvetujejo spolni odnosi zaradi preprečevanja neželenih nosečnosti. Po porodu namreč lahko pride do ovulacije pred menstruacijo in posledično do zanositve. Priporoča se, da se spolnih odnosov vzdrži do prvega pregleda pri ginekologu pri približno 6 tednih po porodu.</p>

       
        
        
        
        <div id="car-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Okrevanje po carskem rezu</h2>
        

          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a30.webp' />

          </div>

          <div className='grid-right'>
          <p className='doc-main-paragraph'>Po carskem rezu mati in novorojenček ostaneta v porodnišnici kakšen dan ali dva več kot po vaginalnem porodu. Ker je carski rez večja operacija, pri kateri se vstopa v trebušno votlino, je okrevanje po njem daljše in potrebne je več analgetične terapije kot pri vaginalnem porodu. </p>
        <p className='questiongraph'>Kako negovati brazgotino po carskem rezu?</p>
        <p className='doc-main-paragraph'>Laparotomijsko rano na trebuhu je treba ohranjati suho. Spremljati je potrebno, da se okoli rane ne pojavi rdečina, da ne pride do bolečin ali izcedka iz rane. Ko se rana zaceli in brazgotina formira, se svetuje masaža rane v smeri brazgotine, ob tem lahko nosečnica rano maže s sredstvi za brazgotine ali z mastnimi kremami. </p>

        <p className='questiongraph'>So kakšne omejitve po carskem rezu?</p>
        <p className='doc-main-paragraph'>Prvih nekaj tednov po carskem rezu se odsvetuje dvigovanje bremen, težjih od otrokove teže. Ob bolečini se svetuje protibolečinska terapija tudi po odpustu v domače okolje.</p>


          </div>
        </div>


        
        
        <div id="men-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Menstruacija po porodu</h2>
       

        <p className='questiongraph'>Kdaj se bo vrnila menstruacija?</p>
        <p className='doc-main-paragraph'>Od dojenja je odvisno, koliko časa bo minilo do vzpostavitve normalnega delovanja jajčnikov. Povišana koncentracija prolaktina v krvi, ki se sprošča med dojenjem, zavira vzpostavitev normalnih menstrualnih ciklov. Povprečno se menstruacija pri doječih materah vrne v 9 mesecih po porodu, pri nedoječih pa v 2‒3 mesecih. </p>

        <p className='questiongraph'>Kaj pa kontracepcija?</p>
        <p className='doc-main-paragraph'>V poporodnem obdobju lahko pride do ovulacije pred prvo menstruacijo, zato so hitre in nenačrtovane zanositve v tem obdobju možne. Na prvem pregledu pri ginekologu 6 tednov po porodu se ginekolog z žensko pogovori o možnih načinih kontracepcije.</p>


      </div>
    </div>
  )
}

export default Mid 
