import styled, { keyframes } from 'styled-components';

const Fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Monoton&family=Yanone+Kaffeesatz&display=swap');
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    background-image: url('https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif');
    background-size: cover;
    color: transparent;
    background-clip: text;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    text-transform: uppercase;
    font-size: 80px;
    font-family: 'Monoton', 'cursive';
    margin: 0;
`;

export const SubTitle = styled.p`
    animation: ${Fade} 2s linear;
    color:  ${({color}) => color};
    font-size: 16px;
    font-weight: bold;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    margin: 0;
`;