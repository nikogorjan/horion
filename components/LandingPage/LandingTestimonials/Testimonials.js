'use client'

import React, { useState, useRef } from 'react';
import './Testimonials.css'

const testimonials = [
    {
        image: "/Images/Question_Mark.svg.png", // Replace with actual image path
        name: "Kaj je HPV?",
        testimonial: "HPV je humani papiloma virus, ki povzroči okužbo, ki lahko postopno vodi v predrakave in rakave spremembe. Povzroči predvsem raka na materničnem vratu, redkeje tudi v nožnici, zunanjem spolovilu, zadnjiku in žrelu. S cepljenjem proti HPV lahko preprečimo 70‒90 % raka materničnega vratu in tudi več kot 90 % genitalnih bradavic. Cepljenje najbolj učinkovito prepreči okužbo s HPV in preprečuje raka na materničnem vratu. Najbolj učinkovito je cepljenje pred prvimi spolnimi odnosi. Smiselno se je cepiti že v osnovni šoli. Cepljenje je priporočeno tako za deklice kot za dečke od 9. leta starosti. V Sloveniji je brezplačno cepljenje proti HPV v državnem programu cepljenja omogočeno v 6. razredu osnovne šole. Brezplačno cepljenje je na voljo tudi za zamudnike, ki se še niso cepili, do 26. leta starosti. Cepljenje za preostale je samoplačniško."
    },
    {
        image: "/Images/Question_Mark.svg.png", // Replace with actual image path
        name: "Kaj je kolposkopija?",
        testimonial: "Kolposkopija je metoda, s pomočjo katere ginekolog pod posebnim mikroskopom, ki se imenuje kolposkop, pregleda maternični vrat. Ob tem uporabi posebne raztopine, ki omogočijo prepoznavanje sprememb na materničnem vratu. Po potrebi iz predela, kjer so vidne spremembe, vzame košček tkiva (odščip) in ga pošlje na histološki pregled. To imenujemo biopsija. Tam natančno ocenijo za kakšne celice gre: ali so normalne, ali spremenjene (spremembe so lahko nizke stopnje ali visoke stopnje)."
    },
    {
        image: "/Images/Question_Mark.svg.png", // Replace with actual image path
        name: "Kdaj h ginekologu, če ne zanosim?",
        testimonial: "V enem letu rednih spolnih odnosov, kar pomeni 2‒3-krat na teden, zanosi okoli 80 % parov. Preostalih 5‒10 % zanosi v drugem letu, težave pri zanositvi lahko pričakujemo pri 10‒15 % populacije. Vzrok za neplodnost je približno v eni tretjini ženski dejavnik, v eni tretjini moški dejavnik in pri eni tretjini kombinacija obeh (pri obeh je zmanjšana sposobnost zanositve, skupno imata težave z zanositvijo, ki vodijo v neplodnost). Če po enem letu rednih spolnih odnosov brez zaščite ne pride do zanositve, je potreben pregled pri osebnem ginekologu, ki lahko par nadalje napoti v center za zdravljenje neplodnosti."
    },
    {
        image: "/Images/Question_Mark.svg.png", // Replace with actual image path
        name: "Zakaj je potreben bris na SGB v nosečnosti?",
        testimonial: "Čeprav bakterija streptokok skupine B (SGB) pri materi ne povzroča okužbe, pa le-ta lahko med porodom preide na novorojenca in pri njem povzroči okužbo. Pride lahko do sepse novorojenca. Prenos bakterije z matere na otroka se med vaginalnim porodom zgodi pri polovici nosilk, invazivna okužba novorojenčka se razvije le pri 1‒2 % novorojenčkov. In čeprav je tveganje za okužbo majhno, pa je v primeru okužbe in bolezni to hud zaplet za novorojenca. Nosečnice, ki imajo prisotno bakterijo SGB, zato prejmejo preventivno antibiotično zaščito ob porodu."
    },
    {
        image: "/Images/Question_Mark.svg.png", // Replace with actual image path
        name: "Kaj je nosečnostna sladkorna bolezen?",
        testimonial: "To je sladkorna bolezen, ki se pojavi le med nosečnostjo. Visok krvni sladkor v nosečnosti prehaja do ploda in vpliva na njegovo zdravje. Prepoznava nosečnostne sladkorne bolezni je zelo pomembna, saj lahko z ustreznimi ukrepi vplivamo na dober potek nosečnosti in zdravje otroka."
    },
    {
        image: "/Images/Question_Mark.svg.png", // Replace with actual image path
        name: "Kako se izračuna termin poroda?",
        testimonial: "Termin poroda se izračuna po prvem dnevu zadnje menstruacije. Datumu prvega dne zadnje menstruacije se prišteje 7 dni in odšteje 3 mesece. To je Naegelejeva formula. Pri približno tretjini nosečnic je datum zadnje menstruacije neustrezen za oceno pričakovanega dneva poroda (PDP). To velja predvsem za nosečnice z nerednimi menstrualnimi ciklusi, za nosečnice, ki so zanosile v času dojenja, hitro po splavu ali po prenehanju jemanja oralne kontracepcije. Nekatere si datuma zadnje menstruacije ne zapomnijo."
    },
    {
        image: "/Images/Question_Mark.svg.png", // Replace with actual image path
        name: "Ali lahko preprečimo nastanek strij?",
        testimonial: "Za zdaj še ne znamo zanesljivo preprečiti nastanka ali zdraviti strij. Z nekaterimi metodami lahko njihov nastanek in razvoj omilimo, morda preprečimo. Za preprečevanje sta predvsem pomembna ustrezna hidracija in zdrava prehrana, bogata z vitamini, minerali in vlakninami. Ob tem je smiselna uporaba krem in olj, ki kožo na problematičnih predelih nahranijo in pomagajo pri vlaženju in izboljšanju elastičnosti kože. Ob nanašanju krem je pomembna ustrezna nežna masaža, ki izboljša prekrvavitev in elastičnost kože. Če so strije zelo moteče, je možno poznejše lasersko zdravljenje."
    },
    {
        image: "/Images/Question_Mark.svg.png", // Replace with actual image path
        name: "Kdaj se opravi nuhalno svetlino?",
        testimonial: "Preiskavo se opravi med 11. tednom in 0 dni ter 13. tednom in 6 dni. Gre za ultrazvočno preiskavo ploda, kjer se med pregledom izmeri debelina žepa in naredi zgodnja morfologija ploda. Oceni se tudi frekvenca bitja srca pri plodu."
    },
    {
        image: "/Images/Question_Mark.svg.png", // Replace with actual image path
        name: "Kako sploh pride do nastanka mleka po porodu?",
        testimonial: "Po rojstvu se naglo zniža količina estrogena in progesterona v krvi, s tem se preneha njihov zaviralni učinek na dojko, ki je preprečeval nastajanje mleka med nosečnostjo. Ta zavora včasih ni popolna in lahko do sekreta iz dojke prihaja že med nosečnostjo. Prolaktin po porodu ostaja visok in laktacija se lahko vzpostavi. Za uspešno dojenje sta pomembna dva hormona – glavni je prolaktin, ki mleko proizvaja, drugi je oksitocin, ki omogoča praznjenje dojk. Količina sproščenega prolaktina je odvisna od pogostosti, jakosti in trajanja sesanja otroka."
    },
    {
        image: "/Images/Question_Mark.svg.png", // Replace with actual image path
        name: "Zakaj je v menopavzi nožnica suha?",
        testimonial: "V postmenopavzi (obdobju po menopavzi) se v sluznici in koži izgubljajo kolagenska in elastična vlakna, kar vodi v sušenje in luščenje zunanjih plasti epitelija. Zmanjša se krvni pretok v podkožju in pod sluznico. Zaradi pomanjkanja estrogena se stanjšajo stene sluznic, kar lahko vodi v oslabljeno odpornost sluznic ter pogostejše okužbe nožnice in sečnega mehurja. Nožnica postane suha."
    },
];



