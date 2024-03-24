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
    bgGradient="linear(to-b, #CC9975, #f5f5dc, #ffffff )"
    height="100vh"
    width="100vw"
    >

      <Navbar /> 

      <h1 className="title">LOYALT</h1>
      <h2 className="subtitle">Earn experiences, perks, and exclusive rewards at your favorite shops.</h2>

      <Button
         colorScheme='whiteAlpha'
         borderRadius="10px"       
         textColor="black"
         height="75px"
         width="200px"
         
         onClick={getstarted}
         border="1px solid black"// Add a border color
         _hover={{ border: "1px solid black" }} // Remove the border on hover
        >
        <Heading
        fontFamily={'Roboto'}
        fontSize="xl"
        >Identify</Heading>
      </Button>
    </Box>
  );
}

export default Home;
