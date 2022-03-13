import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  SpotLight,
  Stars,
  useFBX,
  useGLTF,
} from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState } from "react";
import videojs from "video.js";
import axios from "axios";
import * as THREE from "three";
import { RectAreaLight, TextureLoader } from "three";
import wall1 from "./resources/cinemaTheme/wall/basewall.jpg";
import wall1ao from "./resources/cinemaTheme/wall/AmbientOcclusionMap.png";
import wall1dis from "./resources/cinemaTheme/wall/DisplacementMap.png";
import wall1nor from "./resources/cinemaTheme/wall/NormalMap.png";
import wall1spec from "./resources/cinemaTheme/wall/SpecularMap.png";
import tile1 from "./resources/cinemaTheme/tiles/basetiles.png";
import tile1hgt from "./resources/cinemaTheme/tiles/height.png";
import tile1ao from "./resources/cinemaTheme/tiles/ao.png";
import tile1met from "./resources/cinemaTheme/tiles/metallic.png";
import tile1rgh from "./resources/cinemaTheme/tiles/roughness.png";
import tile1nor from "./resources/cinemaTheme/tiles/normal.png";
import Curtain from "./resources/cinemaTheme/curtains/Curtain";
import Lamp from "./resources/cinemaTheme/floodlight/Lamp";
import Seats from "./resources/cinemaTheme/seats/Seats.js";
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
// function Floor() {
//   return (
//     <mesh position={[-2, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//       <planeBufferGeometry args={[100, 100]}></planeBufferGeometry>
//       <meshStandardMaterial color={"yellow"} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }
//Themes

function Cinema() {
  //wall
  const [colorMap, displacementMap, normalMap, specularMap, aoMap] = useLoader(
    TextureLoader,
    [wall1, wall1dis, wall1nor, wall1spec, wall1ao]
  );
  //tiles
  const [
    tcolorMap,
    tdisplacementMap,
    tnormalMap,
    tmetalnessMap,
    troughnessMap,
    taoMap,
  ] = useLoader(TextureLoader, [
    tile1,
    tile1hgt,
    tile1nor,
    tile1met,
    tile1rgh,
    tile1ao,
  ]);
  return (
    //Side walls
    <>
      <group>
        <mesh
          position={[-52, 23, 0]}
          rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        >
          <planeBufferGeometry args={[100, 50, 1]} />
          <meshStandardMaterial
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={specularMap}
            aoMap={aoMap}
          />
        </mesh>
        <mesh
          position={[48, 23, 5]}
          rotation={[0, -THREE.MathUtils.degToRad(90), 0]}
        >
          <planeBufferGeometry args={[115, 50, 1]} />
          <meshStandardMaterial
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={specularMap}
            aoMap={aoMap}
          />
        </mesh>
      </group>
      {/* Floor */}
      <mesh position={[-2, -2, 5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[100, 115]}></planeBufferGeometry>
        <meshStandardMaterial
          map={tcolorMap}
          displacementMap={tdisplacementMap}
          normalMap={tnormalMap}
          roughnessMap={troughnessMap}
          metalnessMap={tmetalnessMap}
          aoMap={taoMap}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Curtains */}
      <Suspense fallback={null}>
        <rectAreaLight
          width={100}
          height={30}
          position={[-3, 0, -24]}
          intensity={1}
          color={"red"}
        />
        <rectAreaLight
          width={100}
          height={30}
          position={[-3, 0, 5]}
          intensity={1}
          color={"red"}
        />
        <rectAreaLight
          width={100}
          height={30}
          position={[-3, 0, 34]}
          intensity={1}
          color={"red"}
        />
        <rectAreaLight
          width={100}
          height={30}
          position={[-3, 0, 64]}
          intensity={1}
          color={"red"}
        />
        {/* {curtain lights} */}
        <rectAreaLight
          width={100}
          height={30}
          position={[-55, 25, 10]}
          intensity={1}
          rotation={[0, -Math.PI / 2, 0]}
          color={"red"}
        />
        <rectAreaLight
          width={100}
          height={30}
          position={[20, 20, 5]}
          intensity={1}
          rotation={[0, -Math.PI / 2, 0]}
          color={"red"}
        />

        <Curtain position={[46.5, 7, -2]} scale={6} />
        <Curtain position={[-51, 7, -2]} scale={6} />
      </Suspense>
      {/* Lamp */}
      <Suspense fallback={null}>
        <Lamp position={[45, 0, 40]} rotation={[0, -Math.PI / 1.2, 0]} />
        <Lamp position={[45, 0, 10]} rotation={[0, -Math.PI / 1.2, 0]} />
        <Lamp position={[45, 0, -20]} rotation={[0, -Math.PI / 1.2, 0]} />
        <Lamp position={[-49, 0, 40]} rotation={[0, -Math.PI / 5, 0]} />
        <Lamp position={[-49, 0, 10]} rotation={[0, -Math.PI / 5, 0]} />
        <Lamp position={[-49, 0, -20]} rotation={[0, -Math.PI / 5, 0]} />
        <group rotation={[0, -Math.PI / 10, 0]}>
          <spotLight intensity={1.2} color={"blue"} position={[60, 5, 47]} />
        </group>
      </Suspense>
      {/* {Seats} */}
      <Suspense fallback={null}>
        <group>
          <Seats
            scale={0.06}
            rotation={[0, -Math.PI, 0]}
            position={[-35, 5, 2]}
          />
          <Seats
            scale={0.06}
            rotation={[0, -Math.PI, 0]}
            position={[-18, 5, 2]}
          />
          <Seats
            scale={0.06}
            rotation={[0, -Math.PI, 0]}
            position={[-35, 5, 30]}
          />
          <Seats
            scale={0.06}
            rotation={[0, -Math.PI, 0]}
            position={[-18, 5, 30]}
          />
        </group>
        <group>
          <Seats
            scale={0.06}
            rotation={[0, -Math.PI, 0]}
            position={[36, 5, 2]}
          />
          <Seats
            scale={0.06}
            rotation={[0, -Math.PI, 0]}
            position={[19, 5, 2]}
          />
          <Seats
            scale={0.06}
            rotation={[0, -Math.PI, 0]}
            position={[36, 5, 30]}
          />
          <Seats
            scale={0.06}
            rotation={[0, -Math.PI, 0]}
            position={[19, 5, 30]}
          />
        </group>
      </Suspense>
    </>
  );
}
export default function Theatre() {
  // useEffect(() => void video.play(), [video]);

  return (
    <Canvas color="black">
      {/* <fog attach="fog" args={["black", 1, 90]}></fog> */}
      <color attach="background" args={["black"]} />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.05} />
      <Stars count={1000} radius={70} fade={true} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} />
      <Screen />
      <Suspense fallback={null}>
        <Cinema />
      </Suspense>
    </Canvas>
  );
}
