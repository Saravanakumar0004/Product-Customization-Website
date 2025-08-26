import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, Bounds } from '@react-three/drei';
import { useCustomization } from '../Waterbottle/customization';
import { WaterBottleModel } from './WaterBottleModel';

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeGeometry args={[200, 200]} />
      <shadowMaterial opacity={0.9} />
    </mesh>
  );
}

export default function Experience() {
  const { selectedBottleColor } = useCustomization();

  return (
    <Canvas
      className="canvas"
      style={{ height: '100vh', width: '100vw' }}
      shadows
      camera={{ fov: 50 }}
    >
      <fog attach="fog" args={["#101010", 10, 50]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={20}
        shadow-camera-top={50}
        shadow-camera-bottom={-10}
      />

      <Bounds fit clip observe margin={1.2}>
        <Center>
          <WaterBottleModel
            selectedBottleColor={selectedBottleColor}
            scale={2}
          />
        </Center>
      </Bounds>

      <Ground />
      <OrbitControls makeDefault />
    </Canvas>
  );
}
