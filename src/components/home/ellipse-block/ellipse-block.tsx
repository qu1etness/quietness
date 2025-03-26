"use client";
import { cn } from "@/lib/utils";
import css from "./ellipse-block.module.css";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EllipseTextRim } from "@/components/home/ellipse-text-rim";

const EllipseBlock = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 15%", "end 70%"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0", "200%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0", "-180deg"]);

  return (
    <div
      ref={targetRef}
      className={cn(
        css.background,
        "aspect-1/3 absolute top-[550px] md:top-[200px] right-auto md:right-1/8 xl:right-1/6 md:translate-0 md:left-auto rounded-full left-1/2 translate-x-[-50%] bg-[#161211]",
      )}
    >
      <div className={"w-full h-full relative"}>
        <motion.div
          style={{
            y: translateY,
            rotate,
          }}
        >
          <Image
            priority
            className={
              "drop-shadow-2xl aspect-square w-full md:w-64 lg:w-[340px] xl:w-96 2xl:w-full"
            }
            src={"/svgs/semicircle.svg"}
            alt={"semicircle"}
            width={10}
            height={10}
          />
        </motion.div>
        <EllipseTextRim scrollProgress={scrollYProgress} />
      </div>
    </div>
  );
};

export { EllipseBlock };
