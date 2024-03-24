import React, { ReactNode, useEffect, useState } from 'react';
import Map from './Map_shared'; // Assurez-vous que le chemin est correct
import { Box, Button } from '@chakra-ui/react';
import Navbar from './Navbar';

function ClientPage() {
const [restaurants, setRestaurants] = useState<{
    lng: number;
    name: ReactNode;
    lat: number; id: string 
}[]>([]);


console.log(restaurants);
useEffect(() => {
    const storedRestaurants = JSON.parse(localStorage.getItem('restaurants') || '[]');
    setRestaurants(storedRestaurants);
}, []);

const removeRestaurant = (id: string) => {
    const updatedRestaurants = restaurants.filter(restaurant => restaurant.id !== id);
    localStorage.setItem('restaurants', JSON.stringify(updatedRestaurants));
    setRestaurants(updatedRestaurants);
};

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

    <div>
      <h2>My Restaurants</h2>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {restaurants.map(restaurant => (
          <Box key={restaurant.id} p="5" m="2" borderWidth="1px" borderRadius="lg">
            <Map lat={restaurant.lat} lng={restaurant.lng} />
            <p>{restaurant.name}</p>
            <Button colorScheme="red" onClick={() => removeRestaurant(restaurant.id)}>Remove</Button>
          </Box>
          
        ))}
      </div>
    </div>

    </Box>
  );
}

export default ClientPage;
