import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { FC } from 'react';
import type { Vector3 } from 'three';
import { useRef } from 'react';

type AnimatedOrbitProps = {
    mouse: { x: number; y: number };
};

const AnimatedOrbit: FC<AnimatedOrbitProps> = ({ mouse }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (!meshRef.current) return;

        const targetRotationX = mouse.y * 0.4;
        const targetRotationY = mouse.x * 0.6 + t * 0.2;

        meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.08;
        meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.08;

        const baseScale = 1;
        const pulse = 0.04 * Math.sin(t * 1.4);
        meshRef.current.scale.setScalar(baseScale + pulse);
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[1, 0.3, 220, 32]} />
                <meshStandardMaterial
                    color='#38bdf8'
                    emissive='#0ea5e9'
                    emissiveIntensity={0.7}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>
        </group>
    );
};

type DashboardScene3DProps = {
    mouse: { x: number; y: number };
};

export const DashboardScene3D: FC<DashboardScene3DProps> = ({ mouse }) => {
    return (
        <Canvas
            camera={{ position: [0, 0, 4.2] as Vector3, fov: 40 }}
            style={{ width: '100%', height: '100%' }}
        >
            <color attach='background' args={['transparent']} />
            <ambientLight intensity={0.7} />
            <directionalLight position={[3, 4, 3]} intensity={1.2} />
            <directionalLight position={[-4, -2, -2]} intensity={0.6} color='#38bdf8' />

            <AnimatedOrbit mouse={mouse} />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableDamping
                dampingFactor={0.1}
                rotateSpeed={0.45}
            />
        </Canvas>
    );
}

