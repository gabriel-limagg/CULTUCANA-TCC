import React from 'react'
import video from '../assets/video.svg'

export default function () {
  return (
    <section>
    <div>
        <h1 className=' font-RedRose p-8 mt-10 text-left text-sky-950 text-6xl '>Passo 1:</h1>
    </div>
    <div>
        <img className='m-auto mt-16' src={video} alt="" />
        <p className='text-white text-center'>'tutorial em video'</p>
    </div>
    <div className='flex justify-between p-14 '>
        <div>
            <p className='font-lilita text-xl  text-center  text-stone-300'>Seleção do Local:</p>
            <p className='font-lilita text-xl  text-center mt-8 text-stone-300'>Escolha um local central em sua plantação <br /> que receba boa  incidência solar <br /> e possua fácil acesso para <br /> monitoramento e manutenção.</p>
        </div>
        <div>
            <p  className='font-lilita text-xl text-center text-stone-300'>Preparando o Solo: </p>
            <p  className='font-lilita text-xl text-center  mt-8 text-stone-300'>Certifique-se de que o solo  no local escolhido <br /> esteja firme e livre de  detritos. <br /> Nivele o terreno se necessário para garantir <br /> a estabilidade do dispositivo.</p>
        </div>
        <div>
        <p  className='font-lilita text-xl text-center   text-stone-300'>Fixação do Dispositivo: </p>
        <p className='font-lilita text-xl text-center mt-8 text-stone-300'>Posicione a Cultucana no local preparado e <br />utilize as estacas  de fixação fornecidas para <br /> garantir que o dispositivo esteja <br /> firmemente instalado  no  solo Verifique <br /> se o dispositivo está  nivelado e <br /> perpendicular ao solo.</p>
       </div>
    </div>
    <div>
        <h1 className='font-RedRose p-8  text-left text-sky-950 text-6xl '>Passo 2:</h1>
    </div>
    <div>
        <img className='m-auto mt-16' src={video} alt="" />
        <p className='text-white text-center'>'tutorial em video'</p>
    </div>
    <div className='p-12'>
        <p className='font-lilita flex justify-center  text-xl text-left mt-8 text-stone-300'>Download e Instalação: Baixe o aplicativo Cultucana na Play Store.</p>
        <p  className='font-lilita flex justify-center  text-xl text-center mt-8 text-stone-300'>Conexão Wi-Fi: Na primeira página do aplicativo após a inicialização, utilize o scanner  QR code <br />  para conectar o dispositivo à sua rede Wi-Fi. Certifique-se de que a rede Wi-Fi  esteja com boa recepção no local de instalação da Cultucana.</p>
        <p className='font-lilita flex justify-center  text-xl text-center mt-8 text-stone-300'> Criação de Conta: Crie uma conta no aplicativo para ter acesso a todos os recursos e  funcionalidades da plataforma Cultucana</p>
    </div>
    <div>
        <h1 className='font-RedRose p-8 mt-10 text-left text-sky-950 text-6xl '>Passo 3:</h1>
    </div>
    <div>
        <img className='m-auto mt-16' src={video} alt="" />
        <p className='text-white text-center'>'tutorial em video'</p>
    </div>
    <div>
        <p className='font-lilita flex justify-center  text-xl text-center mt-8 text-stone-300 p-8'>Verificação Regular: Inspecione periodicamente o dispositivo para garantir <br /> que ele  esteja firmemente instalado no solo e que nenhum sensor tenha sido danificado ou  removido.</p>
        <p className='font-lilita flex justify-center  text-xl text-center mt-8 text-stone-300 p-8' > Atualizações do Aplicativo: Mantenha o aplicativo Cultucana atualizado com a última  versão para garantir o acesso às funcionalidades mais recentes e correções de bugs</p>
    </div>

    
    </section>
  )
}
