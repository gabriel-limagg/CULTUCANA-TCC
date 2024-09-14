import React from 'react'
import Bg from "../assets/bg-cutucana.jpg"
import Informaçoes from './Informaçoes'

export default function Body({ children }) {
  return (
    <div>
    <div className='m-0 p-0 bg-fixed w-screen h-full' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      <div className='relative w-full h-full bg-opacity-50  bg-slate-900 '>
        {children}
      </div>
     
    </div>
      <Informaçoes/>
     </div>
  )
}