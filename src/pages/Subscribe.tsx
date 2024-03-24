import React from 'react';
import { Box, VStack, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react';
import Navbar from './Navbar';

const Subscribe = () => {
  const plans = [
    { price: 39, currency: '€', features: ['Beginner', 'Accès au réseau LoyalT', 'Installation gratuite du terminal NFC', '2 quêtes mensuelles', '100 NFTs disponible' ] },
    { price: 59, currency: '€', features: ['Advanced', 'Accès au réseau LoyalT', 'Installation gratuite du terminal NFC', '4 quêtes mensuelles', '250 NFTs disponible'] },
    { price: 69, currency: '€', features: ['Premium', 'Accès au réseau LoyalT', 'Installation gratuite du terminal NFC', '8 quêtes mensuelles', 'NFTs illimités'] },
  ];

 
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
      <VStack spacing={5}>
        <Heading>Choose Your Plan</Heading>
        <SimpleGrid columns={3} spacing={10}>
          {plans.map((plan, index) => (
            <Box
              key={index}
              p={5}
              borderRadius="lg"
              width="100%"
              maxW="sm"
              bg="rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(10px)"
            
              font-family="Roboto"
              border="1px solid rgba(255, 255, 255, 0.3)"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            >
              <VStack spacing={3}>
                <Heading size="lg" font-family="Roboto">{plan.price}{plan.currency}</Heading>
                <Box>
                  {plan.features.map((feature, featureIndex) => (
                    <Text key={featureIndex}>{feature}</Text>
                  ))}
                </Box>
                <Button color="black" bg='#CC9975'>Subscribe</Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Subscribe;
