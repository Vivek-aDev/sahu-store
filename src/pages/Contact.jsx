import React from 'react'
import { styled } from 'styled-components';

export const Contact = () => {
  return (
    <Wrapper>Contact</Wrapper>
  )
}

const Wrapper = styled.section`
    background-color: ${({theme}) => theme.colors.bg};
    height: 100vh;
`;
