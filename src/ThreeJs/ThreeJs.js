import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState } from "react";
import videojs from "video.js";

import * as THREE from "three";
import { players } from "video.js";
const [movieFetched, setMovieFetched] = useState(false);

function Screen() {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    const source = document.createElement("source");
    source.src = "https://cdn.livepeer.com/hls/e50dekpfmh072xab/index.m3u8";
    vid.appendChild(source);
    vid.setAttribute("id", "gVideo");

    return vid;
  });
  console.log(video);
  return (
    <group>
      <mesh
        position={[0, 2, -50]}
        onClick={() => {
          videojs(video).play();
        }}
      >
        <boxBufferGeometry
          attach="geometry"
          args={[90, 50, 1]}
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
        <planeGeometry args={[3.2, 1.9]} />
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
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
}
export default function Theatre() {
  // useEffect(() => void video.play(), [video]);

  return (
    <Canvas color="black">
      {/* <fog attach="fog" args={["black", 1, 20]}></fog> */}
      <color attach="background" args={["black"]} />
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
      <Stars />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} />
      <Screen />
      <Floor />
    </Canvas>
  );
}
