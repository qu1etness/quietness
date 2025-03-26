"use client";

import React from "react";
import { useTransitionIn } from "@/units/transition-functions";

const Template = ({ children }: { children: React.ReactNode }) => {
  useTransitionIn();

  return (
    <div className={"flex z-50"}>
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
      {children}
    </div>
  );
};

export default Template;
