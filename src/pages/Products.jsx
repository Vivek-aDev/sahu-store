import React from 'react'
import { styled } from 'styled-components';

export const Products = () => {
  return (
    <Wrapper>Products</Wrapper>
  )
}
const Wrapper = styled.section`
    background-color: ${({theme}) => theme.colors.bg};
    height: 100vh;
`;