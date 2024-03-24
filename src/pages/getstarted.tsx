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
    bgGradient="linear(to-b, #CC9975, #f5f5dc, #ffffff )"
    height="100vh"
    width="100vw"
    >


    <Navbar /> 
      
      <VStack spacing={8}>
        <Heading color="black" fontFamily={'Roboto'}>Get Started</Heading>
        <Button
          colorScheme='whiteAlpha'
          borderRadius="10px"
          textColor="black"
          height="55px"
          width="150px"
          margin="10px"
         
          justifyContent="center" // This centers the buttons horizontally
          alignItems="center"
          border="1px solid black"// Add a border color
          _hover={{ border: "1px solid black" }}
          fontFamily={'Roboto'}
         
          size="lg"
          onClick={gotoClientPage}
        >
          Client
        </Button>
        <Button
          colorScheme='whiteAlpha'
          borderRadius="10px"
          textColor="black"
          height="55px"
          width="150px"
          margin="10px"
         
          justifyContent="center" // This centers the buttons horizontally
          alignItems="center"
          border="1px solid black"// Add a border color
          _hover={{ border: "1px solid black" }}
          fontFamily={'Roboto'}
         
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
