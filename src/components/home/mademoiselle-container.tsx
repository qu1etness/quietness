"use client";
import { Suspense, useRef } from "react";
import dynamic from "next/dynamic";

const DonutScene = dynamic(() => import("./blob-scene"), { ssr: false });

const MademoiselleContainer = () => {
  const targetRef = useRef(null);

  return (
    <div className={"h-[100dvh] w-full mt-[120dvw] md:mt-[30vw] relative"}>
      <div ref={targetRef} className={"h-[200vh] w-full absolute top-0 -z-1"}>
        <div className={"h-full w-full top-0 "}>
          <Suspense>{/*<DonutScene targetRef={targetRef} />*/}</Suspense>
        </div>
      </div>
    </div>
  );
};

export default MademoiselleContainer;
