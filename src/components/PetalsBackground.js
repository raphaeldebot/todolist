// src/components/PetalsBackground.js

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import PetalsScene from './PetalsScene';

const PetalsBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <Suspense fallback={null}>
          <PetalsScene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PetalsBackground;
