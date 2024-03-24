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

      const gotoCollection = () => {
        history("/Collection");
      }
    
      

    return(
    <Flex as="nav" width="100%" padding="4" boxShadow="md">
     
      <span>LOYALT</span>

      <Spacer />
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
        fontFamily={'Roboto'}
        color={'black'}>Map</Button>
      <Button colorScheme='whiteAlpha'
        borderRadius="10px"       
        textColor="white"
        height="55px"
        width="150px"
        margin="10px"
        fontFamily={'Roboto'}
        color={'black'}
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
        fontFamily={'Roboto'}
        color={'black'}
        onClick={gotoCollection}
        justifyContent="center" // This centers the buttons horizontally
        alignItems="center" 
        border="1px solid black"// Add a border color
        _hover={{ border: "1px solid black" }}>Collections</Button>

    
      <Spacer />

    
      
      <Button colorScheme='whiteAlpha'
        borderRadius="20px"       
        textColor="white"
        height="55px"
        width="100px"
        margin="10px"
        onClick={gotoMap}
        fontFamily={'Roboto'}
        color={'black'}
        border="1px solid black"// Add a border color
        _hover={{ border: "1px solid black" }}>Login</Button>
    </Flex>

    );


}

export default Navbar;