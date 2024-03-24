import React from 'react';

import { Button, Box, Image, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { useState } from "react";


function Navbar() {
    const history = useNavigate();


    const gotoMap = () => {
        history("/map");
      };
    
      const gotoLeaderboard = () => {
        history("/leaderboard");
      };
    
      

    return(
    <Flex as="nav" width="100%" padding="4" boxShadow="md">
     
      <span>LOYALT</span>

    
      <Button 
        colorScheme='whiteAlpha'
        borderRadius="10px"
        textColor="white"
        height="55px"
        width="150px"
        margin="10px"
        onClick={gotoMap}
        justifyContent="center" // This centers the buttons horizontally
        alignItems="center"
        border="1px solid black"// Add a border color
        _hover={{ border: "1px solid black" }}

        > 
        Map</Button>
      <Button colorScheme='whiteAlpha'
        borderRadius="10px"       
        textColor="white"
        height="55px"
        width="150px"
        margin="10px"
        onClick={gotoLeaderboard}
        justifyContent="center" // This centers the buttons horizontally
        alignItems="center" 
        border="1px solid black"// Add a border color
        _hover={{ border: "1px solid black" }}>Leaderboard</Button>
      <Button colorScheme='whiteAlpha'
        borderRadius="10px"       
        textColor="white"
        height="55px"
        width="150px"
        margin="10px"
        onClick={gotoMap}
        justifyContent="center" // This centers the buttons horizontally
        alignItems="center" 
        border="1px solid black"// Add a border color
        _hover={{ border: "1px solid black" }}>Add your challenge</Button>

      <Spacer />

    
      <Button colorScheme='transparent'
        borderRadius="10px"       
        textColor="white"
        height="55px"
        width="10px"
        margin="10px"
        onClick={gotoMap}
    
        _hover={{ border: "1px solid black" }}>Login</Button>
      <Button colorScheme='blue'
        borderRadius="10px"       
        textColor="white"
        height="55px"
        width="150px"
        margin="10px"
        onClick={gotoMap}
        border="1px solid black"// Add a border color
        _hover={{ border: "1px solid black" }}>SignUp</Button>
    </Flex>

    );


}

export default Navbar;