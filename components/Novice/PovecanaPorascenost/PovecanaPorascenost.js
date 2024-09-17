import React from 'react'
import './PovecanaPorascenost.css'

const PovecanaPorascenost = () => {
  return (
    <div className='novica-main'>
            <div className='novica-wrapper'>
                <div className='novice-img-wrapper'>
                    <img alt='novica-img' className='novica-inner-img' src='/Images/novica3.webp' />
                </div>

                <div className='novica-content-wrapper'>
                    <div className='clock-row marginrow'>
                        <img alt='clock-img' className='clock-img' src='/Images/calendar.png' />
                        <p className='novica-date'>15/06/2024</p>
                    </div>
                    <div className='keywords-row'>
                    <div className="matg keyword">Testosteron</div>
                                <div className="matg keyword">Hirzutizm</div>
                                <div className="matg keyword">PCOS</div>

                    </div>
                    <p className='blog-hint'>GINEKOLOŠKO ZDRAVJE</p>
                            <p className='novica-left-header'>Opažate povečano poraščenost po telesu?</p>
                    <p className='novica-left-paragraph'>Kadar pri ženskah opažamo povečano poraščenost telesa po moškem tipu, govorimo o hirzutizmu. Običajno nastane zaradi prevelike količine moških hormonov androgenov, predvsem testosterona. Dlake se pojavijo po obrazu, trupu in okončinah. </p>
                    <p className='novica-left-paragraph'>Ob hirzutizmu se lahko pojavijo tudi drugi znaki hiperandrogenizma: globok glas, plešavost, akne, zmanjšana velikost prsi, povečana mišična masa, povečan klitoris.</p>
                    <p className='novica-left-paragraph'>Vzroki hirzutizma je najpogosteje PCOS (sindrom policističnih jajčnikov). Lahko ga povzroča tudi  Cushingov sindrom (povečan nivo kortizola), kongenitalna adrenalna hiperplazija (nenormalna produkcija steroidnih hormonov, vključno z kortizolom in androgeni), tumorji, ki izločajo androgene hormone ali zdravila.</p>
                    <p className='novica-left-paragraph'>Potreben je obisk ginekologa ali endokrinologa za nadaljnje preiskave in zdravljenje.</p>

                </div>

            </div>
        </div>
  )
}

export default PovecanaPorascenost
