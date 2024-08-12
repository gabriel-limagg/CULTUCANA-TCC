import React from 'react'
import Logo from "../assets/logo-tcc.png"


export default function Header() {
  return (
    <div className=' relative  w-screen  bg-fundoHeader '>
      <img className=' w-28 m-auto ' src={Logo} alt="" /> 
    </div>
  )
}
