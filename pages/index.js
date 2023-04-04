import { motion } from "framer-motion";
import classes from "../components/gg.module.css";

import { useState } from "react";
import ModelViewer from "@/components/ModelViewer";

const index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={classes.container}>
      <ModelViewer scale={35} modelPath={"/donutweb.glb"} />
    </div>
  );
};
export default index;
