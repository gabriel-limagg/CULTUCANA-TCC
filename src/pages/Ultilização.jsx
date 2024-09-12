import React from 'react'
import Body from '../componentes/Body'
import Header from '../componentes/Header'
import Guia from "../componentes/Guia"

export default function Ultilização() {
  return (
    <div className=' overflow-hidden'>
        <Body>
            <section >
                <Header/>
            </section>
            <section>
                <Guia/>
            </section>
        </Body>
    </div>
  )
}
