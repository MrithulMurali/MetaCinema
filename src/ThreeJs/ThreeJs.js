import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState } from "react";
import videojs from "video.js";
import axios from "axios";
import * as THREE from "three";
import { players } from "video.js";

function Screen() {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    const source = document.createElement("source");
    source.src = "https://cdn.livepeer.com/hls/e50dekpfmh072xab/index.m3u8";
    vid.appendChild(source);
    vid.setAttribute("id", "gVideo");

    return vid;
  });
  return (
    <group position={[-3, 23, -50]}>
      <mesh
        onClick={() => {
          videojs(video).play();
        }}
      >
        <boxBufferGeometry
          attach="geometry"
          args={[100, 50, 1]}
        ></boxBufferGeometry>
        <meshStandardMaterial color={"white"}></meshStandardMaterial>
      </mesh>
      <mesh
        onClick={() => {
          video.play();
        }}
        rotation={[0, 0, 0]}
        position={[0, 0, 1.1]}
      >
        <planeGeometry args={[100, 50, 1]} />
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
}
function Floor() {
  return (
    <mesh position={[-2, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[100, 100]}></planeBufferGeometry>
      <meshStandardMaterial color={"yellow"} side={THREE.DoubleSide} />
    </mesh>
  );
}
//Themes

function Cinema() {
  return (
    //Side walls
    <group>
      <mesh
        position={[-52, 23, 0]}
        rotation={[0, THREE.MathUtils.degToRad(90), 0]}
      >
        <planeBufferGeometry args={[100, 50, 1]} />
        <meshStandardMaterial color={"grey"} />
      </mesh>
      <mesh
        position={[48, 23, 0]}
        rotation={[0, -THREE.MathUtils.degToRad(90), 0]}
      >
        <planeBufferGeometry args={[100, 50, 1]} />
        <meshStandardMaterial color={"grey"} />
      </mesh>
    </group>
  );
}
export default function Theatre() {
  // useEffect(() => void video.play(), [video]);

  return (
    <Canvas color="black">
      {/* <fog attach="fog" args={["black", 1, 90]}></fog> */}
      <color attach="background" args={["black"]} />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <Stars count={1000} radius={70} fade={true} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} />
      <Screen />
      <Cinema />
      <Floor />
    </Canvas>
  );
}
