import React from 'react'
import './LandingHorion.css'

const LandingHorion = () => {
    return (
        <div className='landingH-main'>
            <div className='green-blob'></div>
            <div id="hor-smear-section" className='thesection-div'></div>

            <div className='alignme widthme'>
                <div className='matg'>Horion</div>
                <h2 className='math'>Kaj je horion?</h2>
                <p className='matp'>Horion je zunanja membrana okoli ploda. To je membrana, ki obdaja plod in ga povezuje z materjo.</p>
            </div>
            <div className='horion-wrapper'>

                <div className='hvl'>
                    <video autoPlay loop muted playsInline className="horion-video">
                        <source src="/Videos/35.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='hvr'>
                    <div className='content-hwr'>
                        <p className='horion-raz'>Ponuja zaščito razvijajočemu plodu in omogoča stik z materjo</p>
                        <div className='bullet-roww fr'>
                            <div className='green-bullet'></div>
                            <p className='horion-razlaga'>Zaščita in hranjenje ploda.</p>
                        </div>
                        <div className='bullet-roww'>
                            <div className='green-bullet'></div>
                            <p className='horion-razlaga'>Omogoča ugnezditev.</p>
                        </div>
                        <div className='bullet-roww'>
                            <div className='green-bullet'></div>
                            <p className='horion-razlaga'>Podpira razvoj in rast ploda do rojstva.</p>
                        </div>
                        <div className='bullet-roww'>
                            <div className='green-bullet'></div>
                            <p className='horion-razlaga'>Prenos hranil.</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default LandingHorion
