"use client";
import css from "./service-block.module.css";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject } from "react";
import { cn } from "@/lib/utils";

interface IProps {
  containerRef: RefObject<HTMLDivElement>;
}

const ServicesBlock = ({ containerRef }: IProps) => {
  console.log(containerRef.current);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    layoutEffect: false,
    offset: ["start center", "end 145%"],
  });

  const { scrollYProgress: blocksScroll } = useScroll({
    target: containerRef,
    layoutEffect: false,
    offset: ["start end", "center center"],
  });

  const firstBlockYPosition = useTransform(
    blocksScroll,
    [0, 0.34, 1],
    ["-250%", "-100%", "0%"],
  );

  const firstBlockXPosition = useTransform(
    blocksScroll,
    [0, 0.3],
    ["40vw", "0vw"],
  );

  const secondBlockYPosition = useTransform(
    blocksScroll,
    [0, 0.34, 1],
    ["-420%", "-190%", "0%"],
  );

  const secondBlockXPosition = useTransform(
    blocksScroll,
    [0, 0.2],
    ["-15%", "0%"],
  );

  const thirdBlockYPosition = useTransform(
    blocksScroll,
    [0, 0.34, 1],
    ["-620%", "-270%", "0%"],
  );

  const thirdBlockXPosition = useTransform(
    blocksScroll,
    [0, 0.3],
    ["50vw", "0vw"],
  );

  const blocksHeight = useTransform(blocksScroll, [0, 1], ["10%", "33%"]);

  const circleShadowPosition = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["0%", "5%", "260%"],
  );
  const circleShadowRotation = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["0deg", "5deg", "270deg"],
  );

  const opacityY = useTransform(scrollYProgress, [0, 1], ["0", "100"]);
  const containerOpacity = useMotionTemplate`linear-gradient(to bottom, black ${opacityY}%, transparent 0%)`;

  return (
    <div className={"relative w-[410px] ml-[190px] aspect-[1/3.6]"}>
      <motion.div
        className={
          "absolute aspect-square rounded-full blur-3xl bg-linear-to-r/decreasing -z-1 w-[115%] from-[#FEE140]/20 to-[#F5576C]/10 top-20 left-1/2 -translate-x-1/2 -translate-y-1/2"
        }
        style={{ y: circleShadowPosition, rotate: circleShadowRotation }}
      />
      <motion.div
        className={"w-full h-full"}
        style={{
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskImage: containerOpacity,
          WebkitMaskImage: containerOpacity,
        }}
      >
        <div
          className={cn(
            "w-full relative  h-full flex rounded-b-full",
            css.back,
          )}
        >
          <div className={cn("w-full m-[34px] rounded-b-full", css.front)} />
        </div>
      </motion.div>
      <div className={"w-full top-0 -z-1 absolute h-full"}>
        <motion.div
          className={"w-full h-1/3 absolute top-0 bg-black"}
          style={{
            y: firstBlockYPosition,
            x: firstBlockXPosition,
            height: blocksHeight,
          }}
        />
        <motion.div
          style={{
            y: secondBlockYPosition,
            height: blocksHeight,
            x: secondBlockXPosition,
          }}
          className={"w-full h-1/3 absolute top-0 bg-black"}
        />
        <motion.div
          style={{
            y: thirdBlockYPosition,
            height: blocksHeight,
            x: thirdBlockXPosition,
          }}
          className={"w-full h-1/3 absolute top-0 bg-black"}
        />
      </div>
    </div>
  );
};

export { ServicesBlock };
