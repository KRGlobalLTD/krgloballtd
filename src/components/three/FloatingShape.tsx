import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function OuterCube() {
  const ref = useRef<THREE.LineSegments>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.elapsedTime * 0.09;
    ref.current.rotation.y = clock.elapsedTime * 0.14;
  });

  const edges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.BoxGeometry(2.4, 2.4, 2.4)),
    []
  );

  return (
    <lineSegments ref={ref} geometry={edges}>
      <lineBasicMaterial color="#ffffff" />
    </lineSegments>
  );
}

function InnerCube() {
  const ref = useRef<THREE.LineSegments>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = -clock.elapsedTime * 0.06;
    ref.current.rotation.y = -clock.elapsedTime * 0.10;
  });

  const edges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.BoxGeometry(1.3, 1.3, 1.3)),
    []
  );

  return (
    <lineSegments ref={ref} geometry={edges}>
      <lineBasicMaterial color="#ffffff" opacity={0.3} transparent />
    </lineSegments>
  );
}

export default function FloatingShape() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 38 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <OuterCube />
      <InnerCube />
    </Canvas>
  );
}
