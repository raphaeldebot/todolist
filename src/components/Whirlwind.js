// src/components/Whirlwind.js

import React, { useMemo } from 'react';
import Petal from './Petal';

const Whirlwind = ({
  position = [0, 0, 0],
  spiralParams,
  rotationDirection = 1,
  phaseShift = 0,
  numPetals = 100,
}) => {
  const { radius, height, turns, speedMultiplier } = spiralParams;

  const pathFunction = t => {
    const angle = rotationDirection * t * Math.PI * 2 * turns + phaseShift;
    const x = position[0] + radius * Math.cos(angle);
    const y = position[1] + (height * t) / (Math.PI * 2 * turns);
    const z = position[2] + radius * Math.sin(angle);
    return { x, y, z };
  };

  const petals = useMemo(() => {
    const petalsArray = [];
    for (let i = 0; i < numPetals; i++) {
      const initialProgress = i / numPetals;
      const speed = speedMultiplier * (0.5 + Math.random() * 0.5);
      const scale = Math.random() * 0.5 + 0.5;

      petalsArray.push({
        initialProgress,
        speed,
        scale,
      });
    }
    return petalsArray;
  }, [numPetals, speedMultiplier]);

  return (
    <>
      {petals.map((petal, index) => (
        <Petal
          key={index}
          pathFunction={pathFunction}
          speed={petal.speed}
          initialProgress={petal.initialProgress}
          scale={petal.scale}
        />
      ))}
    </>
  );
};

export default Whirlwind;
