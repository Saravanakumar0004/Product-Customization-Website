import { Center, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useCustomization } from '../contexts/Custamization'

const Chair = (props) => {
  const { nodes, materials } = useGLTF('./model/chair.gltf')
  const { material, legs, selectedChairColor, selectedCushionColor } = useCustomization();

  const leathertextureprops = useTexture({
    // map: './textures/leather/Leather_008_Base Color.jpg',
    normalMap: './textures/leather/Leather_008_Normal.jpg',
    roughnessMap: './textures/leather/Leather_008_Roughness.jpg',
    aoMap: './textures/leather/Leather_008_Ambient Occlusion.jpg',
  })

  Object.values(leathertextureprops).forEach(tex => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    tex.repeat.set(3, 3)
  })

const fabrictextureprops = useTexture({
  // map: '/textures/fabric/Fabric_Knitted_006_basecolor.jpg',
  normalMap: '/textures/fabric/Fabric_Knitted_006_normal.jpg',
  roughnessMap: '/textures/fabric/Fabric_Knitted_006_roughness.jpg',
  aoMap: '/textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg',
})




  Object.values(fabrictextureprops).forEach(tex => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    tex.repeat.set(3, 3)
  })

  return (
    <Center>
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Chair.geometry} material={materials.Chair}>
          <meshStandardMaterial {...(material === "leather" ? leathertextureprops:fabrictextureprops) } color={selectedChairColor.color}/>
        </mesh>
        <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} position={[0, 0.064, 0.045]}>
          <meshStandardMaterial {...fabrictextureprops} color={selectedCushionColor.color}/>
        </mesh>
        <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} visible={legs === 1} />
        <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={legs === 2}/>
      </group>
    </Center>
  )
}

useGLTF.preload('./model/chair.gltf')
export default Chair
