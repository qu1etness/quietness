"use client";
import { Suspense, useRef } from "react";
import dynamic from "next/dynamic";

const DonutScene = dynamic(() => import("./blob-scene"), { ssr: false });

const MademoiselleContainer = () => {
  const targetRef = useRef(null);

  return (
    <div className={"h-screen w-full mt-[120vw] md:mt-[20vw] relative"}>
      <div ref={targetRef} className={"h-[200vh] w-full absolute top-0"}>
        <div className={"h-full w-full top-0 "}>
          <Suspense>
            <DonutScene targetRef={targetRef} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MademoiselleContainer;
