import React from 'react'
import Logo from "../assets/logo-tcc.png"

export default function Header() {
  return (
    <div className=' relative  w-screen p-2 bg-sky-950 '>
     <img className=' w-28 m-auto cursor-pointer' src={Logo} alt="" />
    </div>
  )
}
