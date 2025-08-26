/*Command: npx gltfjsx public/model/WaterBottle.gltf*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function WaterBottleModel({
  selectedBottleColor = { color: "#888888" },
  ...props
}) {
  const { nodes } = useGLTF("/model/WaterBottle.gltf");

  return (
    <group {...props} dispose={null}>
      {nodes.WaterBottle && (
        <mesh
          geometry={nodes.WaterBottle.geometry}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <meshStandardMaterial color={selectedBottleColor.color} />
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload("/model/WaterBottle.gltf");
