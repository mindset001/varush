"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const NAVY = "#13335c";
const GOLD = "#c8932c";
const STEEL = "#9aa5b1";
const GLASS = "#7fb3d5";

function CraneArm() {
  const armRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!armRef.current) return;
    armRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.5;
  });

  return (
    <group position={[0, 3.6, 0]} ref={armRef}>
      {/* tower top */}
      <mesh castShadow>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.3} />
      </mesh>
      {/* jib (long arm) */}
      <mesh position={[1.6, 0, 0]} castShadow>
        <boxGeometry args={[3.2, 0.12, 0.12]} />
        <meshStandardMaterial color={STEEL} metalness={0.5} roughness={0.4} />
      </mesh>
      {/* counter-jib */}
      <mesh position={[-0.9, 0, 0]} castShadow>
        <boxGeometry args={[1.4, 0.12, 0.12]} />
        <meshStandardMaterial color={STEEL} metalness={0.5} roughness={0.4} />
      </mesh>
      {/* support cables */}
      <mesh position={[0.8, -0.35, 0]} rotation={[0, 0, -0.55]}>
        <cylinderGeometry args={[0.015, 0.015, 1.3, 6]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <mesh position={[-0.5, -0.25, 0]} rotation={[0, 0, 0.7]}>
        <cylinderGeometry args={[0.015, 0.015, 0.85, 6]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      {/* hoist line + hook */}
      <mesh position={[2.6, -0.9, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 1.6, 6]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[2.6, -1.75, 0]} castShadow>
        <boxGeometry args={[0.18, 0.12, 0.18]} />
        <meshStandardMaterial color={GOLD} metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Tower() {
  return (
    <group>
      <mesh position={[0, 1.8, 0]} castShadow>
        <boxGeometry args={[0.22, 3.6, 0.22]} />
        <meshStandardMaterial color={NAVY} metalness={0.4} roughness={0.5} />
      </mesh>
      <CraneArm />
    </group>
  );
}

function Building({
  position,
  size,
  glass = false,
}: {
  position: [number, number, number];
  size: [number, number, number];
  glass?: boolean;
}) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={glass ? GLASS : NAVY}
        metalness={glass ? 0.2 : 0.3}
        roughness={glass ? 0.1 : 0.7}
        transparent={glass}
        opacity={glass ? 0.85 : 1}
      />
    </mesh>
  );
}

function Scene() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <group position={[0, -1, 0]}>
          <Building position={[-1.6, 0.6, -0.8]} size={[1, 1.2, 1]} />
          <Building position={[1.5, 1.1, -1.2]} size={[1.1, 2.2, 1.1]} glass />
          <Building position={[0, 0.4, 1.4]} size={[1.3, 0.8, 1.3]} />
          <Tower />
        </group>
      </Float>
      <ContactShadows
        position={[0, -1.55, 0]}
        opacity={0.45}
        scale={10}
        blur={2.5}
        far={4}
      />
      {hovered && null}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [5, 3, 6], fov: 42 }}
      className="!touch-none"
    >
      <color attach="background" args={["#0b2545"]} />
      <hemisphereLight intensity={0.6} color="#cfe3ff" groundColor="#0b2545" />
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.6}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, -4]} intensity={0.6} color={GOLD} />
      <pointLight position={[3, 1, 4]} intensity={0.3} color={GLASS} />
      <Scene />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.1}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
