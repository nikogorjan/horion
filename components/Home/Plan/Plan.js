import React from 'react'
import './Plan.css'

const Plan = () => {
    return (
        <div className='plan-main'>
            <div className='firstm-wrapper'>

            <div className='plan-right mobile'>
                    <video autoPlay loop muted playsInline className="hero-video">
                        <source src="/Videos/21.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className='plan-left'>
                    <div className='firstm-content'>
                        <h2 className='firstm-header'>Kdaj obiskati ginekologa, če zanositev izostane?</h2>
                        <p className='firstm-paragraph'>Ko si par prizadeva za zanositev, je pomembno vedeti, kdaj je čas za obisk ginekologa. Če po enem letu rednih spolnih odnosov brez uporabe kontracepcije ne pride do zanositve, je priporočljiv obisk pri ginekologu. Statistike kažejo, da v prvem letu pri 80 % parov pride do zanositve, preostanek pa lahko zanosi v naslednjem letu. Pri 10-15 % parov se lahko pojavijo težave z neplodnostjo, ki so lahko posledica ženskih, moških ali kombiniranih dejavnikov.</p>
                        <button className='arrow-button'>Preberi več<span class="arrow"></span></button>
                    </div>
                </div>

                <div className='plan-right desktop'>
                    <video autoPlay loop muted playsInline className="hero-video">
                        <source src="/Videos/21.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
        </div>
    )
}

export default Plan
