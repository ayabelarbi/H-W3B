// Map.tsx
import React from 'react';

interface MapProps {
  lat: number;
  lng: number;
}

const Map_shared: React.FC<MapProps> = ({ lat, lng }) => {
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lng}`;
  return (
    <iframe
      width="100%"
      height="450"
      frameBorder="0"
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
      src={mapSrc}
      style={{ border: 0 }}
      allowFullScreen
    ></iframe>
  );
};

export default Map_shared;
