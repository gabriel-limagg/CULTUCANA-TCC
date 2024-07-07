import React from 'react'
import Body from '../componentes/Body'
import Header from '../componentes/Header'
import CubeLoader from '../componentes/CubeLoader'
import Titulo from '../componentes/Titulo'
import Cabeçalho from '../componentes/Cabeçalho'
import Titulo1 from '../componentes/Titulo1'
import ConteudoApresentacao from '../componentes/ConteudoApresentacao'




export default function Home() {
  return (
    <div className='relative' >
    <Body>
    <Header/>
    <Cabeçalho/>
    <Titulo/>
    <CubeLoader/> 
    <Titulo1/>
    <ConteudoApresentacao/>
    
 
    </Body>
    </div>


  )
}