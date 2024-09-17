import React from 'react'

const Telo = () => {
    return (
        <div className='pregnancy-main plod-main'>
            <div className='pr-video-wrapper wider-video'>
                <video autoPlay loop muted playsInline className="hero-video ">
                    <source src="/Videos/28.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className='pr-content-wrapper'>
                <h2 className='firstm-header centered marginpr'>Spremembe v telesu, simptomi in previdnostni ukrepi </h2>
                <p className='firstm-paragraph centered'>Nosečnost prinaša vrsto telesnih prilagoditev in izzivov, od sprememb v kardiovaskularnem sistemu in koži do obvladovanja gestacijskega diabetesa in večplodnih nosečnosti. Ključnega pomena je razumeti te razvoje in se vključiti v zdravstvene prakse za negovalno potovanje. Ta jedrnat vodnik želi osvetliti ključne vidike nosečnosti in bodoče matere opremiti z bistvenim znanjem za zdravo in obveščeno prenatalno izkušnjo.</p>
                <button className='arrow-button'>Preberi več<span class="arrow"></span></button>
            </div>
        </div>
    )
}

export default Telo
