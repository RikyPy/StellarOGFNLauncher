import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Home/Banner";

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.3,
      }}
      className="w-[calc(100vw-64px)] ml-16 h-screen flex flex-col px-7 pt-7 justify-start items-start"
    >
      <div className="w-full flex gap-5 py-5 h-full">
        <Banner />
      </div>
    </motion.div>
  );
};

export default Home;
