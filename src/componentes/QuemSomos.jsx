import React from 'react'
import rosto from '../assets/rosto.svg'
import rosto2 from '../assets/rosto2.svg'
import rosto3 from '../assets/rosto3.svg'
export default function () {
  return (
    <section>
    <div className=' p-32 flex justify-between '>
        <div>
            <img src={rosto} alt="" />
        </div>
        <div>
            <img src={rosto2} alt="" />
        </div>
        <div>
            <img src={rosto3} alt="" />
        </div>

    </div>
    <div className='flex justify-between p-8 '>
    <div className=''>
            <h1 className='font-RedRose  text-center text-sky-950 text-6xl '>Quem somos </h1>
            <p className='font-lilita text-xl text-center ml-0 mr-0 mt-8  text-stone-300'>
              Olá Somos Juan Kaman,
 Gabriel Lima e Kaua Kestering, <br /> estudantes do ensino médio  e entusiastas <br /> da tecnologia. 
Matriculados no curso técnico <br /> de TI
 na UNASP, buscamos  constantemente aprimorar <br /> nossas habilidades e conhecimentos na área.</p>
        </div>
        <div className=''>
            <h1 className='font-RedRose  text-center text-sky-950 text-6xl '>Nosso Projeto </h1>
            <p className='font-lilita text-xl text-center ml-0 mr-0 mt-8  text-stone-300'>
            Desenvolvemos um projeto de monitoramento <br />da canavicultura em São Paulo, que visa aplicar soluções <br /> tecnológicas para otimizar a gestão <br /> das plantações 
            e promover uma agricultura .</p>
        </div>
       
        <div className=''>
            <h1 className='font-RedRose  text-center text-sky-950 text-6xl '>Motivação </h1>
            <p className='font-lilita text-xl text-center ml-0 mr-0 mt-8  text-stone-300'>
            Escolhemos a canavicultura devido à falta <br /> de avanços tecnológicos significativos nesse setor. <br />
Acreditamos no potencial da tecnologia para promover <br /> práticas agrícolas mais sustentáveis  e eficientes, <br /> contribuindo assim para o desenvolvimento <br /> da agricultura brasileira.</p>
        </div>
        
        
        
    </div>
    </section>
    
  )
}