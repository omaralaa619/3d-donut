import { motion } from "framer-motion";
import classes from "../components/gg.module.css";

import { useState } from "react";
import ModelViewer from "@/components/ModelViewer";

const index = () => {
  return (
    <div className={classes.container}>
      <ModelViewer scale={20} modelPath={"/donut1.glb"} />
    </div>
  );
};
export default index;
