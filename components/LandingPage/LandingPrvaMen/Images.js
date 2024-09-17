'use client'

import React, { useRef, useEffect, useState } from 'react';
import './Images.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";



gsap.registerPlugin(ScrollTrigger);

const Images = () => {
    const headerRef1 = useRef(null); // Reference for the section1 header
    const textRef1 = useRef(null); // Reference for the section1 header
    const rowRef1 = useRef(null);
    const rowReff1 = useRef(null);
    const aboutImgRef = useRef(null); // Reference for the section1 header
    const aboutImgRef2 = useRef(null);
    const tmpRef1 = useRef(null);
    const swiperRef = useRef(null);

    const goPrev = () => {
        console.log("click next")

        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
            console.log("click next")
        }
    };

    // Function to go to the previous slide
    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: tmpRef1.current,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: false,
                markers: false,
            }
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: tmpRef1.current,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: false,
                markers: false,
            }
        });

        tl2.to('.line1', { scaleX: 1, opacity: 1, duration: 0.5 })
            .to('.circle1', { opacity: 1, duration: 0.5 })
            .fromTo('.circle-text:nth-of-type(1)', { display: 'none' }, { display: 'block', duration: 0.1 })
            .to('.line2', { scaleX: 1, opacity: 1, duration: 0.5 })
            .to('.circle2', { opacity: 1, duration: 0.5 })
            .fromTo('.circle-text:nth-of-type(2)', { display: 'none' }, { display: 'block', duration: 0.1 })
            .to('.line3', { scaleX: 1, opacity: 1, duration: 0.5 })
            .to('.circle3', { opacity: 1, duration: 0.5 })
            .fromTo('.circle-text:nth-of-type(3)', { display: 'none' }, { display: 'block', duration: 0.1 })
            .to('.line4', { scaleX: 1, opacity: 1, duration: 0.5 });

        tl.fromTo(headerRef1.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
            .fromTo(textRef1.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            )
            .fromTo(rowRef1.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            ).fromTo(rowReff1.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            );


    });

    useGSAP(() => {
        const container = document.querySelector('.container');

        // Ensure the element exists and is rendered before attaching ScrollTrigger
        if (aboutImgRef.current) {
            gsap.fromTo(aboutImgRef.current, {
                y: '50%', // Start with translateY(50%) to match your initial CSS
                width: '50%' // Start width to match your initial CSS
            }, {
                scrollTrigger: {
                    trigger: ".one-second-wor",
                    start: "top bottom", // Start when "#section4" enters the bottom of the viewport
                    end: "center top", // End when "#section4" exits the top of the viewport
                    scrub: true, // Smooth transition with scroll movement
                    markers: false, // Shows visual markers for debugging
                    once: true
                },
                y: '0%', // Final position at the top of its container
                width: '100%', // Increase width to 100%
                ease: 'none', // Use a linear ease for the animation to sync with scroll

            });
        }
    }, []);

    useGSAP(() => {
        const container = document.querySelector('.container');

        // Ensure the element exists and is rendered before attaching ScrollTrigger
        if (aboutImgRef2.current) {
            gsap.fromTo(aboutImgRef2.current, {
                y: '50%', // Start with translateY(50%) to match your initial CSS
                width: '50%' // Start width to match your initial CSS
            }, {
                scrollTrigger: {
                    trigger: ".one-second-wor",
                    start: "top bottom", // Start when "#section4" enters the bottom of the viewport
                    end: "center top", // End when "#section4" exits the top of the viewport
                    scrub: true, // Smooth transition with scroll movement
                    markers: false, // Shows visual markers for debugging
                    once: true
                },
                y: '0%', // Final position at the top of its container
                width: '100%', // Increase width to 100%
                ease: 'none', // Use a linear ease for the animation to sync with scroll

            });
        }
    }, []);

    return (
        <>
            <div className='online-hook-main' ref={tmpRef1}>
                <div className='online-hook-wrapper'>
                    <div className='one-first-row'>
                        <div className='one-first-left'>
                            <div className='first-left-wrapper'>
                            <div className='matg midmadg'>Obdobje pred materinstvom</div>

                                <h3 className='heading-desktop-h3 black' ref={headerRef1}>Obdobje pred materinstvom je prav tako pomembno kot nosečnost in obdobje po porodu!</h3>
                            </div>


                        </div>
                        <div className='one-first-right'>
                            <div className='one-right-upper'>
                                <p className='text-medium-normal black' ref={textRef1}>Drage najstnice, skrb za svoje zdravje je pomembna že od prve menstruacije naprej. HPV (humani papiloma virus) je zelo pogost virus, ki se prenaša med spolnimi stiki in lahko povzroči resne zdravstvene težave, kot je rak materničnega vratu. Zato je pomembno, da se cepite proti HPV in redno opravljate PAP teste, ko začnete s spolno dejavnostjo. PAP test je preprost pregled, ki preveri, če so celice na vašem materničnem vratu zdrave. Redni pregledi vam lahko pomagajo ostati zdrave in preprečiti resnejše bolezni v prihodnosti.</p>

                            </div>
                            <div className='one-right-lower'>
                                <div className='left-row'>
                                    <div className='left-row-cell'>
                                        <div className='left-row-cell-wrapper' ref={rowRef1}>
                                            <img src="/Images/injection.svg" className='relume-icon' alt='heros' />
                                            <h6 className='heading-desktop-h6 black'>Cepljenje proti HPV</h6>
                                            <p className='text-regular-normal black'>Pregled za HPV je pomemben, saj pomaga pri zgodnjem odkrivanju in zdravljenju okužb, preden se razvijejo v resnejše zdravstvene težave.</p>
                                        </div>
                                    </div>

                                    <div className='left-row-cell'>
                                        <div className='left-row-cell-wrapper' ref={rowReff1}>
                                            <img src="/Images/hive.svg" className='relume-icon' alt='heros' />
                                            <h6 className='heading-desktop-h6 black'>PAP bris</h6>
                                            <p className='text-regular-normal black'>Redni PAP testi omogočajo zgodnje odkrivanje predrakavih sprememb in raka materničnega vratu, kar je ključnega pomena za uspešno zdravljenje.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='animated-line'>
                        <div className='line line1'></div>
                        <div className='circle circle1'><span className='circle-text black'>Prva menstruacija</span></div>
                        <div className='line line2'></div>
                        <div className='circle circle2'><span className='circle-text black'>Sekundarni spolni znaki</span></div>
                        <div className='line line3'></div>
                        <div className='circle circle3'><span className='circle-text black'>Cepljenje proti hpv</span></div>
                        <div className='line line4'></div>
                    </div>





                </div>


                

               

            </div>


        </>
    )

}

export default Images
