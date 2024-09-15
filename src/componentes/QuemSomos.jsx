import React from 'react'
import rosto from '../assets/rosto.svg'
import rosto2 from '../assets/rosto2.svg'
import rosto3 from '../assets/rosto3.svg'

export default function () {
    return (
        <div className='px-4 md:px-8'>
            <h1 className='font-RedRose pt-20 md:pt-56 text-textColor text-4xl md:text-7xl text-center mt-8 md:-mt-40 mb-16 md:mb-28'>
                Quem somos nós
            </h1>
            <section>
                <div className='flex flex-col md:flex-row justify-between p-8 md:p-32 space-y-8 md:space-y-0'>
                    <div className='md:w-1/4'>
                        <img className='w-full' src={rosto} alt="" />
                    </div>
                    <div className='md:w-1/4'>
                        <img className='w-full' src={rosto2} alt="" />
                    </div>
                    <div className='md:w-1/4'>
                        <img className='w-full' src={rosto3} alt="" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 p-4 md:p-8'>
                    <div className='md:w-1/3 text-center'>
                        <h1 className='font-RedRose text-textColor text-4xl md:text-5xl'>
                            Quem somos
                        </h1>
                        <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
                            Olá! Somos Gabriel Lima, Juan Kaman, e Kaua Kestering, estudantes do ensino médio e entusiastas da tecnologia. Matriculados no curso técnico de TI na UNASP, buscamos constantemente aprimorar nossas habilidades e conhecimentos na área.
                        </p>
                    </div>
                    <div className='md:w-1/3 text-center'>
                        <h1 className='font-RedRose text-textColor text-4xl md:text-5xl'>
                            Nosso Projeto
                        </h1>
                        <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
                            Desenvolvemos um projeto de monitoramento da canavicultura em São Paulo, que visa aplicar soluções tecnológicas para otimizar a gestão das plantações e promover uma agricultura mais eficiente e sustentável.
                        </p>
                    </div>
                    <div className='md:w-1/3 text-center'>
                        <h1 className='font-RedRose text-textColor text-4xl md:text-5xl'>
                            Motivação
                        </h1>
                        <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
                            Escolhemos a canavicultura devido à falta de avanços tecnológicos significativos nesse setor. Acreditamos no potencial da tecnologia para promover práticas agrícolas mais sustentáveis e eficientes, contribuindo assim para o desenvolvimento da agricultura brasileira.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
