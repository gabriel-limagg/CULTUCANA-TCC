import React from 'react'
import img from '../assets/img.svg'

export default function Apresentacao() {
  return (
   
    <div className='px-4 md:px-8'>
      <h1 className=' font-RedRose  md:pt-56 text-textColor text-4xl md:text-7xl text-center  md:-mt-40'>
        Sistema de Monitoramento na Canavicultura 
      </h1>
      <section>
        <div className='flex flex-col md:flex-row justify-between mt-20 md:mt-36 space-y-12 md:space-y-0 md:space-x-8'>
          <div className='md:w-1/4 text-center'>
            <h1 className='font-RedRose text-textColor text-4xl md:text-5xl'>Sobre Nós:</h1>
            <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
              Somos uma equipe dedicada à inovação e sustentabilidade na canavicultura. Nosso sistema de monitoramento utiliza tecnologia de ponta para fornecer dados precisos e promover práticas agrícolas mais eficientes e sustentáveis em São Paulo.
            </p>
          </div>
          
          <div className='md:w-1/4 text-center'>
            <h1 className='font-RedRose text-textColor text-4xl md:text-5xl'>Nossa Missão:</h1>
            <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
              Nosso objetivo é auxiliar os produtores de cana-de-açúcar a maximizar sua produção de forma sustentável, fornecendo informações valiosas sobre as condições das plantações e promovendo o uso responsável dos recursos naturais no estado de São Paulo.
            </p>
          </div>

          <div className='md:w-1/4 text-center'>
            <h1 className='font-RedRose text-textColor text-4xl md:text-5xl'>O que Oferecemos:</h1>
            <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
              Monitoramento em Tempo Real: Tenha acesso instantâneo aos dados de umidade do solo, temperatura e mais, tudo em tempo real, para otimizar o manejo da canavicultura. Energia Sustentável: Nosso sistema é alimentado por um painel solar integrado, reduzindo a captação de carbono e promovendo a sustentabilidade na produção.
            </p>
          </div>
        </div>

        <div className='font-RedRose mt-10 md:mt-20'>
          <h1 className='text-textColor text-4xl md:text-5xl text-center md:my-10'>Por Que Escolher Nosso Sistema:</h1>
          <p className='font-lilita text-lg md:text-xl text-stone-300 text-center mt-4 md:mt-10'>
            Precisão e Confiabilidade: Nossos sensores de alta qualidade garantem leituras precisas e confiáveis em todas as condições climáticas.<br />
            Sustentabilidade: Priorizamos a sustentabilidade em todas as etapas do processo, desde a energia renovável até os materiais ecológicos.<br />
            Facilidade de Uso: Nosso sistema é projetado para ser fácil de instalar e usar, permitindo que os produtores se concentrem em maximizar sua produção de cana-de-açúcar.
          </p>
        </div>

        <div>
          <h1 className='font-RedRose mt-10 p-8 text-textColor text-4xl md:text-5xl text-left'>Veja Nosso Sistema em Ação:</h1>
        </div>

        <div className=' flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 space-y-4 md:p-8 px-16'>
          <img src={img} alt="" className='  md:w-1/4 md:mr-4 md:ml-4' />
          <img src={img} alt="" className=' md:w-1/4 md:mr-4 md:ml-4' />
          <img src={img} alt="" className=' md:w-1/4 md:mr-4 md:ml-4' />
        </div>
      </section>
    </div>
  )
}
