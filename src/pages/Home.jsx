import React from 'react'
import Body from '../componentes/Body'
import Inicio from '../componentes/Inicio'
import Header from '../componentes/Header'



export default function Home() {
  return (
    
    <div className=' overflow-hidden' >
     
      <Body>
        <section id='header'>
          <Header/>
       
        </section>

        <section id='inicio'>
        <Inicio />
        </section>
        
      </Body>
    </div>
  )
}