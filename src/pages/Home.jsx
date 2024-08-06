import React from 'react'
import Body from '../componentes/Body'
import Header from '../componentes/Header'
import CubeLoader from '../componentes/CubeLoader'
import Titulo from '../componentes/Titulo'
import Cabeçalho from '../componentes/Cabeçalho'
import Titulo1 from '../componentes/Titulo1'
import ConteudoApresentacao from '../componentes/ConteudoApresentacao'
import Titulo2 from '../componentes/Titulo2'
import Guia from '../componentes/Guia'
import Titulo3 from '../componentes/Titulo3'
import Carousel from '../componentes/Carousel'
import Titulo4 from '../componentes/Titulo4'
import QuemSomos from '../componentes/QuemSomos'
import Informaçoes from '../componentes/Informaçoes'





export default function Home() {
  return (
    <div className=' overflow-hidden' >
      <Body  >
        <section id='inicio'>
          <Header />
          <Cabeçalho />
          <Titulo />
          <CubeLoader />
        </section>

        <section id='apresentacao'>
          <Titulo1 />
          <ConteudoApresentacao />
        </section>

        <section id='guia'>
          <Titulo2 />
          <Guia />
        </section>

        <section id='carrossel'>
          <Titulo3 />
          <Carousel />
        </section>

        <section id='discricao'>
         <Titulo4 />
          <QuemSomos />
        </section>

        <Informaçoes />
      </Body>

    </div>


  )
}