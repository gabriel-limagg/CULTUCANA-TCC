import React from 'react'
import video from '../assets/video.svg'

export default function () {
    return (
        <div className='px-4 md:px-8'>
            <h1 className='font-RedRose pt-20 md:pt-56 text-textColor text-4xl md:text-7xl text-center mt-8 md:-mt-40'>
                Guia de Utilização
            </h1>
            <section>
                <div>
                    <h1 className='font-RedRose p-8 mt-10 text-left text-textColor text-4xl md:text-5xl'>
                        Passo 1:
                    </h1>
                </div>
                <div>
                    <img className='m-auto mt-8 md:mt-16' src={video} alt="" />
                    <p className='text-white text-center'>Tutorial em vídeo</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between p-8 md:p-14 space-y-8 md:space-y-0'>
                    <div className='md:w-1/3 text-center'>
                        <p className='font-lilita text-lg md:text-xl text-stone-300'>
                            Seleção do Local:
                        </p>
                        <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
                            Escolha um local central em sua plantação que receba boa incidência solar e possua fácil acesso para monitoramento e manutenção.
                        </p>
                    </div>
                    <div className='md:w-1/3 text-center'>
                        <p className='font-lilita text-lg md:text-xl text-stone-300'>
                            Preparando o Solo:
                        </p>
                        <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
                            Certifique-se de que o solo no local escolhido esteja firme e livre de detritos. Nivele o terreno se necessário para garantir a estabilidade do dispositivo.
                        </p>
                    </div>
                    <div className='md:w-1/3 text-center'>
                        <p className='font-lilita text-lg md:text-xl text-stone-300'>
                            Fixação do Dispositivo:
                        </p>
                        <p className='font-lilita text-lg md:text-xl mt-4 md:mt-8 text-stone-300'>
                            Posicione a Cultucana no local preparado e utilize as estacas de fixação fornecidas para garantir que o dispositivo esteja firmemente instalado no solo. Verifique se o dispositivo está nivelado e perpendicular ao solo.
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className='font-RedRose p-8 mt-10 text-left text-textColor text-4xl md:text-5xl'>
                        Passo 2:
                    </h1>
                </div>
                <div>
                    <img className='m-auto mt-8 md:mt-16' src={video} alt="" />
                    <p className='text-white text-center'>Tutorial em vídeo</p>
                </div>
                <div className='p-8 md:p-12'>
                    <p className='font-lilita text-lg md:text-xl text-center mt-4 md:mt-8 text-stone-300'>
                        Download e Instalação: Baixe o aplicativo Cultucana na Play Store ou Apple Store.
                    </p>
                    <p className='font-lilita text-lg md:text-xl text-center mt-4 md:mt-8 text-stone-300'>
                        Conexão Wi-Fi: Na primeira página do aplicativo após a inicialização, utilize o scanner QR code para conectar o dispositivo à sua rede Wi-Fi. Certifique-se de que a rede Wi-Fi esteja com boa recepção no local de instalação da Cultucana.
                    </p>
                    <p className='font-lilita text-lg md:text-xl text-center mt-4 md:mt-8 text-stone-300'>
                        Criação de Conta: Crie uma conta no aplicativo para ter acesso a todos os recursos e funcionalidades da plataforma Cultucana.
                    </p>
                </div>
                <div>
                    <h1 className='font-RedRose p-8 mt-10 text-left text-textColor text-4xl md:text-5xl'>
                        Passo 3:
                    </h1>
                </div>
                <div>
                    <img className='m-auto mt-8 md:mt-16' src={video} alt="" />
                    <p className='text-white text-center'>Tutorial em vídeo</p>
                </div>
                <div className='p-8 md:p-12'>
                    <p className='font-lilita text-lg md:text-xl text-center mt-4 md:mt-8 text-stone-300'>
                        Verificação Regular: Inspecione periodicamente o dispositivo para garantir que ele esteja firmemente instalado no solo e que nenhum sensor tenha sido danificado ou removido.
                    </p>
                    <p className='font-lilita text-lg md:text-xl text-center mt-4 md:mt-8 text-stone-300'>
                        Atualizações do Aplicativo: Mantenha o aplicativo Cultucana atualizado com a última versão para garantir o acesso às funcionalidades mais recentes e correções de bugs.
                    </p>
                </div>
            </section>
        </div>
    )
}
