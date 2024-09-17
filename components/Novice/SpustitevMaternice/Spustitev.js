import React from 'react'
import './Spustitev.css'

const Spustitev = () => {
    return (
        <div className='novica-main'>
            <div className='novica-wrapper'>
                <div className='novice-img-wrapper'>
                    <img alt='novica-img' className='novica-inner-img' src='/Images/novica5.webp' />
                </div>

                <div className='novica-content-wrapper'>
                    <div className='clock-row marginrow'>
                        <img alt='clock-img' className='clock-img' src='/Images/calendar.png' />
                        <p className='novica-date'>02/07/2024</p>
                    </div>
                    <div className='keywords-row'>
                        <div className="matg keyword">Maternica</div>
                        <div className="matg keyword">Stena nožnice</div>

                    </div>
                    <p className='blog-hint'>GINEKOLOŠKO ZDRAVJE</p>
                    <p className='novica-left-header'>Spustitev maternice</p>
                    <p className='novica-left-paragraph'>Spustitev maternice, sprednje ali zadnje stene nožnice je pri ženskah precej pogosto. </p>
                    <p className='novica-left-paragraph'>Z zdrsom medeničnih organov so povezani simptomi kot je občutek tiščanja in pritiska v nožnici. Ker se najpogosteje pojavlja spust sprednje stene nožnice (40%), je z zdrsom pogosto povezano tudi uhajanje urina. V primeru zdrsa zadnje stene nožnice so prisotni simptomi spremenjene defekacije (zaprtost, oteženo odvajanje blata, redko inkontinenca blata). Lahko je otežena tudi spolnost.</p>

                    <div className='underlined-button'>
                        <a href="/dokumentacija/ginekolosko-zdravje#zdrs-smear-section">PREBERI VEČ</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Spustitev
