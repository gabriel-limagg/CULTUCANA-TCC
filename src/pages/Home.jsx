import React from 'react'
import Body from '../componentes/Body'
import Inicio from '../componentes/Inicio'
import Apresentacao from '../componentes/Apresentacao'
import Guia from '../componentes/Guia'
import Carousel from '../componentes/Carousel'
import QuemSomos from '../componentes/QuemSomos'
import Informaçoes from '../componentes/Informaçoes'


export default function Home() {
  return (
    <div className=' overflow-hidden' >
      <Body  >
        <section id='inicio'>
          <Inicio />
        </section>

        <section id='apresentacao'>
          <Apresentacao />
        </section>

        <section id='guia'>
          <Guia />
        </section>

        <section id='carrossel'>
          <Carousel />
        </section>

        <section id='discricao'>
          <QuemSomos />
        </section>

        <Informaçoes />
      </Body>
    </div>
  )
}