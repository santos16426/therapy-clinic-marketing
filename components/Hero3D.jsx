"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, ContactShadows } from "@react-three/drei";

const Clay = ({ c }) => <meshStandardMaterial color={c} roughness={0.95} />;

function Rig({ children }) {
  const g = useRef();
  useFrame(({ pointer }) => {
    g.current.rotation.y += (pointer.x * 0.35 - g.current.rotation.y) * 0.05;
    g.current.rotation.x += (-pointer.y * 0.2 - g.current.rotation.x) * 0.05;
  });
  return <group ref={g}>{children}</group>;
}
function Sun() {
  const rays = useRef();
  useFrame((_, d) => { rays.current.rotation.z += d * 0.22; });
  return (
    <Float speed={1.4} floatIntensity={1} rotationIntensity={0.15}>
      <group position={[1.6, 0.2, 0]}>
        <mesh><sphereGeometry args={[1.3, 48, 48]} /><Clay c="#F4B63E" /></mesh>
        <mesh position={[-0.42, 0.28, 1.2]} scale={[1, 1.3, 0.5]}><sphereGeometry args={[0.1, 16, 16]} /><meshStandardMaterial color="#2B2118" /></mesh>
        <mesh position={[0.42, 0.28, 1.2]} scale={[1, 1.3, 0.5]}><sphereGeometry args={[0.1, 16, 16]} /><meshStandardMaterial color="#2B2118" /></mesh>
        <mesh position={[0, -0.12, 1.22]} rotation={[0, 0, Math.PI]}><torusGeometry args={[0.42, 0.05, 12, 32, Math.PI]} /><meshStandardMaterial color="#2B2118" /></mesh>
        <mesh position={[-0.75, -0.1, 1.05]}><sphereGeometry args={[0.16, 16, 16]} /><meshStandardMaterial color="#E0654A" transparent opacity={0.6} /></mesh>
        <mesh position={[0.75, -0.1, 1.05]}><sphereGeometry args={[0.16, 16, 16]} /><meshStandardMaterial color="#E0654A" transparent opacity={0.6} /></mesh>
        <group ref={rays}>
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <mesh key={i} position={[Math.cos(a) * 2.1, Math.sin(a) * 2.1, 0]} rotation={[0, 0, a - Math.PI / 2]}>
                <capsuleGeometry args={[0.13, i % 2 ? 0.35 : 0.6, 6, 12]} /><Clay c="#F4B63E" />
              </mesh>
            );
          })}
        </group>
      </group>
    </Float>
  );
}
const Toy = ({ p, c, r = [0, 0, 0], children }) => (
  <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.6}>
    <mesh position={p} rotation={r}>{children}<Clay c={c} /></mesh>
  </Float>
);
export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 42 }} dpr={[1, 1.8]}>
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} />
      <Rig>
        <Sun />
        <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.6}>
          <RoundedBox args={[1, 1, 1]} radius={0.16} position={[-1.2, 2.2, 1]} rotation={[0.4, 0.5, 0.2]}><Clay c="#E0654A" /></RoundedBox>
        </Float>
        <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.6}>
          <RoundedBox args={[0.9, 0.9, 0.9]} radius={0.14} position={[4.4, -2.1, 0.5]} rotation={[0.2, 0.9, 0.4]}><Clay c="#6FA3C7" /></RoundedBox>
        </Float>
        <Toy p={[0, -2.1, 1.5]} c="#8DB580" r={[1, 0.3, 0]}><torusGeometry args={[0.6, 0.25, 20, 48]} /></Toy>
        <Toy p={[-3, -0.2, -0.5]} c="#B796C0"><sphereGeometry args={[0.55, 32, 32]} /></Toy>
        <Toy p={[4.6, 2.4, -1]} c="#F6C3B5" r={[0.3, 0.2, 0.5]}><coneGeometry args={[0.55, 1.1, 24]} /></Toy>
      </Rig>
      <ContactShadows position={[0, -3.4, 0]} opacity={0.25} scale={16} blur={2.6} far={5} />
    </Canvas>
  );
}
