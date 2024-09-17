import React from 'react'
import './Kajenje.css'

const Kajenje = () => {
  return (
    <div className='novica-main'>
            <div className='novica-wrapper'>
                <div className='novice-img-wrapper'>
                    <img alt='novica-img' className='novica-inner-img' src='/Images/novica6.webp' />
                </div>

                <div className='novica-content-wrapper'>
                    <div className='clock-row marginrow'>
                        <img alt='clock-img' className='clock-img' src='/Images/calendar.png' />
                        <p className='novica-date'>02/07/2024</p>
                    </div>
                    <div className='keywords-row'>
                        <div className="matg keyword">Kajenje</div>
                        <div className="matg keyword">Urinska inkontinenca</div>

                    </div>
                    <p className='blog-hint'>GINEKOLOŠKO ZDRAVJE</p>
                    <p className='novica-left-header'>Kajenje in urinska inkontinenca</p>
                    <p className='novica-left-paragraph'>Kajenje draži dihalne poti in povzroča kronični kašelj. Kašljanje in kihanje poslabšuje stresno urinsko inkontinenco.  Ob kihanju in kašljanju naraste pritisk v trebušni votlini in lahko pride do uhajanja urina. Priporoča se prenehanje kajenja. </p>

                    <div className='underlined-button'>
                        <a href="/dokumentacija/ginekolosko-zdravje#uri-smear-section">PREBERI VEČ</a>
                    </div>

                </div>

            </div>
        </div>
  )
}

export default Kajenje
