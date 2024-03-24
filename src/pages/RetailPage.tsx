import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Importation de Leaflet pour accéder aux types
import { Box, Input, Textarea } from '@chakra-ui/react';
import Navbar from './Navbar';
import { db } from './api/firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 

const saveLocationDataToFirestore = async (locationData: any) => {
  try {
    const docRef = await addDoc(collection(db, "locations"), locationData);
    console.log("Document écrit avec ID: ", docRef.id);
  } catch (e) {
    console.error("Erreur lors de l'ajout du document: ", e);
  }
};

const LocationMarker = () => {
  useMapEvents({
    click: async (e) => {
      // Les coordonnées du point cliqué
      const { lat, lng } = e.latlng;
      
      // Sauvegarde des données dans Firestore
      const locationData = { latitude: lat, longitude: lng, timestamp: new Date() };
      
      try {
        await saveLocationToFirestore(locationData);
        console.log("Location saved to Firestore successfully.");
      } catch (error) {
        console.error("Error saving location to Firestore: ", error);
      }
    }
  });

  return null; 
};




function RetailPage() {
  
  

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
          <Input width='50%' placeholder="Enter info" />

          <p>Adresse</p>
          <Input width='50%' placeholder="Enter info" />
          
          <p>Mission Description</p>
          <Textarea width='50%' placeholder="Enter info" />

          <div data-date>
            <p>Start date</p>
            <input type="date" id="start-date" name="start-date"/>
            <p>End date</p>
            <input type="date" id="end-date" name="end-date"/>
          </div>
        </Box>
      </div>

      // Et dans votre MapContainer :
<div style={{ height: '400px', width: '400px', position: 'fixed', right: '10px', top: '30%', zIndex: 1000, left: '70%' }}>
  <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: '100%', width: '100%' }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <LocationMarker />
  </MapContainer>
</div>

    </Box>
  );
}

export default RetailPage;
function saveLocationToFirestore(locationData: { latitude: number; longitude: number; timestamp: Date; }) {
  throw new Error('Function not implemented.');
}

