import React, { ReactNode, useEffect, useState } from 'react';
import Map from './Map_shared'; // Assurez-vous que le chemin est correct
import { Box, Button } from '@chakra-ui/react';

function ClientPage() {
const [restaurants, setRestaurants] = useState<{
    lng: number;
    name: ReactNode;
    lat: number; id: string 
}[]>([]);

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
  );
}

export default ClientPage;
