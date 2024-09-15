import React from 'react'
import instagram from '../assets/instagram.png'
import likedin from '../assets/linkedin.png'
import whatsap from '../assets/whatsapp.png'

export default function () {
  return (
    <div className='bg-slate-950 '>
       <div className='m-auto p-6 left-52   flex justify-center'>
        <div className='p-4 w-20 items-start'>
           <a href="https://www.instagram.com/gab.lima_?igsh=MXFjMnowbHhoeGRmNw=="> < img src={instagram} alt="" /></a>
        </div>
        <div className='p-4 w-20'>
           <a href="https://www.linkedin.com/in/gabriel-santos-lima-845830252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <img src={likedin} alt="" /></a>
        </div>
        <div className='p-4 w-20'> 
           <a href="https://wa.me/qr/G4GQXG7AC6VRH1"> <img src={whatsap} alt="" /></a>
        </div>
    </div>
    </div>
  )
}