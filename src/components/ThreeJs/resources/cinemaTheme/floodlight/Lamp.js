/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import lamp from "./lamp.glb";
export default function Lamp({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(lamp);
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.01, -0.66, -0.04]} scale={[1, 0.93, 1.27]}>
        <mesh geometry={nodes.Cube.geometry} material={materials["case"]} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials.cord} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.glass} />
      </group>
    </group>
  );
}

useGLTF.preload("/lamp.glb");