const Testimonials = () => {
    // State to keep track of the active testimonial index
    const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
    const testimonialParagraphRef = useRef(null); // Reference to the testimonial paragraph
    const lineRef = useRef(null); // Reference to the testimonial paragraph
    const imageRef = useRef(null); // Reference to the testimonial paragraph
    const nameRef = useRef(null); // Reference to the testimonial paragraph

    const [formState, setFormState] = useState({ email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });
    
        const result = await res.json();
        if (result.success) {
            setFormStatus('Sporočilo poslano uspešno!');
        } else {
            setFormStatus('Prišlo je do napake pri pošiljanju, vaše vprašanje pošljite na: vprasanje@horion.si');
        }
    };

    // Handler for next testimonial
    const handleNext = () => {
        // Add the class "translateandchange" to the testimonial paragraph
        if (testimonialParagraphRef.current) {
            testimonialParagraphRef.current.classList.add("translateandchange");
            lineRef.current.classList.add("changesize");
            //imageRef.current.classList.add("fadeaway");
            nameRef.current.classList.add("fadeaway");

            // Remove the class after 1 second
            setTimeout(() => {
                if (testimonialParagraphRef.current) {
                    testimonialParagraphRef.current.classList.remove("translateandchange");
                    lineRef.current.classList.remove("changesize");
                    //imageRef.current.classList.remove("fadeaway");
                    nameRef.current.classList.remove("fadeaway");


                }

                // Update the index after the class is removed to ensure smooth transition
                setActiveTestimonialIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
            }, 600);
        } else {
            // Directly update the index if the ref is not attached for some reason
            setActiveTestimonialIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const handlePrev = () => {
        if (testimonialParagraphRef.current) {
            testimonialParagraphRef.current.classList.add("translateandchange");
            lineRef.current.classList.add("changesize");
            //imageRef.current.classList.add("fadeaway");
            nameRef.current.classList.add("fadeaway");

            // Remove the class after 1 second
            setTimeout(() => {
                if (testimonialParagraphRef.current) {
                    testimonialParagraphRef.current.classList.remove("translateandchange");
                    lineRef.current.classList.remove("changesize");
                    //imageRef.current.classList.remove("fadeaway");
                    nameRef.current.classList.remove("fadeaway");


                }

                // Update the index after the class is removed to ensure smooth transition
                setActiveTestimonialIndex((prevIndex) =>
                    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
                );
            }, 600);
        } else {
            // Directly update the index if the ref is not attached for some reason
            setActiveTestimonialIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
        }
    };

    const handleBulletClick = (index) => {
        if (testimonialParagraphRef.current) {
            testimonialParagraphRef.current.classList.add("translateandchange");
            lineRef.current.classList.add("changesize");
            //imageRef.current.classList.add("fadeaway");
            nameRef.current.classList.add("fadeaway");

            // Remove the class after 1 second
            setTimeout(() => {
                if (testimonialParagraphRef.current) {
                    testimonialParagraphRef.current.classList.remove("translateandchange");
                    lineRef.current.classList.remove("changesize");
                    //imageRef.current.classList.remove("fadeaway");
                    nameRef.current.classList.remove("fadeaway");


                }

                // Update the index after the class is removed to ensure smooth transition
                setActiveTestimonialIndex(index);
            }, 600);
        } else {
            // Directly update the index if the ref is not attached for some reason
            setActiveTestimonialIndex(index);
        }
    };


    // Handler for clicking on a bullet point
    /*const handleBulletClick = (index) => {
        setActiveTestimonialIndex(index);
    };*/

    return (
        <div className='testimonials-main'>
            <div className='green-blob2'></div>
            <div id="faq-smear-section" className='thesection-div'></div>

            <div className='testimonials-wrapper'>
                <div className='alignme'>
                    <div className='matg'>FAQ</div>
                    <h2 className='math'>Pogosta vprašanja in odgovori</h2>
                    <p className='matpepe matt'>Imamo vse odgovore na vaša vprašanja.</p>
                </div>
                <div className='testimonials-holder'>

                    <div className='testimonials-holder-row'>
                        {/*<div className='slika-holder' ref={imageRef} ><img src={testimonials[activeTestimonialIndex].image} alt={testimonials[activeTestimonialIndex].name} className='selected-img' /></div>*/}
                        <div></div>
                        <div className='narekovaj-holder'>
                            <img src="/Images/narekovaj.webp" className='narekovaj-img' alt='heros' />

                        </div>
                    </div>

                    <div className='nameandline-rov'>
                        <div ref={lineRef} className='testimonial-line'></div>
                        <h3 ref={nameRef} className='testimonial-name'>{testimonials[activeTestimonialIndex].name}</h3>
                    </div>

                    <p ref={testimonialParagraphRef} className='testimonial-paragraph'>{testimonials[activeTestimonialIndex].testimonial}</p>




                </div>
                <div className='navigations-row'>
                    <div className='bullets'>
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`testimonial-bullet ${index === activeTestimonialIndex ? 'bullet-active' : ''}`}
                                onClick={() => handleBulletClick(index)}
                            >
                                {/* Render bullet point */}
                            </div>
                        ))}
                    </div>
                    <div className='arrows'>
                        <div className='button-next' onClick={handlePrev}><span className='arrow'></span></div>
                        <div className='button-prev' onClick={handleNext}><span className='arrow'></span></div>
                    </div>
                </div>
            </div>

            <div className='your-email-wrapper'>
                <div className='alignme'>
                    <div className='matg'>Pošlji vprašanje</div>
                    <h2 className='math'>Zaupajte nam</h2>
                    <p className='matpepe matt'>Pošljite nam vaše vprašanje in v najmanjšem možnem času vam bo odgovoril specialist na vašem področju.</p>
                </div>

                <div className='question-form'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='email'>E-naslov</label>
                        <input type='email' id='email' name='email' required value={formState.email} onChange={handleInputChange} />
                        <label htmlFor='message'>Sporočilo</label>
                        <textarea id='message' name='message' rows='5' required value={formState.message} onChange={handleInputChange}></textarea>
                        <button type='submit' className='horion-uci-button submit-button'>Pošlji</button>
                    </form>
                    {formStatus && <p>{formStatus}</p>}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
