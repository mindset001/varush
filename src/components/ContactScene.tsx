"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const NAVY = "#13335c";
const GOLD = "#c8932c";

function Pin() {
  return (
    <group position={[0, 0.4, 0]}>
      <mesh position={[0, 0.55, 0]} castShadow>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color={GOLD} metalness={0.5} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshStandardMaterial color={NAVY} metalness={0.3} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.35, 0]} rotation={[Math.PI, 0, 0]} castShadow>
        <coneGeometry args={[0.45, 1.1, 32]} />
        <meshStandardMaterial color={GOLD} metalness={0.5} roughness={0.25} />
      </mesh>
    </group>
  );
}

function PulseRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime % 2.5) / 2.5;
    const scale = 0.6 + t * 1.8;
    ref.current.scale.set(scale, scale, scale);
    const material = ref.current.material as THREE.MeshBasicMaterial;
    material.opacity = 0.5 * (1 - t);
  });

  return (
    <mesh ref={ref} position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.7, 0.85, 48]} />
      <meshBasicMaterial color={GOLD} transparent opacity={0.4} />
    </mesh>
  );
}

function OrbitingNote({
  radius,
  speed,
  offset,
  height,
}: {
  radius: number;
  speed: number;
  offset: number;
  height: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const angle = state.clock.elapsedTime * speed + offset;
    ref.current.position.set(
      Math.cos(angle) * radius,
      height + Math.sin(state.clock.elapsedTime * 1.5 + offset) * 0.15,
      Math.sin(angle) * radius
    );
    ref.current.rotation.y = angle;
  });

  return (
    <group ref={ref}>
      <mesh castShadow>
        <boxGeometry args={[0.32, 0.22, 0.04]} />
        <meshStandardMaterial color="#f4f4f5" metalness={0.1} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0, 0.025]}>
        <planeGeometry args={[0.24, 0.14]} />
        <meshStandardMaterial color={NAVY} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        <Pin />
        <PulseRing />
        <OrbitingNote radius={1.6} speed={0.6} offset={0} height={0.6} />
        <OrbitingNote radius={1.9} speed={0.45} offset={2.4} height={1.1} />
        <OrbitingNote radius={1.4} speed={0.7} offset={4.6} height={0.2} />
      </group>
    </Float>
  );
}

export default function ContactScene() {
  return (
    <Canvas shadows camera={{ position: [3.5, 2.2, 4.5], fov: 42 }} className="!touch-none">
      <color attach="background" args={["#0b2545"]} />
      <hemisphereLight intensity={0.6} color="#cfe3ff" groundColor="#0b2545" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 4]} intensity={1.5} castShadow />
      <pointLight position={[-3, 2, -3]} intensity={0.5} color={GOLD} />
      <Scene />
      <ContactShadows position={[0, -1.05, 0]} opacity={0.45} scale={6} blur={2.5} far={3} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.9}
      />
    </Canvas>
  );
}
