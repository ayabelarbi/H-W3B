import "./Home.css";
import { Button, Box, Image, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from './Navbar'; 


function Home() {
  const history = useNavigate();


  const getstarted = () => {
    history("/getstarted");
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

      <h1 className="title">LOYALT</h1>
      <h2 className="subtitle">Earn tokens, perks, and exclusive rewards at your favorite shops.</h2>

      <Button
         colorScheme='whiteAlpha'
         borderRadius="10px"       
         textColor="white"
         height="75px"
         width="250px"
         onClick={getstarted}
         border="1px solid black"// Add a border color
         _hover={{ border: "1px solid black" }} // Remove the border on hover
        >
        <Heading>Who are you</Heading>
      </Button>
    </Box>
  );
}

export default Home;
