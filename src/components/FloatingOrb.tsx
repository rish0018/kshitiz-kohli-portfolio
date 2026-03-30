import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(({ pointer }) => {
    if (!meshRef.current) return;
    mouse.current.x += (pointer.x * 2.5 - mouse.current.x) * 0.05;
    mouse.current.y += (pointer.y * 2.5 - mouse.current.y) * 0.05;
    meshRef.current.rotation.x = mouse.current.y * 0.3;
    meshRef.current.rotation.y = mouse.current.x * 0.3;
    meshRef.current.position.x = mouse.current.x * 1.8;
    meshRef.current.position.y = mouse.current.y * 1.8;
  });

  return (
    <Sphere ref={meshRef} args={[0.9, 64, 64]}>
      <MeshDistortMaterial
        color="#7C3AED"
        roughness={0.2}
        metalness={0.8}
        distort={0.35}
        speed={1.5}
        envMapIntensity={0.5}
      />
    </Sphere>
  );
}

interface FloatingOrbProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function FloatingOrb({ className, style }: FloatingOrbProps) {
  return (
    <div
      className={className}
      style={{ width: '100%', height: '100%', position: 'relative', ...style }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#8B5CF6" />
        <directionalLight position={[-3, -3, 2]} intensity={0.4} color="#6366F1" />
        <pointLight position={[0, 0, 3]} intensity={0.6} color="#a78bfa" />
        <Orb />
      </Canvas>
    </div>
  );
}
