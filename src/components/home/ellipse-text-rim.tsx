"use client";
import { MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

interface IProps {
  scrollProgress: MotionValue<number>;
}

const EllipseTextRim = ({ scrollProgress }: IProps) => {
  const text = useRef(null);

  useEffect(() => {
    scrollProgress.on("change", (e) => {
      text?.current.setAttribute("startOffset", e * 50 + "%");
    });
  }, [scrollProgress]);

  return (
    <svg
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      width="125%"
      // height="1648"
      viewBox="0 0 841 2208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="curve"
        d="M 3 420.75
     A 417.75 395.75 0 0 1 420.75 3
     A 417.75 395.75 0 0 1 837 420.75
     V 1806.25
     A 417.75 395.75 0 0 1 420.75 2205
     A 417.75 395.75 0 0 1 3 1806.25
     V 420.75
     Z"
      />
      <text
        className="stroke-[#F7EDF6]/50 tracking-[27px] font-antonio text-[76px]"
        dominantBaseline="hanging"
      >
        <textPath ref={text} href="#curve">
          A WONDERFUL SERENITY HAS
        </textPath>
      </text>
    </svg>
  );
};

export { EllipseTextRim };
