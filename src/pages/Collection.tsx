import React from "react";
import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Button,
  Flex
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import image1 from "../Design/1.png";
import image2 from "../Design/2.png";
import image3 from "../Design/3.png";
import image4 from "../Design/4.png";
import image5 from "../Design/5.png";
import image6 from "../Design/6.png";
import imageMint from "../Design/mint.png";

import { Magic } from 'magic-sdk';
import { TaquitoExtension } from '@magic-ext/taquito';
import { TezosToolkit } from '@taquito/taquito';

import "./Collection.css";


const apiKey: string = "pk_live_6E23BEDC7CE6E1F0" || "";
const contractAddress : string = '0x560232A33871202F2E3a79B7e39179fC1aDf2040'; 
const minterAddress : string = 'tz1LWpG9wYs6Yv6rFgWTkMzfmuV5tQgLAgDY';


const magic = new Magic(apiKey, {
  extensions: [
    new TaquitoExtension({
      rpcUrl: "https://ghostnet.tezos.marigold.dev/",
    }),
  ],
});

const Tezos = new TezosToolkit('https://rpc.ithacanet.teztnets.xyz');

function Collection() {
  const images = [image1, image2, image3, image4, image5, image6];

  const mintNft = async () => {
    try {
        const magicSigner = await magic.taquito.createMagicSigner();
        Tezos.setProvider({signer: magicSigner});
        console.log('magicSigner', magicSigner); 
        console.log('Tezos', Tezos);
        console.log('contractAddress', contractAddress);
        console.log('minterAddress', minterAddress);

    
        const contract = await Tezos.contract.at(contractAddress);
        const operation = await contract.methods.mint(minterAddress).send();
    
        await operation.confirmation();
        alert('NFT minted!');
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-b, #CC9975, #f5f5dc, #ffffff)"
      height="100%" // Vous pouvez garder cette hauteur pour remplir la vue verticale
      width="100%"
      padding="2rem"
      overflowY="scroll" // Empêche le défilement sur l'ensemble de la page
    >
      <Navbar />

      {/* Ajout d'une Box pour contenir le contenu défilable */}
      <Box
        width="100%" // Ajustement pour un meilleur contrôle de la largeur
        // maxH="calc(100vh - 100px)" // Hauteur maximale pour permettre le défilement
        height="100%"
        overflowY="auto" // Active le défilement vertical si le contenu dépasse la hauteur maximale
        padding="20px"
        textAlign={"center"}
        // Size of text bigger
        fontSize="3xl"
      >
        <h1 className="title">My Collection</h1>

        <Box color="Black" fontFamily="Roboto" textAlign="center">
          <SimpleGrid columns={[1, null, 3]} spacing="40px">
            {images.map((image, index) => (
              <Box
                key={index}
                boxShadow="md"
                borderRadius="md"
                overflow="hidden"
              >
                <Image src={image} alt={`Collection ${index + 1}`} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Box color="black" fontFamily="Roboto" textAlign="center">
        <h1 className="title">Mint your pass</h1>
        <Flex
            width='90vw'
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
            gap='5px'

            >
                <Flex flexDirection='column'alignItems='center'>
                <Text
                    textAlign={'left'}
                    width='70%'
                    margin={'auto'}>
                    <h1 className='subtitles'>Buy you're Loyaulty pass</h1>
                    The most secure marketplace for buying and selling unique LoyaulT card.

                </Text>
            <Button
                colorScheme="whiteAlpha"
                borderRadius="10px"
                textColor="black"
                height="55px"
                width="150px"
                margin="10px"
                justifyContent="center"
                alignItems="center"
                border="1px solid black"
                _hover={{ border: "1px solid black" }}
                fontFamily={"Bebas Neue"}
                color={"black"}
                onClick={mintNft}
            >
                Mint
            </Button>
            </Flex>

            <Image src={imageMint} alt="Your alt text" boxSize="50vh" />

        </Flex>
        
      </Box>
    </Box>
  );
}

export default Collection;
