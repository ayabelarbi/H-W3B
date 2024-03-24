import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [activePosition, setActivePosition] = useState(null);

  const handleMapClick = (event) => {
    // Store the clicked position in the state
    setActivePosition(event.latlng);
  };

  // Add a surrounding div with a background color style
  return (
    <div style={{ backgroundColor: '#f0f0f0', height: '100vh', width: '100vw' }}> {/* Adjust the background color as needed */}
      <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: '400px', width: '100%' }} onClick={handleMapClick}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {activePosition && (
          <Marker position={activePosition}>
            <Popup>
              Vous avez cliqué sur la position <br /> Latitude: {activePosition.lat.toFixed(3)}, Longitude: {activePosition.lng.toFixed(3)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
