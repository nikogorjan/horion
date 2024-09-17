import React from 'react'
import './DokumentacijaWrapper.css'
import LNav from '../LNav/LNav'
import Mid from '../Mid/Mid'
import Rnav from '../Rnav/Rnav'

const DokumentacijaWrapper = () => {
  return (
    <div className='DokumentacijaWrapper-main'>
        <div className='ww'>
            <LNav/>
            <Mid/>
        </div>
    </div>
  )
}

export default DokumentacijaWrapper
