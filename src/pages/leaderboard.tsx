import React from 'react';
import { Box, Image, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import Apple_logo_black from "../Design/8.jpeg";
import flowRound from "../Design/9.jpeg";
import product from "../Design/7.jpeg";
import Navbar from './Navbar';

// Données du classement
const leaderboardData = [
  { id: 1, name: "Apple", logo: Apple_logo_black, score: 98 },
  { id: 2, name: "Flow", logo: flowRound, score: 92 },
  { id: 3, name: "Product", logo: product, score: 89 },
];

const Leaderboard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-b, #CC9975, #f5f5dc, #ffffff)"
      height="100vh"
     
      fontFamily={'Roboto'}
      width="100vw"
      padding={4}
    >
      <Navbar />
      <Heading as="h1" size="xl" marginBottom="8">
        Classement
      </Heading>
      <VStack spacing={5}>
        {leaderboardData.map((entry) => (
          <HStack key={entry.id} p={4} borderRadius="md" width="sm" justifyContent="space-between" bg='#CC9975' backdropFilter="blur(10px)" _hover={{ boxShadow: "lg", backdropFilter: "blur(15px)" }}>
            <Image boxSize="50px" borderRadius="full" src={entry.logo} alt={entry.name} />
            <Text fontWeight="bold">{entry.name}</Text>
            <Text>{entry.score}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Leaderboard;
