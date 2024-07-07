import React from 'react';
import '../App.css'; // Importe o CSS para a animação

const CubeLoader = () => {
  return (
    <div className="cube-loader">
      <div className="cube-top"></div>
      <div className="cube-wrapper">
        {[...Array(4)].map((_, i) => (
          <span key={i} style={{ '--i': i }} className="cube-span"></span>
        ))}
      </div>
    </div>
  );
};

export default CubeLoader;