import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { Mesh } from 'three';

function Icosahedron() {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.elapsedTime * 0.13;
    ref.current.rotation.y = clock.elapsedTime * 0.20;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshBasicMaterial color="#111111" wireframe />
    </mesh>
  );
}

export default function FloatingShape() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <Icosahedron />
    </Canvas>
  );
}
