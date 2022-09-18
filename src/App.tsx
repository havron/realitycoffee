import React from 'react';
import { Suspense } from 'react'
import './App.css';
import { Model } from './Scene';
import { Mesh } from 'three'
import { XRButton, VRButton, XR, Controllers, Hands, } from '@react-three/xr'
import { Canvas , useLoader} from '@react-three/fiber'
import { Environment, OrbitControls, FlyControls, useFBX } from '@react-three/drei'
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
          <Hands />
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
    <>
    <div><h1>☕️ Reality Coffee</h1><p>Mug by <a href="https://sketchfab.com/3d-models/cute-mug-free-3d-model-c329807e8b354e3883d8e6a1596563ae">PolyCube</a></p></div>
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    }}>
      <VRButton />
      <Canvas>
        <XR>
        <Suspense fallback={null}>
          <CuteCoffeeMug />
          <OrbitControls />
          <Environment preset="city" background />
        </Suspense>
        </XR>
      </Canvas>
    </div>
    </>
  );
}
export default App;
