import React, { useState, useEffect } from 'react';

import {ParallaxContainer, ParallaxElement} from '../styles/paralax.styled'


const ParallaxEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const newX = (e.clientX * 0.03);
    const newY = (e.clientY * 0.03);
/*     const newY = e.clientY + (e.clientY - mousePosition.y) * sensitivity; */

    setMousePosition({ x:newX , y:newY});
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ParallaxContainer>
      <ParallaxElement
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)', // Центруємо елемент відносно курсора миші
          animation: 'flickerAnimation 10s infinite',
        }}
      >
      </ParallaxElement>
      <ParallaxElement
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(500px, 500px)', // Центруємо елемент відносно курсора миші
          animation: 'flickerAnimation 8s infinite',
        }}
      >
      </ParallaxElement>
      <ParallaxElement
        style={{
          left: `-${mousePosition.x}px`,
          top: `-${mousePosition.y}px`,
          transform: 'translate(990px, 100px)',
          animation: 'flickerAnimation 19s infinite',
        }}
      >
      </ParallaxElement>
      <ParallaxElement
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(1200px, 300px)', // Центруємо елемент відносно курсора миші
          animation:'flickerAnimation 15s infinite',
        }}
      >
      </ParallaxElement>
    </ParallaxContainer>
  );
};

export default ParallaxEffect;
