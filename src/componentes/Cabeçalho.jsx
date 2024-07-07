import React from 'react'

export default function Cabeçalho() {
  return (
    <div className='grid grid-cols-5 gap-4 place-items-center p-6 '>
    <div >< h2 className='text-3xl text-stone-300 cursor-pointer '>Apresentação </h2></div>
    <div><h2  className='text-3xl  text-stone-300 cursor-pointer '>Guia de Utilização </h2></div>
    <div ><h2 className='text-3xl  text-stone-300 cursor-pointer'>Materiais utilizados </h2></div>
    <div ><h2 className='text-3xl  text-stone-300 cursor-pointer'>Referências </h2></div>
    <div ><h2 className='text-3xl  text-stone-300 cursor-pointer'>Quem somos  </h2></div>
    </div>
  )
}
