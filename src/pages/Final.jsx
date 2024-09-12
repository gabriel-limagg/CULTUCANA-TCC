import React from 'react'
import Body from '../componentes/Body'
import Header from '../componentes/Header'
import QuemSomos from '../componentes/QuemSomos'

export default function Final() {
  return (
    <div className=' overflow-hidden'>
        <Body>
            <section>
                <Header/>
            </section>
            <section>
                <QuemSomos/>
            </section>
        </Body>
    </div>
  )
}
