import React from 'react';
import { Suspense } from 'react'
import './App.css';
import { Model } from './Scene';
import { XRButton, VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas , useLoader} from '@react-three/fiber'
import { Environment, OrbitControls, useFBX } from '@react-three/drei'
import { Physics } from '@react-three/cannon';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


function vrApp() {
  return (
    <>
      <VRButton />
      <Canvas shadows={{ type: "BasicShadowMap" }}>
          <XR>
         <OrbitControls />
          <Controllers />
          {/* <directionalLight args={["#FFF000", 0.6]} position={[-0.5, 1, 1]} castShadow /> */
          /* https://docs.pmnd.rs/react-three-fiber/tutorials/loading-models */}
          <Suspense fallback={null}>
            <Model />
            <Environment preset="sunset" background />
          </Suspense>
        </XR>
      </Canvas>
    </>
  )
}

const CuteCoffeeMug = () => {
  const gltf = useLoader(GLTFLoader, "./models/cute_mug/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
};

const FbxCoffeeMug = () => {
  const fbx = useFBX("./models/coffee_mug.fbx");
  return <primitive object={fbx} scale={0.75} />;
};


function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <CuteCoffeeMug />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default App;
