import React from 'react';
import styled from '@emotion/styled';

const ParallaxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Щоб не перешкоджати обробці подій миші в ToDo вікні */
`;

const ParallaxElement = styled.div`
  position: absolute;
  width: 50px; /* Розмір елемента, можна змінити на потрібний */
  height: 50px; /* Розмір елемента, можна змінити на потрібний */
  background-color: rgb(247, 255, 193); /* Прозорий фон елемента */
  border-radius: 50%;
  box-shadow: 0 0px 22px 20px rgb(247, 255, 193);
backdrop-filter: blur( 10px );
  animation: flickerAnimation 10s infinite; 
  /* Додайте інші стилі за вашим бажанням */
  @keyframes flickerAnimation {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;



export {ParallaxContainer, ParallaxElement};
