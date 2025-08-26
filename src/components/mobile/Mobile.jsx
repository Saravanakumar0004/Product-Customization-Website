import React from "react";
import { useGLTF } from "@react-three/drei";

export function Mobile({
  selectedFrameColor = { color: "#888888" },
  selectedScreenColor = { color: "#000000" },
  selectedBackColor = { color: "#ffffff" },
  ...props
}) {
  const { nodes, materials } = useGLTF("/model/mobile.gltf"); 

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.back_details.geometry} material={materials.back_details} />
        <mesh geometry={nodes.back_details_filledRings.geometry} material={materials.back_cover_thickness} />
        <mesh geometry={nodes.back_details_glass.geometry} material={materials.glass} />
        <mesh geometry={nodes.back_inside.geometry} material={materials.back_inside} />


        <mesh geometry={nodes.backCover.geometry}>
          <meshStandardMaterial color={selectedBackColor.color} />
        </mesh>

        <mesh geometry={nodes.backCover_camera.geometry} material={materials.back_cover_thickness} />
        <mesh geometry={nodes.camera_front.geometry} material={materials.cameras} />
        <mesh geometry={nodes.camera_front_glass.geometry} material={materials.cameras_lense} />


        <mesh geometry={nodes.frame_plastic.geometry}>
          <meshStandardMaterial color={selectedFrameColor.color} />
        </mesh>

        <mesh geometry={nodes.frame_plastic_border.geometry} material={materials.frame_border} />

        <mesh geometry={nodes.frontScreen.geometry} material={materials.glass} />
        <mesh geometry={nodes.glass_cover.geometry} material={materials.glass} />
        <mesh geometry={nodes.lens_edge.geometry} material={materials.lens_edge} />
        <mesh geometry={nodes.lens_edge_cover.geometry} material={materials.lens_edge_cover} />
        <mesh geometry={nodes.lense_house.geometry} material={materials.lens_edge} />
        <mesh geometry={nodes.lense_house_edge.geometry} material={materials.lens_edge_cover} />
        <mesh geometry={nodes.lense_inner.geometry} material={materials.cameras} />
        <mesh geometry={nodes.lenses.geometry} material={materials.cameras_lense} />
        <mesh geometry={nodes.on_off_switch.geometry} material={materials.switches} />
        <mesh geometry={nodes.screen.geometry}>
          <meshStandardMaterial color={selectedScreenColor.color} />
        </mesh>

        <mesh geometry={nodes.sim_tray.geometry} material={materials.frame} />
        <mesh geometry={nodes.usb_c.geometry} material={materials.usbc} />
        <mesh geometry={nodes.volume_down.geometry} material={materials.switches} />
        <mesh geometry={nodes.volume_up.geometry} material={materials.switches} />
      </group>
    </group>
  );
}

useGLTF.preload("/model/mobile.gltf");
