// ClientPage.tsx
import React, { useEffect, useState } from 'react';
import Map from './Map_shared'; // Assurez-vous que le chemin d'importation est correct

function ClientPage() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    const savedLocationString = localStorage.getItem('selectedLocation');
    if (savedLocationString) {
      const savedLocation = JSON.parse(savedLocationString);
      setLocation(savedLocation);
    }
  }, []);

  return (
    <div>
      <h2>Client Page</h2>
      {location ? <Map lat={location.lat} lng={location.lng} /> : <p>No location selected</p>}
    </div>
  );
}

export default ClientPage;
