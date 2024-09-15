import React from 'react'
import Header from '../componentes/Header'
import Carousel from '../componentes/Carousel'
import Body from '../componentes/Body'


export default function Materiais() {
  return (
    <div>
       <Body>
            <section>
                <Header/>
                
            </section>
            <section id='materiais'>
                <Carousel/>
            </section>
         </Body>
        
    </div>
  )
}
