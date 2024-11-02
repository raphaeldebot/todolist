// src/components/Petal.js

import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import petalTexture from '../assets/cherry-blossom-petal.png';

const Petal = ({ pathFunction, speed, initialProgress = 0, scale = 1 }) => {
  const petalRef = useRef();
  const texture = useLoader(TextureLoader, petalTexture);
  const progress = useRef(initialProgress);

  useFrame((state, delta) => {
    if (petalRef.current) {
      // Mettre à jour la progression en fonction de la vitesse et du delta time
      progress.current += speed * delta;
      if (progress.current > 1) {
        progress.current -= 1; // Boucle la progression
      }

      // Obtenir la position le long de la spirale
      const { x, y, z } = pathFunction(progress.current);
      petalRef.current.position.set(x, y, z);

      // Faire tourner le pétale sur lui-même pour un effet réaliste
      petalRef.current.rotation.x += 0.1;
      petalRef.current.rotation.y += 0.1;
    }
  });

  return (
    <sprite ref={petalRef} scale={[scale, scale, scale]}>
      <spriteMaterial map={texture} transparent={true} />
    </sprite>
  );
};

export default Petal;
