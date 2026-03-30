import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 400 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 9999, y: 9999 });
  const { viewport } = useThree();

  const [positions, homePositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const home = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * viewport.width * 2.5;
      const y = (Math.random() - 0.5) * viewport.height * 2.5;
      const z = (Math.random() - 0.5) * 2;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      home[i * 3] = x;
      home[i * 3 + 1] = y;
      home[i * 3 + 2] = z;
    }
    return [pos, home];
  }, [count, viewport.width, viewport.height]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = 0.8 + Math.random() * 1.2; // 0.8 to 2.0 px
    }
    return s;
  }, [count]);

  useFrame(({ pointer, viewport: v }) => {
    if (!mesh.current) return;
    const geo = mesh.current.geometry;
    const posAttr = geo.getAttribute('position') as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    const mx = (pointer.x * v.width) / 2;
    const my = (pointer.y * v.height) / 2;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;

      const dx = arr[ix] - mx;
      const dy = arr[iy] - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const interactionRadius = 3;

      if (dist < interactionRadius) {
        // Push particles away from cursor
        const force = (1 - dist / interactionRadius) * 0.15;
        const angle = Math.atan2(dy, dx);
        arr[ix] += Math.cos(angle) * force;
        arr[iy] += Math.sin(angle) * force;
      } else {
        // Lerp back to home position
        arr[ix] += (homePositions[ix] - arr[ix]) * 0.02;
        arr[iy] += (homePositions[iy] - arr[iy]) * 0.02;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.2}
        color="#6366F1"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

interface ParticleFieldProps {
  count?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ParticleField({ count = 400, className, style }: ParticleFieldProps) {
  return (
    <div
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ pointerEvents: 'auto' }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 1.5]}
      >
        <Particles count={count} />
      </Canvas>
    </div>
  );
}
