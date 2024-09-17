import React from 'react'
import './Plod.css'

const Plod = () => {
  return (
    <div className='pregnancy-main plod-main'>
    <div className='pr-video-wrapper wider-video'>
        <video autoPlay loop muted playsInline className="hero-video ">
            <source src="/Videos/p2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <div className='pr-content-wrapper'>
        <h2 className='firstm-header centered marginpr'>Odkrivanje čudes razvoja vašega bodočega otroka od zgodnjih tednov do trenutka rojstva je fascinantno potovanje. </h2>
        <p className='firstm-paragraph centered'>Nosečnost računamo po prvem dnevu zadnje menstruacije.</p>
        <button className='arrow-button'>Razvoj ploda po tednih<span class="arrow"></span></button>
    </div>
</div>
  )
}

export default Plod
