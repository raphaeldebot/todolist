// src/components/PetalsScene.js

import React from 'react';
import Whirlwind from './Whirlwind';

const PetalsScene = () => {
  return (
    <>
      {/* Spirale centrale très fine */}
      <Whirlwind
        position={[30, -35, -20]}
        spiralParams={{
          radius: 1.5,        // Rayon très petit pour une spirale très fine
          height: 850,
          turns: 2.6,
          speedMultiplier: 0.05,
        }}
        rotationDirection={1}
        numPetals={100}
      />

      {/* Première spirale extérieure */}
      <Whirlwind
        position={[30, -35, -20]}
        spiralParams={{
          radius: 3,          // Rayon plus grand pour les spirales extérieures
          height: 980,
          turns: 3,
          speedMultiplier: 0.05,
        }}
        rotationDirection={-1} // Sens de rotation inverse pour croisement
        numPetals={100}
      />

      {/* Deuxième spirale extérieure avec phase shift */}
      <Whirlwind
        position={[30, -35, -20]}
        spiralParams={{
          radius: 1.5,
          height: 1000,
          turns: 3.1,
          speedMultiplier: 0.05,
        }}
        rotationDirection={1} // Sens de rotation normal
        numPetals={100}
      />
    </>
  );
};

export default PetalsScene;
