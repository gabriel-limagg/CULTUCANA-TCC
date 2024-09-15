import React from 'react';
import '../App.css'; 






function Inicio() {
    return (
        <div className='h-screen ' > 
            
            
            <div className='max-[426px]:mt-28 mt-16 max-[426px]:top-96'>
                <h1 className='font-RedRose text-textColor text-7xl text-center  max-[1500px]:text-6xl max-[426px]:- max-[426px]:text-5xl  '>CULTUCANA</h1>
                <div className="cube-loader max-[1500px]:">
            <div className="cube-top"></div>
        <div className="cube-wrapper">
                {[...Array(4)].map((_, i) => (
                <span key={i} style={{ '--i': i }} className="cube-span"></span>
                    ))}
                </div>
                </div>
</div>
        </div>
        
    );
}
export default Inicio;