import React from 'react'
import Bg from "../assets/bg-cutucana.jpg"

export default function Body({ children }) {
  return (
    <div className=' bg-fixed w-full h-full' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      <div className='relative w-full h-full bg-opacity-50  bg-slate-900 '>
        {children}
      </div>
    </div>
  )
}