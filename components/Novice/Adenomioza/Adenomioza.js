import React from 'react'
import './Adenomioza.css'

const PovecanaPorascenost = () => {
  return (
    <div className='novica-main'>
            <div className='novica-wrapper'>
                <div className='novice-img-wrapper'>
                    <img alt='novica-img' className='novica-inner-img' src='/Images/novica4.webp' />
                </div>

                <div className='novica-content-wrapper'>
                    <div className='clock-row marginrow'>
                        <img alt='clock-img' className='clock-img' src='/Images/calendar.png' />
                        <p className='novica-date'>02/07/2024</p>
                    </div>
                    <div className='keywords-row'>
                    <div className="matg keyword">Benigna bolezen</div>
                    <div className="matg keyword">Povečana maternica</div>

                    </div>
                    <p className='blog-hint'>ZANOSITEV</p>
                    <p className='novica-left-header'>Ste že slišali za adenomiozo? Tudi ta lahko povzroča neplodnost.</p>
                    <p className='novica-left-paragraph'>Adenomioza je kronična benigna bolezen, pri kateri se žleze iz sluznice maternice preraščajo v mišični del maternice. Adenomioza se kaže s povečano maternico, nepravilnimi krvavitvami iz maternice, bolečimi menstruacijami in bolečimi spolnimi odnosi. Ena tretjina žensk z adenomiozo lahko celo nima nobenih kliničnih znakov.</p>
                    <p className='novica-left-paragraph'>Ženske z adenomiozo imajo več neuspešnih postopkov oploditve z biomedicinsko pomočjo (OBMP), manj uspešnih spontanih zanositev in več spontanih splavov. Pogosto se adenomioza pojavlja sočasno z endometriozo.</p>
   

                </div>

            </div>
        </div>
  )
}

export default PovecanaPorascenost
