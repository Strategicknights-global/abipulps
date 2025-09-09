// src/components/FloatingSphere.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

// Animated Floating Main Sphere
const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (!sphereRef.current) return;
    const s = sphereRef.current;
    const t = clock.getElapsedTime();

    // Rotate slowly
    s.rotation.y += 0.003;

    // Smooth bounce only in Y axis
    s.position.y = 0.25 + Math.sin(t * 1.2) * 0.2;

    // Lock X & Z at center
    s.position.x = 0;
    s.position.z = 0;
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial color="#7b61ff" distort={0.3} speed={0.5} />
    </Sphere>
  );
};

// Orbiting Moons
const OrbitingMoon = ({ radius = 2, size = 0.3, speed = 1, color = "gray" }) => {
  const moonRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (moonRef.current) {
      moonRef.current.position.x = Math.cos(t) * radius;
      moonRef.current.position.z = Math.sin(t) * radius;
      moonRef.current.position.y = 0.2 * Math.sin(t * 1.5); // slight wobble
    }
  });

  return (
    <Sphere ref={moonRef} args={[size, 32, 32]}>
      <meshStandardMaterial color={color} />
    </Sphere>
  );
};

// Final Scene
export default function FloatingSphere() {
  return (
    <div>
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1000} />

      {/* Floating main sphere */}
      <AnimatedSphere />

      {/* Orbiting moons */}
      <OrbitingMoon radius={2} size={0.3} speed={1} color="lightgray" />
      <OrbitingMoon radius={3} size={0.2} speed={1.4} color="skyblue" />
      <OrbitingMoon radius={4} size={0.25} speed={0.8} color="pink" />
    </Canvas>
    </div>
  );
}
