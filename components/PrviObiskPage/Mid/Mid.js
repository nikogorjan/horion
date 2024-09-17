

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
          <div className='cas-branja'> Čas branja: 4min</div>
        </div>

        <h1 className='doc-main-header'>Prvi obisk pri ginekologu</h1>
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/p3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div id="pap-smear-section" className='thesection-div'>
        </div>
        <h2 className='doc-main-subheader'>Kaj pomeni PAP bris? </h2>


        <p className='doc-main-paragraph'>Odvzem in pregled celic z materničnega vratu se imenuje po grškem zdravniku Georgiosu Papanicolaou, ki je leta 1940 v New Yorku vpeljal to metodo.</p>

        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a3.webp' />

          </div>

          <div className='grid-right'>
            <p className='questiongraph'>Kako se odvzame PAP bris?</p>
            <p className='doc-main-paragraph'>Ob ginekološkem pregledu ginekolog pregleda zunanje spolovilo, s ginekološkim kljunom pregleda nožnico in maternični vrat. Nato s palčko in drobno krtačko pridobi celice iz materničnega vratu in jih namaže na stekelce. Te celice na stekelcu nato pod mikroskopom pregledajo citologi in jih opišejo. Celice so lahko normalne, vidno je lahko vnetje, zadebelitev celic, drugo ali pa celice niso tipičnih oblik, so spremenjene, v skrajnih primerih rakave. Glede na ocenjene spremembe se svetuje kontrolni PAP bris ali nadaljna napotitev na kolposkopijo.</p>

            <p className='questiongraph'>Kaj je kolposkopija?</p>
            <p className='doc-main-paragraph'>Kolposkopija je metoda, s pomočjo katere ginekolog pod posebnim mikroskopom, ki se imenuje kolposkop, pregleda maternični vrat. Ob tem uporabi posebne raztopine, ki omogočijo prepoznavanje sprememb na materničnem vratu. Po potrebi iz predela, kjer so vidne spremembe, vzame košček tkiva (odščip) in ga pošlje na histološki pregled. To imenujemo biopsija. Tam natančno ocenijo za kakšne celice gre: ali so normalne, ali spremenjene (spremembe so lahko nizke stopnje ali visoke stopnje).</p>


          </div>
        </div>

        <p className='questiongraph'>Zakaj PAP bris? </p>
        <p className='doc-main-paragraph'>Namen jemanja PAP brisa je iskanje predvsem spremenjenih, predrakavih celic in seveda tudi rakavih. Temu je namenjen Nacionalni program Zora, ki omogoča pregledanost vseh žensk v starosti 20‒64 let in jih na ginekološke preglede s PAP brisom tudi aktivno vabi. Glavna naloga PAP brisa je, da se najdejo začetne spremembe na materničnem vratu, ki še ne povzročajo kliničnih težav ženskam, lahko pa se te spremembe učinkovito zdravijo in tako se prepreči/zdravi rak na materničnem vratu pravočasno. </p>



        <div id="hpv-smear-section" className='thesection-div'>
        </div>
        <h2 className='doc-main-subheader'>Kaj povzroča HPV? </h2>
        <p className='doc-main-paragraph'>HPV je kratica za humani papiloma virus. To je virus, ki povzroči okužbo, običajno okužbo spolovil, rodil in predel zadnjika. Okužba poteka brez znakov bolezni in okuženi običajno ne ve, da jo ima. Opisanih je več kot 200 genskih različic HPV. Le nekateri sevi HPV so nevarni. Najnevarnejši povzročajo predrakave spremembe in raka, predvsem raka na materničnem vratu, lahko tudi nožnici, zunanjem spolovilu, zadnjiku in žrelu. Nevarnih je okoli 13 genotipov, najpogostejša sta HPV-16 in HPV-18. Od okužbe do razvoja raka običajno traja več let, tudi več deset let.</p>


        <div className='the-grid'>
          <div className='grid-left mobilekop'>
            <img alt='blogimg' className='grid-img' src='/Images/a4.webp' />

          </div>

          <div className='grid-left'>
            <p className='questiongraph'>Nekateri HPV sevi povzročajo genitalne bradavice </p>
            <p className='doc-main-paragraph'>Nekateri sevi ne povzročajo raka, lahko pa povzročajo genitalne bradavice. Pogosta povzročitelja genitalnih bradavic sta HPV-6 in HPV-11.</p>

            <p className='questiongraph'>Cepljenje najbolj učinkovito prepreči okužbo s HPV in preprečuje raka na materničnem vratu in genitalne bradavice.</p>
            <p className='doc-main-paragraph'>Okužbo s HPV lahko učinkovito preprečimo s cepljenjem proti HPV, ki ga omogoča nacionalni program cepljenja vsem osnovnošolcem v Sloveniji brezplačno. Brezplačno je cepljenje na voljo tudi za zamudnike, ki se niso še cepili, se pa še redno šolajo. Cepljenje za preostale je samoplačniško.</p>



          </div>

          <div className='grid-right deskotop'>
            <img alt='blogimg' className='grid-img' src='/Images/a4.webp' />

          </div>
        </div>



        <div id="krvavitve-smear-section" className='thesection-div'></div>
        <h2 className='doc-main-subheader'>Nepravilne krvavitve iz maternice </h2>


        <p className='doc-main-paragraph'>Nepravilne krvavitve iz maternice v rodni dobi so najpogostejši razlog za obisk ginekologa.</p>

        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a5.webp' />

          </div>

          <div className='grid-right'>
            <p className='questiongraph'>Kakšna je normalna krvavitev iz maternice v rodni dobi – menstruacija.</p>
            <p className='doc-main-paragraph'>Prvi dan menstruacije je prvi dan krvavitve. Menstruacijski cikel štejemo od prvega dne menstruacije do prvega dne naslednje menstruacije. To je dolžina cikla. Normalna dolžina ciklusa je 21–35 dni, običajno 28 dni. V času enega menstrualnega ciklusa traja krvavitev (menstruacija) normalno 3‒7 dni. Torej znotraj enega menstruacijskega cikla (običajno 28 dni) je prvih 3‒7 dni krvavitev, nato krvavitev preneha. Ko se začne nova krvavitev, je to že začetek novega ciklusa. </p>

            <p className='questiongraph'>Menstrualni koledarček</p>
            <p className='doc-main-paragraph'>Zelo se priporoča, da ženske spremljajo svoj menstrualni ciklus s pomočjo menstrualnega koledarčka. To je koledarček, kamor se lahko zapisuje, od kdaj do kdaj je prisotna menstruacija ter kako močna in boleča je. S pomočjo menstrualnega koledarčka se najlažje tudi pregleda, če menstruacija ni redna ali če se pojavljajo nepravilne krvavitve iz maternice. Na spletu obstajajo številne aplikacije, ki ponujajo menstrualne koledarčke.</p>


          </div>
        </div>

        <p className='questiongraph'>Motnje menstrualnega ciklusa – nepravilne krvavitve</p>
        <p className='doc-main-paragraph'>Motnje menstrualnega ciklusa imenujemo vse nepravilne krvavitve, ki se pojavljajo v rodni dobi. Torej nepravilne krvavitve iz maternice v času od prve (menarhe) do zadnje (menopavze) menstruacije. Motnje menstrualnega ciklusa so vse krvavitve, ki nimajo oblike rednega menstruacijskega ciklusa. Eden od najpogostejših vzrokov za nepravilno krvavitev je nosečnost, zato je vedno najprej smiselno narediti test nosečnosti. </p>
        <p className='doc-main-paragraph'>Nepravilne krvavitve lahko razdelimo glede na motnje v jakosti krvavitve (močnejše/šibkejše krvavitve), motnje v pogostosti krvavitve (pojavljajo se na prej kot 21 dni ali na več kot 35 dni), motnje v trajanju krvavitve (manj kot 1‒2 dni ali več kot 7 dni), krvavitve v sredini ciklusa, pred menstruacijo/po njej, lahko so popolnoma neredne ali pa zelo boleče. </p>
        <p className='doc-main-paragraph'>Kadar se pojavljajo nepravilne krvavitve iz maternice, je smiseln obisk ginekologa. V pomoč pri ugotavljanju nepravilnosti krvavitve bo tudi menstrualni koledarček. </p>


        <div id="kontracepcija-smear-section" className='thesection-div'></div>
        <h2 className='doc-main-subheader'>Kontracepcija</h2>

        <div className='the-grid'>
          <div className='grid-left mobilekop'>
            <img alt='blogimg' className='grid-img' src='/Images/a6.webp' />

          </div>

          <div className='grid-left'>
          <p className='doc-main-paragraph'>Kontracepcija je vsaka oblika zaščite, ki preprečuje zanositev.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Naravna metoda.</span> Lahko se uporablja tako imenovana naravna kontracepcija, pri kateri ženske spremljajo svoj menstrualni ciklus ter prek poznavanja plodnih in neplodnih dni preprečujejo zanositev. V času plodnih dni je potrebna vzdržnost od spolnih odnosov. Za ugotavljanje plodnih in neplodnih dni si lahko pomagajo z vsakodnevnim merjenjem telesne temperature takoj zjutraj.</p>
        <p className='doc-main-paragraph'><span className='green-word'>Pregradne metode.</span> Uporaba kondoma ali diafragme </p>



          </div>

          <div className='grid-right deskotop'>
            <img alt='blogimg' className='grid-img' src='/Images/a6.webp' />

          </div>
        </div>

        
      </div>

    </div>
  )
}

export default Mid 
