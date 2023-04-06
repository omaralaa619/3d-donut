import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

import classes from "./gg.module.css";

const ModelViewer = ({ modelPath, scale = 0, position = [0, 0, 0] }) => {
  return (
    <div className={classes.mini}>
      <Canvas>
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <GltfModel modelPath={modelPath} scale={scale} position={position} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
