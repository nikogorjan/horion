'use client'


import React, { useEffect, useRef } from 'react';
import './Footer.css'
import Link from 'next/link'; // Import Link from next/link


const Footer = () => {
  const footerRef = useRef(null); // Create a ref for the footer




  return (
    <div className='footer-main' ref={footerRef}>
      <div className='footer-content-wrapper'>

        <div className='footer-align'>
          <div className='footer-content-row'>
            <p className='hitra-povezava'>HITRE POVEZAVE</p>
            <Link href='/dokumentacija/prva-menstruacija'><p className='footer-nav'>Prva menstruacija</p></Link>
            <Link href='/dokumentacija/prvi-obisk'><p className='footer-nav'>Prvi obisk pri ginekologu</p></Link>
            <Link href='/dokumentacija/zanositev'><p className='footer-nav'>Zanositev/Neplodnost</p></Link>
            <Link href='/dokumentacija/nosecnost'><p className='footer-nav'>Nosečnost</p></Link>
            <Link href='/dokumentacija/poporodno-obdobje'><p className='footer-nav'>Poporodno obdobje</p></Link>
            <Link href='/dokumentacija/menopavza'><p className='footer-nav'>Menopavza</p></Link>

          </div>

          <div className='footer-content-row'>
            <p className='hitra-povezava'>HORION</p>
            <Link href='/#anim-smear-section'><p className='footer-nav'>Oploditev</p></Link>
            <Link href='/#hor-smear-section'><p className='footer-nav'>Kaj je horion</p></Link>
            <Link href='/#all-smear-section'><p className='footer-nav'>Materinstvo</p></Link>
            <Link href='/#faq-smear-section'><p className='footer-nav'>Pogosta vprašanja in odgovori</p></Link>
            <Link href='/#blog-smear-section'><p className='footer-nav'>Naše zadnje objave</p></Link>


          </div>


          <div className='footer-content-row'>
            <p className='hitra-povezava'>KDO SMO</p>
            <Link href='/#onas-smear-section'><p className='footer-nav'>O nas</p></Link>
            <Link href='/#kdo-smear-section'><p className='footer-nav'>Kdo smo</p></Link>
            <Link href='/#cilj-smear-section'><p className='footer-nav'>Naši cilji</p></Link>
            

          </div>


        </div>




        <img alt='blogimg' className='footer-img' src='/Images/pink.svg' />
      </div>

    </div>
  )
}

export default Footer
