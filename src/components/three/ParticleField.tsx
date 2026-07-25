import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const count = 900
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = t * 0.02
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.08
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#8b5cf6" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  )
}

export function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      className="!absolute inset-0"
    >
      <Particles />
    </Canvas>
  )
}
