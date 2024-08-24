import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef, useState } from 'react'

type GenericType = {
  position: number[] ,
  size: number[], 
}

type MeshRef = {
  rotation: { x: number; y: number };
  position: { z: number };
};

const Cube =({position, size,}:GenericType) => {
  const ref = useRef<MeshRef>()

  const [isClicked, setIsClicked] = useState(false)

  useFrame((state, delta) => { 
    if(ref.current) {
      const speed = isClicked ? 1 : 0.2
      ref.current.rotation.y += delta * speed
    }
  })
  return(
    <mesh position ={position} ref={ref} onClick={() => setIsClicked(!isClicked)}>
          <boxGeometry args={size} />
          <meshStandardMaterial color={isClicked ? "hotpink" : "lightgreen" } />
        </mesh>
  )
}


const App= () => {



  return (
    <>
      <Canvas >
        <directionalLight position={ [0, 0, 5]}/>
        <ambientLight />

        <Cube position={[0, 0, 0]}  size={[1,1,1]} /> 
      </Canvas>
    </>
  )
}

export default App
