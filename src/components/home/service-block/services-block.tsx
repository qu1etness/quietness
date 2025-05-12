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
  const { scrollYProgress: blocksScroll } = useScroll({
    target: containerRef,
    layoutEffect: false,
    offset: ["start end", "center 20%"],
  });

  const firstBlockYPosition = useTransform(
    blocksScroll,
    [0, 0.39, 1],
    ["-250vh", "-100%", "0%"],
  );

  const firstBlockXPosition = useTransform(
    blocksScroll,
    [0, 0.3],
    ["40vw", "0vw"],
  );

  const secondBlockYPosition = useTransform(
    blocksScroll,
    [0, 0.39, 1],
    ["-420%", "-190%", "0%"],
  );

  const secondBlockXPosition = useTransform(
    blocksScroll,
    [0, 0.2],
    ["-15%", "0%"],
  );

  const thirdBlockYPosition = useTransform(
    blocksScroll,
    [0, 0.39, 1],
    ["-620%", "-270%", "0%"],
  );

  const thirdBlockXPosition = useTransform(
    blocksScroll,
    [0, 0.25],
    ["45vw", "0vw"],
  );

  const blocksHeight = useTransform(blocksScroll, [0, 1], ["10%", "33%"]);

  const circleShadowPosition = useTransform(
    blocksScroll,
    [0.39, 0.5, 1],
    ["0%", "5%", "260%"],
  );
  const circleShadowRotation = useTransform(
    blocksScroll,
    [0.39, 0.5, 1],
    ["0deg", "5deg", "270deg"],
  );

  const opacityY = useTransform(blocksScroll, [0.39, 1], ["0", "100"]);
  const containerOpacity = useMotionTemplate`linear-gradient(to bottom, black ${opacityY}%, transparent 0%)`;

  return (
    <div
      className={cn(
        "relative w-[140px] ml-[12.5%] aspect-[1/3.6]",
        "sm:w-[190px]",
        "md:w-[220px]",
        "lg:w-[280px]",
        "xl:w-[350px]",
        "2xl:w-[410px]",
      )}
    >
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
          className={cn("w-full relative h-full flex rounded-b-full", css.back)}
        >
          <div
            className={cn(
              "w-full xl:m-[34px] lg:m-6 md:m-5 m-2 rounded-b-full",
              css.front,
            )}
          />
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
