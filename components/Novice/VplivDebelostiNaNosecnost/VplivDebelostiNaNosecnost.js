import React from 'react'
import './VplivDebelostiNaNosecnost.css'

const VplivDebelostiNaNosecnost = () => {
  return (
    <div className='novica-main'>
            <div className='novica-wrapper'>
                <div className='novice-img-wrapper'>
                    <img alt='novica-img' className='novica-inner-img' src='/Images/novica2.webp' />
                </div>

                <div className='novica-content-wrapper'>
                    <div className='clock-row marginrow'>
                        <img alt='clock-img' className='clock-img' src='/Images/calendar.png' />
                        <p className='novica-date'>15/06/2024</p>
                    </div>
                    <div className='keywords-row'>
                    <div className="matg keyword">Estrogen</div>
                                <div className="matg keyword">Maščobne celice</div>
                                <div className="matg keyword">Hormonsko neravnovesje</div>

                    </div>
                    <p className='blog-hint'>ZANOSITEV</p>
                    <p className='novica-left-header'>Ali lahko debelost vpliva na zanositev?</p>
                    <p className='novica-left-paragraph'>Ženski hormon, kot je estrogen, nastaja pretežno v jajčniku. Dodatno pa ga proizvajajo maščobne celice. Pri debelosti, kjer je maščobnih celic veliko, v njih nastaja tudi veliko estrogena. Povišan estrogen vpliva na ovulacijo in povzroča hormonsko neravnovesje. Pri debelosti je večje tveganje za nereden menstrualni cikel, povečano je tveganje za neplodnost, večje je tveganje za spontan splav in zaplete v nosečnosti (kot je nosečnostna sladkorna bolezen, nosečnostna hipertenzija, prezgodnji porod in drugo). Debelost se pojjavlja pri sindromu policističnih jajčnikov.</p>
                    
                </div>

            </div>
        </div>
  )
}

export default VplivDebelostiNaNosecnost
