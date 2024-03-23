import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Importation de Leaflet pour accéder aux types

function LocationMarker() {
  useMapEvents({
    click: (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      localStorage.setItem('selectedLocation', JSON.stringify({ lat, lng }));
      alert(`Location saved: ${lat}, ${lng}`);
    },
  });
  return null;
}

function RetailPage() {
  return (
    <div style={{ height: '100vh', width: '50%', float: 'right' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default RetailPage;
