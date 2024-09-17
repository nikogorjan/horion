import React from 'react'
import './Pomembnost.css'

const Pomembnost = () => {
  return (
    <div className='novica-main'>
            <div className='novica-wrapper'>
                <div className='novice-img-wrapper'>
                    <img alt='novica-img' className='novica-inner-img' src='/Images/novica9.webp' />
                </div>

                <div className='novica-content-wrapper'>
                    <div className='clock-row marginrow'>
                        <img alt='clock-img' className='clock-img' src='/Images/calendar.png' />
                        <p className='novica-date'>29/08/2024</p>
                    </div>
                    <div className='keywords-row'>
                        <div className="matg keyword">Obisk ginekologa</div>
                        <div className="matg keyword">Preprečevanje okužb</div>
                        <div className="matg keyword">Skrb za zdravje</div>


                    </div>
                    <p className='blog-hint'>GINEKOLOŠKO ZDRAVJE</p>
                    <p className='novica-left-header'>Pomembnost rednih ginekoloških pregledov</p>
                    <p className='novica-left-paragraph'>Ginekološko zdravje je ključen del splošnega zdravja vsake ženske. Redni ginekološki pregledi niso pomembni samo za obvladovanje obstoječih zdravstvenih težav, ampak tudi za preprečevanje morebitnih bolezni in odkrivanje težav v zgodnji fazi. V tem članku bomo razpravljali o tem, zakaj so ti pregledi tako bistveni in kako pogosto jih je treba opraviti.</p>

                    <p className='novica-subheader martop'>Zakaj so redni ginekološki pregledi pomembni?</p>
                    <div className='marged-row'>
                        <p className='novica-left-paragraph'><span className='bolded'>1. Zgodnje odkrivanje bolezni: </span>Ginekološki pregledi omogočajo zgodnje odkrivanje bolezni, kot so rak materničnega vratu, rak jajčnikov in druge resne zdravstvene težave. Zgodnja diagnoza pogosto pomeni večje možnosti za uspešno zdravljenje.</p>
                    </div>
                    <div className='marged-row'>
                        <p className='novica-left-paragraph'><span className='bolded'>2. Preprečevanje in obvladovanje okužb: </span>Redni pregledi omogočajo pravočasno odkrivanje in zdravljenje spolno prenosljivih okužb (SPO) ter drugih okužb, ki lahko vplivajo na reproduktivno zdravje.</p>
                    </div>
                    <div className='marged-row'>
                        <p className='novica-left-paragraph'><span className='bolded'>3. Skrb za reproduktivno zdravje: </span>Ginekološki pregledi so ključni za spremljanje zdravja reproduktivnega sistema, še posebej v obdobju nosečnosti in v času,  ko se ženska pripravlja na zanositev. Zdravnik lahko svetuje o načrtovanju družine, kontracepciji in drugih pomembnih vprašanjih.</p>
                    </div>
                    <div className='marged-row'>
                        <p className='novica-left-paragraph'><span className='bolded'>4. Obvladovanje hormonskih sprememb: </span>S staranjem ženske doživljajo različne hormonske spremembe, vključno z menopavzo. Redni pregledi pomagajo pri spremljanju teh sprememb in upravljanju simptomov, ki jih spremljajo.</p>
                    </div>
                    <div className='marged-row'>
                        <p className='novica-left-paragraph'><span className='bolded'>5. Splošno zdravje in dobro počutje: </span>Redni ginekološki pregledi so priložnost, da se pogovorite z zdravnikom o splošnem zdravstvenem stanju, vključno s težavami, kot so boleča menstruacija, neredne menstruacije ali težave z libidom.</p>
                    </div>




                    <p className='novica-subheader martop'>Kako pogosto bi morali na ginekološki pregled?</p>
                    <p className='novica-left-paragraph'>Priporočljivo je, da se ženske udeležijo ginekološkega pregleda enkrat letno, ali pogosteje, če ima zdravnik posebna priporočila glede na vaše zdravstveno stanje. Za ženske, ki so spolno aktivne, je prvi pregled priporočljiv kmalu po začetku spolne aktivnosti ali najkasneje pri 20 letih starosti, ko se v Sloveniji začne presajalni program ZORA. ZORA je presajalni program za zgodnje odkrivanje raka materničnega vratu. V sklopu programa ZORA ginekolog med rednim ginekološkim pregledom odvzame PAP bris na vsake 3 leta oz. po potrebi pogosteje.</p>

                    <p className='novica-subheader martop'>Kaj vključuje ginekološki pregled?</p>
                    <p className='novica-left-paragraph'>Tipičen ginekološki pregled vključuje pogovor o vašem zdravstvenem stanju, pregled spolovila s pomočjo inštrumentov in palpatorno ter ultrazvočni pregled (če je potrebno). Po potrebi ginekolog opravi dodatne teste. Vse to pripomore k celoviti oceni vašega reproduktivnega zdravja.</p>

                    <p className='novica-subheader martop'>Zaključek</p>
                    <p className='novica-left-paragraph'>Redni ginekološki pregledi predstavljajo temelj pri skrbi za žensko zdravje. Ne gre le za odkrivanje težav, ampak tudi za preprečevanje in pravočasno ukrepanje. Ne pozabite, da je vaše zdravje vaša odgovornost – poskrbite zanj z rednimi obiski pri ginekologu.</p>

                    
                </div>

            </div>
        </div>
  )
}

export default Pomembnost
