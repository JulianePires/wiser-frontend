import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import FormContainer from '../components/FormContainer'
import ImageContainer from '../components/ImageContainer'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
      grid-template-columns: 40% 60%
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/> 
      </Head>
      <Container>
        <ImageContainer /> 
        <FormContainer />
      </Container>
    </>
  )
}

export default Home
