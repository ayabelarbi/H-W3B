import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box, Button, Input, Textarea } from '@chakra-ui/react';
import { db } from './api/firebaseConfig';
import Navbar from './Navbar';
import { Firestore } from '@firebase/firestore';

// Component to handle map events and select location
const LocationSelector = ({ onLocationSelect }: { onLocationSelect: (location: { lat: number, lng: number }) => void }) => {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng);
    },
  });

  return null;
}

const RetailPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number; } | null>(null);


  const handleSubmit = async () => {
    if (!selectedLocation) {
      alert("Veuillez sélectionner une localisation sur la carte.");
      return;
    } else {
      console.log("selection located = ", selectedLocation);
      try {
        // const newData = {}; // Define the newData variable
        // await setDoc(doc(db, "your_collection_id", "custom_document_id"), newData);
        console.log("Document written successfully.");
        alert("Localisation enregistrée avec succès.");
        
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Erreur lors de l'enregistrement de la localisation.");
      }
    }
}

    


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

      

      <div className="information_retail" style={{ width: '80%', maxWidth: '960px', margin: '0 auto', padding: '20px', boxSizing: 'border-box' }}>
        <style dangerouslySetInnerHTML={{ __html: `
          p, [data-date] {
            color: black;
            font-family: 'Roboto', sans-serif;

          }
          input[type="date"] {
            background: ##EAEAEA; 
            border: 1px solid black; 
            color: black; 
            font-family: 'Roboto', sans-serif; /* Applique la police Roboto */
            padding: 5px; /* Un peu plus d'espace à l'intérieur du champ */
            border-radius: 5px; /* Bords arrondis */
            width: 50%; 
          }
          
          Input, Textarea {
            background: ##EAEAEA; /* Fond gris foncé pour les champs de texte */
            border: 1px solid black; /* Bordure blanche pour mieux voir les champs */
            color: black;
            font-family: 'Roboto', sans-serif; /* Applique la police Roboto */
            padding: 5px; /* Un peu plus d'espace à l'intérieur du champ */
            border-radius: 5px; /* Bords arrondis */
            width: 50%; /* Largeur de 100% */
            margin-bottom: 10px; /* Marge en bas pour espacer les champs */
          }
        ` }} />
        <Box>
          <p>Name of the restaurant</p>
          <Input width='50%' placeholder="Type here..." />

          <p>Adresse</p>
          <Input width='50%' placeholder="Type here..." />
          
          <p>Mission Description</p>
          <Textarea width='50%' placeholder="Type here..." />

          <div data-date>
            <p>Start date</p>
            <input type="date" id="start-date" name="start-date"/>
            <p>End date</p>
            <input type="date" id="end-date" name="end-date"/>
          </div>
        </Box>
      </div>

      
      <div style={{ height: '400px', width: '400px', position: 'fixed', right: '10px', top: '30%', zIndex: 1000, left: '70%' }}>
         <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: '100%', width: '100%' }}>
         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         <LocationSelector onLocationSelect={(location) => location && setSelectedLocation(location)} /> 
 </MapContainer>
  
  </div>

      <Button onClick={handleSubmit} mt="4" colorScheme="blue">
        Save the location
      </Button>

    </Box>

  );
}

export default RetailPage;

function setDoc(arg0: any, newData: any) {
  throw new Error('Function not implemented.');
}

function doc(db: Firestore, arg1: string, arg2: string): any {
  throw new Error('Function not implemented.');
}

