"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react"

// Minimal car model component
function CarModel() {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const modelRef = useRef()

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return <primitive ref={modelRef} object={scene} position={[0, 0, 0]} scale={2.5} />
}

// Fallback component for when 3D isn't working
function FallbackDisplay() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Experience the Future of Luxury</h2>
        <p className="mb-6">The new Mercedes-Benz combines cutting-edge technology with timeless elegance.</p>
        <div className="flex justify-center gap-4">
          <Button className="bg-black text-white hover:bg-gray-800">View Gallery</Button>
          <Button variant="outline" className="border-black text-black hover:bg-gray-100">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function CarShowcase() {
  return (
    <div className="h-full w-full">
      <Suspense fallback={<FallbackDisplay />}>
        <div className="relative h-full">
          <Canvas>
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <CarModel />
          </Canvas>

          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button variant="secondary" size="icon">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Suspense>
    </div>
  )
}
