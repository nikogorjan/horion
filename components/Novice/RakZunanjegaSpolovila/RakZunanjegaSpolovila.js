import React from 'react'
import './RakZunanjegaSpolovila.css'

const RakZunanjegaSpolovila = () => {
    return (
        <div className='novica-main'>
            <div className='novica-wrapper'>
                <div className='novice-img-wrapper'>
                    <img alt='novica-img' className='novica-inner-img' src='/Images/novica1.webp' />
                </div>

                <div className='novica-content-wrapper'>
                    <div className='clock-row marginrow'>
                        <img alt='clock-img' className='clock-img' src='/Images/calendar.png' />
                        <p className='novica-date'>15/06/2024</p>
                    </div>
                    <div className='keywords-row'>
                        <div className="matg keyword">Rak</div>
                        <div className="matg keyword">Zunanje spolovilo</div>
                        <div className="matg keyword">Histopatološki pregled</div>

                    </div>
                    <p className='blog-hint'>GINEKOLOŠKO ZDRAVJE</p>
                    <p className='novica-left-header'>Rak zunanjega spolovila</p>
                    <p className='novica-left-paragraph'>Imate na zunanjem spolovilu spremembo, morda ranico, ki se ne pozdravi? Smiselno je, da spremembo pokažete svojemu ginekologu. Redko, pa vendarle, gre lahko tudi za raka zunanjega spolovila. V Sloveniji okoli 45 žensk letno zboli za rakom zunanjega spolovila. Bolezen je najpogostejša pri starejših od 80 let, manjši vrh pojavljanja pa je okoli starosti 50 let. Pri diagnozi rak zunanjega spolovila je v Sloveniji petletno preživetje zbolelih okoli 50-odstotno.</p>
                    <p className='novica-left-paragraph'>Ginekolog bo spremembo pregledal, odvzel košček tkiva in ta košček poslal na histopatološki pregled. Patolog, ki natančno pregleda odvzeto tkivo pod mikroskopom, nato postavi dokončno diagnozo. 85 odstotkov vseh malignih tumorjev zunanjega spolovila je ploščatoceličnih karcinomov. Okužba s HPV (humanim papiloma virusom), predvsem s sevi 16 in 18, je eden od glavnih vzrokov za nastanek raka.</p>
                    <p className='novica-left-paragraph'>Zdravljenje raka zunanjega spolovila običajno vključuje kombinacijo kirurškega posega in radioterapevtskega zdravljenja. Redkeje sistemsko zdravljenje.</p>

                </div>

            </div>
        </div>
    )
}

export default RakZunanjegaSpolovila
