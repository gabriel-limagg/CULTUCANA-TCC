import React from 'react'
import img from '../assets/img.svg'

export default function Apresentacao() {
  return (
    <div>
      <h1 className=' font-RedRose pt-56 text-textColor text-7xl text-center mt-16 max-[1500px]:text-5xl '>  Sistema de Monitoramento da Canavicultura</h1>
      <section>
        <div className='flex justify-between mt-36 pl-12 pr-16 '>
          <div className='w-1/4'>
            <h1 className='font-RedRose  text-center text-textColor text-5xl max-[1500px]:text-4xl  '>Sobre Nós:</h1>
            <p className='font-lilita text-xl text-center ml-0 mr-0 mt-8  text-stone-300 max-[1500px]:text-lg max-[1200px]:text-base '>Somos uma equipe dedicada à inovação e sustentabilidade na canavicultura. Nosso  sistema de monitoramento utiliza tecnologia de ponta para fornecer dados precisos e promover práticas agrícolas mais eficientes e sustentáveis em São Paulo.</p>
          </div>




          <div className='w-1/4'>
            <h1 className='font-RedRose  text-center  text-textColor text-5xl max-[1500px]:text-4xl  '>Nossa Missão:</h1>
            <p className='font-lilita text-xl text-center  mt-8 text-stone-300 max-[1500px]:text-lg '>Nosso objetivo é auxiliar os produtores de cana-de-açúcar a  maximizar sua  produção de forma  sustentável,  fornecendo informações valiosa sobre as condições  das plantações e promovendo o uso responsável  dos recursos naturais no estado de São Paulo.</p>
          </div>


          <div className='w-1/4'>
            <h1 className='font-RedRose text-textColor text-5xl text-center max-[1500px]:text-4xl ' >O que Oferecemos:</h1>
            <p className='font-lilita  text-stone-300 text-center m-0 mt-8 text-xl max-[1500px]:text-lg max-[1200px]:text-base ' >Monitoramento em Tempo Real: Tenha acesso  instantâneo aos dados  de umidade do solo, temperatura, luminosidade e mais, tudo em tempo real,  para otimizar o manejo da canavicultura. 
              Energia Sustentável: Nosso sistema é alimentado por  um painel solar integrado, reduzindo a pegada de carbono   promovendo a sustentabilidade na produção.</p>
          </div>
        </div>
        <div className='font-RedRose p-8  mt-10'>
          <h1 className=' text-textColor text-5xl text-left max-[1500px]:text-4xl  '>Por Que Escolher Nosso Sistema:</h1>
          <p className='font-lilita text-stone-300 text-left m-0 mt-8 text-xl max-[1500px]:text-lg max-[1200px]:text-base '>Precisão e Confiabilidade: Nossos sensores de alta qualidade garantem leituras precisas e confiáveis em todas <br /> as condições climáticas.
            Sustentabilidade: Priorizamos a sustentabilidade em todas  as etapas do processo, desde a energia <br />g renovável até os materiais ecológicos.
            Facilidade de Uso: Nosso sistema é projetado para ser fácil de instalar e usar, <br /> permitindo que os produtores se concentrem em maximizar sua produção de cana-de-açúcar.
          </p>
        </div>
        <div>
          <h1 className='font-RedRose mt-10 p-8 text-textColor text-5xl text-left max-[1500px]:text-4xl   '> Veja Nosso Sistema em Ação:</h1>
        </div>
        <div className='flex justify-between p-20'>
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>

      </section>
    </div>
  )
}

