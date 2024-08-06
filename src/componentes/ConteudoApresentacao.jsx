import React from 'react'
import img from '../assets/img.svg'

export default function ConteudoApresentacao() {
  return (
    <section>
     <div className='flex justify-between mt-36 p-8'>
        <div className=''>
            <h1 className='font-RedRose  text-center text-sky-950 text-6xl '>Sobre Nós:</h1>
            <p className='font-lilita text-xl text-center ml-0 mr-0 mt-8  text-stone-300'>Somos uma equipe dedicada à inovação e <br />sustentabilidade na canavicultura. Nosso <br /> sistema de monitoramento utiliza tecnologia <br /> de ponta para fornecer dados precisos e <br /> promover práticas agrícolas mais <br /> eficientes e sustentáveis em São Paulo.</p>
        </div>




        <div className=' '>
            <h1 className='font-RedRose  text-center  text-sky-950 text-6xl'>Nossa Missão:</h1>
            <p className='font-lilita text-xl text-center  mt-8 text-stone-300'>Nosso objetivo é auxiliar os produtores de <br />cana-de-açúcar a  maximizar sua <br /> produção de forma  sustentável, <br /> fornecendo informações valiosa sobre as condições <br /> das plantações e promovendo o uso responsável <br /> dos recursos naturais no estado de São Paulo.</p>
        </div>


        <div>
            <h1 className='font-RedRose text-sky-950 text-6xl text-center' >O que Oferecemos:</h1>
            <p className='font-lilita  text-stone-300 text-center m-0 mt-8 text-xl ' >Monitoramento em Tempo Real: Tenha acesso <br /> instantâneo aos dados  de umidade do solo, temperatura, <br /> luminosidade e mais, tudo em tempo real, <br /> para otimizar o manejo da canavicultura. <br />
            Energia Sustentável: Nosso sistema é alimentado por <br /> um painel solar integrado, reduzindo a pegada de carbono  <br />e promovendo a sustentabilidade na produção.</p>
        </div>
    </div>
    <div className='font-RedRose p-8  mt-10'>
    <h1 className=' text-sky-950 text-6xl text-left' >Por Que Escolher Nosso Sistema:</h1>
    <p className='font-lilita text-stone-300 text-left m-0 mt-8 text-xl '>Precisão e Confiabilidade: Nossos sensores de alta qualidade garantem leituras precisas e confiáveis em todas <br /> as condições climáticas.
    Sustentabilidade: Priorizamos a sustentabilidade em todas  as etapas do processo, desde a energia <br />g renovável até os materiais ecológicos.
    Facilidade de Uso: Nosso sistema é projetado para ser fácil de instalar e usar, <br /> permitindo que os produtores se concentrem em maximizar sua produção de cana-de-açúcar.
</p>
    </div>
    <div>
      <h1 className='font-RedRose mt-10 p-8 text-sky-950 text-6xl text-left'> Veja Nosso Sistema em Ação:</h1>
    </div>
    <div className='flex justify-between p-20'>
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
    </div>
  
    </section>
   
  )
}

