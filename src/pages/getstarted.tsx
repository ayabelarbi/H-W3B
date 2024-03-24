// GetStarted.js
import React from 'react';
import { Box, Button, Center, Heading, VStack } from '@chakra-ui/react';
import Navbar from './Navbar'; 
import { useNavigate } from "react-router-dom";


const getStarted = () => {

  const history = useNavigate();

  const gotoClientPage = () => {
    console.log('Client Page')
    history('/ClientPage');
    
    
  };

  const gotoRetailPage = () => {
    console.log('retail page')
    history('/RetailPage');
  }
  return (


    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-b, #111950, #1A1A1A, #111950)"
      height="100vh"
      width="100vw"
    >


    <Navbar /> 
      
      <VStack spacing={8}>
        <Heading color="white">Get Started</Heading>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={gotoClientPage}
        >
          Client
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={gotoRetailPage}
        >
          Retail
        </Button>
      </VStack>
    </Box>
  );
}

export default getStarted;
// Path: src/pages/leaderboard.tsx
