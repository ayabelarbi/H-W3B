import React from 'react';

const Logo = () => {
    const logoStyle = {
        fontSize: '2rem', // Taille du texte
        fontWeight: 'bold', // Épaisseur du texte
        color: '#007bff', // Couleur du texte
        textShadow: '2px 2px 4px #000000', // Ombre du texte pour un effet en relief
        fontFamily: 'century gothic', // Police du texte
        display: 'flex', // Utilisation de Flexbox pour centrer le logo
        justifyContent: 'center', // Centrage horizontal dans le conteneur
        alignItems: 'center', // Centrage vertical dans le conteneur
        height: '100vh' // Hauteur du conteneur pour centrer le logo dans la page
    };

    return (
        <div style={logoStyle}>
            LoyalT
        </div>
    );
};

export default Logo;
