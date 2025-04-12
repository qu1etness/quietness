"use client";

import React, { useRef } from "react";
import { useTransitionIn } from "@/units/transition-functions";

const Template = () => {
  const firstLoadTarget = useRef(null);

  useTransitionIn({ firstLoadTarget });

  return (
    <div className={"flex z-50"}>
      <span
        ref={firstLoadTarget}
        className={
          "z-60 text-main-text fixed left-2/4 top-2/4 -translate-x-1/2 opacity-0 -translate-y-1/2 font-italiana text-[64px] uppercase"
        }
      >
        quietness
      </span>
      {Array.from({ length: 8 }).map((_, index) => {
        const topPadding = index * 12.5;
        return (
          <div
            key={index}
            id={`banner-${index + 1}`}
            style={{ top: `${topPadding}vh` }}
            className={"min-w-screen z-50 h-1/8 bg-white fixed left-0"}
          ></div>
        );
      })}
    </div>
  );
};

export default Template;
