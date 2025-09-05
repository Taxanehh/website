import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const Earth3D = () => {
  const meshRef = useRef()
  const innerRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      // Slow rotation on Y-axis
      meshRef.current.rotation.y += 0.003
      
      // Subtle floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
    
    if (innerRef.current) {
      // Counter-rotation for inner sphere
      innerRef.current.rotation.y -= 0.002
      innerRef.current.rotation.x += 0.001
    }
  })

  return (
    <group>
      {/* Main Earth sphere with enhanced materials */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <Sphere args={[1.8, 64, 64]}>
          <MeshDistortMaterial
            color="#0d4f3c"
            attach="material"
            distort={0.05}
            speed={0.5}
            roughness={0.3}
            metalness={0.2}
            transparent
            opacity={0.6}
          />
        </Sphere>
      </mesh>
      
      {/* Atmospheric glow - green tinted */}
      <mesh position={[0, 0, 0]}>
        <Sphere args={[2.2, 32, 32]}>
          <meshBasicMaterial
            color="#00ff41"
            transparent
            opacity={0.08}
            side={THREE.BackSide}
          />
        </Sphere>
      </mesh>
      
      {/* Inner core with data streams effect */}
      <mesh ref={innerRef} position={[0, 0, 0]}>
        <Sphere args={[1.4, 32, 32]}>
          <MeshDistortMaterial
            color="#134e13"
            transparent
            opacity={0.4}
            distort={0.03}
            speed={1.5}
          />
        </Sphere>
      </mesh>

      {/* Data grid overlay */}
      <mesh position={[0, 0, 0]}>
        <Sphere args={[1.9, 16, 16]}>
          <meshBasicMaterial
            color="#00ff41"
            transparent
            opacity={0.1}
            wireframe
          />
        </Sphere>
      </mesh>
    </group>
  )
}

export default Earth3D
