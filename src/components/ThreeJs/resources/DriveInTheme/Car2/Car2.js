/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import car2 from "./car2.glb";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(car2);
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.26, -0.01]} scale={1.13}>
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube_3.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube_4.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Cube_5.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Cube_6.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          geometry={nodes.Cube_7.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Cube_8.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-0.01, -0.35, -2.75]}
        rotation={[1.27, 0, 0]}
        scale={[-0.2, 1.01, -0.08]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[0, -0.47, 2.56]}
        rotation={[1.53, 0, 0]}
        scale={[-0.2, 1.01, -0.08]}
      />
      <mesh
        geometry={nodes.Text.geometry}
        material={materials["Material.010"]}
        position={[0.18, -0.39, -2.74]}
        rotation={[1.31, 0, Math.PI]}
        scale={[0.08, 1.5, 0.1]}
      />
      <mesh
        geometry={nodes.Text001.geometry}
        material={materials["Material.011"]}
        position={[0.19, -0.52, 2.56]}
        rotation={[1.55, 0, Math.PI]}
        scale={[0.08, 1.5, 0.1]}
      />
    </group>
  );
}

useGLTF.preload("/car2.glb");