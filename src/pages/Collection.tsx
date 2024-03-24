import React from 'react';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import Navbar from './Navbar';
import image1 from '../Design/1.png';
import image2 from '../Design/2.png';
import image3 from '../Design/3.png';
import image4 from '../Design/4.png';
import image5 from '../Design/5.png';
import image6 from '../Design/6.png';

function Collection() {
    const images = [image1, image2, image3, image4, image5, image6];

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgGradient="linear(to-b, #CC9975, #f5f5dc, #ffffff)"
            height="100vh" // Vous pouvez garder cette hauteur pour remplir la vue verticale
            width="100vw"
            overflowY="hidden" // Empêche le défilement sur l'ensemble de la page
        >
            <Navbar />

            {/* Ajout d'une Box pour contenir le contenu défilable */}
            <Box
                width="50%" // Ajustement pour un meilleur contrôle de la largeur
                maxH="calc(100vh - 100px)" // Hauteur maximale pour permettre le défilement
                overflowY="auto" // Active le défilement vertical si le contenu dépasse la hauteur maximale
                padding="20px"
            >
                <Box color="whiteAlpha" fontFamily="Roboto" textAlign="center" >
                    <h1>My Collection</h1>
                    <SimpleGrid columns={[1, null, 3]} spacing="40px">
                        {images.map((image, index) => (
                            <Box key={index} boxShadow="md" borderRadius="md" overflow="hidden">
                                <Image src={image} alt={`Collection ${index + 1}`} />
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
}

export default Collection;
