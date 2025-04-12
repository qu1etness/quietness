import { background, menuSide, mountAnim } from "@/animation/anim";
import { NavigationBar } from "@/components/header/navigation-bar";
import { motion } from "motion/react";
import { Curve } from "@/components/header/curve";

const NavigationContainer = () => {
  return (
    <motion.div
      variants={menuSide}
      {...mountAnim}
      className={
        "fixed z-40 w-full h-screen bg-black justify-center items-center flex"
      }
    >
      <NavigationBar />
      <Curve />
      <motion.div
        className={"bg-black w-full h-full absolute top-full z-0"}
        variants={background}
        {...mountAnim}
      />
    </motion.div>
  );
};

export { NavigationContainer };
