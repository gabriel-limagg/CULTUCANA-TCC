import React from 'react'
import Body from '../componentes/Body'
import Inicio from '../componentes/Inicio'
import Apresentacao from '../componentes/Apresentacao'
import Guia from '../componentes/Guia'
import Carousel from '../componentes/Carousel'
import QuemSomos from '../componentes/QuemSomos'
import Informaçoes from '../componentes/Informaçoes'
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