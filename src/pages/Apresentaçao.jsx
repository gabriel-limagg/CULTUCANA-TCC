import React from 'react'
import Body from '../componentes/Body'
import Apresentacao from '../componentes/Apresentacao'
import Header from '../componentes/Header'



export default function Apresentaçao() {
  return (
    <div className=' overflow-hidden'>
        <Body>
        <section >
          <Header/>
          <Apresentacao  />
        </section>
        
        </Body>
    </div>
  )
}
