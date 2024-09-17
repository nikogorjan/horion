



import React from 'react';
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
          <div className='cas-branja'> Čas branja: 5min</div>
        </div>
        <h1 className='doc-main-header'>Prva menstruacija</h1>
        <video autoPlay loop muted playsInline className="prva-m-video">
          <source src="/Videos/33.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div id="prv-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Prva menstruacija – menarha</h2>
        
        <p className='doc-main-paragraph'>Prvo menstruacijo imenujemo tudi menarha. Menstruacija je normalna krvavitev iz maternice, ki se pojavlja v določenih časovnih razmikih. Prva menstruacija se običajno pojavi med 12. in 13. letom starosti.</p>


        <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a1.webp' />

          </div>

          <div className='grid-right'>
            <p className='questiongraph'>Imam menstruacijo, a se pojavlja zelo neredno.</p>
            <p className='doc-main-paragraph'>V prvem letu do treh let po menarhi so neredni menstrualni ciklusi normalen pojav. Menstruacije so v tem obdobju lahko šibke ali močne, podaljšane ali zelo kratke, lahko so zelo boleče. Menstruacija lahko traja od 2 do 8 dni, krvavitev je običajno najmočnejša drugi in tretji dan. </p>

            <p className='questiongraph'>Prva menstruacija - pa je tu že menstrualna bolečina.</p>
            <p className='doc-main-paragraph'>V prvih dneh menstruacije lahko zaradi krčenja maternice nastanejo menstrualni krči v spodnjem delu trebuha. Bolečina je običajno zmerna in spontano izzveni. Kadar pa je bolečina zelo huda in ovira vsakodnevna opravila, je smiseln obisk pri ginekologu. Ta po potrebi predpiše protibolečinsko terapijo. Prva linija izbora je običajno ibuprofen, ki je dokazano učinkovit pri menstrualni bolečini.</p>

          </div>
        </div>


        
        <p className='questiongraph'>Vse sošolke imamo že menstruacijo, jaz pa še ne</p>
        <p className='doc-main-paragraph'>Prva menstruacija se običajno pojavi med 12. in 13. letom starosti. Če menstruacije ni po 15. letu starosti ali po več kot 3 letih od začetka razvoja dojk, je potreben obisk pri pediatru ali ginekologu. Tedaj govorimo o primarni amenoreji oziroma primarni odsotnosti menstruacije in je treba iskati vzroke, zakaj se menstruacija ni pojavila. Vzroki so lahko zelo različni ‒ od odsotnosti maternice, obstrukcije iztoka menstruacij do tumorjev, bolezni ščitnice, hormonskih motenj in drugo. Menstruacija pa se lahko pojavi z zamikom tudi pri deklicah, ki se zelo intenzivno ukvarjajo s športom (npr.: z gimnastiko) ali pri zelo suhih deklicah. </p>


        <div id="raz-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Kako oceniti, koliko so razvite prsi pri dekletih?</h2>
        

        <p className='doc-main-paragraph'>Puberteta je obdobje spolnega dozorevanja. Povezana je z aktivacijo povezave možganov z jajčniki – aktivira se hipotalamično-hipofizna os, ki deluje na spolne žleze (jajčnike) in začne se intenzivno izločanje spolnih hormonov. </p>
        <p className='doc-main-paragraph'>Za oceno spolnega dozorevanja se uporablja Tannerjeva lestvica. Ocenjuje se razvoj dojk, poraščenost pazduhe, pubična poraščenost ter celoten spolni razvoj in telesna rast.</p>
        <div className='table-margin'></div>
        <Table dataSource={dataSource} columns={columns} />
        <div className='table-margin'></div>
        <Table dataSource={dataSource2} columns={columns2} />

        <div id="cep-smear-section" className='thesection-div'>
        </div>
          <h2 className='doc-main-subheader'>Cepljenje proti HPV v osnovni šoli</h2>
        
          <div className='the-grid'>
          <div className='grid-left'>
            <img alt='blogimg' className='grid-img' src='/Images/a2.webp' />

          </div>

          <div className='grid-right'>
          <p className='questiongraph'>Kaj je HPV?</p>
        <p className='doc-main-paragraph'>HPV je humani papiloma virus, ki povzroči okužbo, ki lahko postopno vodi v predrakave in rakave spremembe. Povzroči predvsem raka na materničnem vratu, redkeje tudi v nožnici, zunanjem spolovilu, zadnjiku in žrelu. S cepljenjem proti HPV lahko preprečimo 70‒90 % raka materničnega vratu in tudi več kot 90 % genitalnih bradavic. </p>

        <p className='questiongraph'>Cepljenje najbolj učinkovito prepreči okužbo s HPV in preprečuje raka na materničnem vratu.</p>

        <p className='questiongraph'>Najbolj učinkovito je cepljenje pred prvimi spolnimi odnosi.</p>

        <p className='doc-main-paragraph'>V Sloveniji se lahko redno cepijo dekleta in fantje v 6. razredu osnovne šole in tudi
fantje zamudniki, ki obiskujejo 1. in 3. letnik srednje šole. Poleg tega osnovno
zdravstveno zavarovanje v Sloveniji krije cepljenje proti HPV za vse, ki se še niso
cepili, do dopolnjenega 26. leta starosti. Za vse ostale, ki bi se želeli cepiti proti HPV,
pa je cepljenje samoplačniško. Cepljenje se opravi s številom odmerkov glede na
starost ob začetku cepljenja (za mlajše od 15 let sta dovolj dva odmerka s
presledkom najmanj 6 mesecev, za starejše so potrebni 3 odmerki: in sicer prvemu
cepljenju sledi drugo čez 2 meseca in tretje čez pol leta.</p>

          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Mid 
