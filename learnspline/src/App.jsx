import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion"
import Lottie from "lottie-react";
import infinityLoading from "./assets/rgbCircleLoading.json"

export default function App() {
 
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 5000);


    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {loaded===false ? 
      <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{duration: 5, delay: 2}}
      className="absolute top-0 bg-transparent backdrop-blur-md h-[100vh] w-[98vw] flex justify-center items-center">
        <Lottie className="h-[50vh]" animationData={infinityLoading} loop={true} />;
        </motion.div>: <div></div>}
      <div>
        <Spline scene="https://prod.spline.design/oSgXtN1Tp7JKSMSE/scene.splinecode" />

        <div style={{ visibility: loaded ? "visible" : "hidden" }}>
          <Spline scene="https://prod.spline.design/WSSp1QMwth8v54nX/scene.splinecode" />

          <Spline scene="https://prod.spline.design/wQSefpZ8cKUTamvS/scene.splinecode" />

          <Spline scene="https://prod.spline.design/BQqcEv7Mda6DC-zM/scene.splinecode" />

          <Spline scene="https://prod.spline.design/Hb6B9PfNAomrRDDh/scene.splinecode" />

          <div className="h-[50vh] flex justify-center items-center text-xl">
            filler
          </div>
        </div>
      </div>
    </div>
  );
}
