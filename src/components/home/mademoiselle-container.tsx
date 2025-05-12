"use client";
import { Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const DonutScene = dynamic(() => import("./blob-scene"), { ssr: false });

const MademoiselleContainer = () => {
  const targetRef = useRef(null);

  return (
    <div
      className={cn(
        "h-[685px] w-full mt-[120dvw] md:mt-[30vw] relative",
        "sm:h-[755px]",
        "md:h-[585px]",
        "lg:h-[800px]",
        "xl:h-[890px]",
        "2xl:h-[1000px]",
      )}
    >
      <div
        ref={targetRef}
        className={cn(
          "h-[1150px] mt-[280px] w-full absolute top-0 -z-1",
          "sm:h-[1500px] sm:mt-[200px]",
          "md:mt-0 md:h-[1454px] ",
          "lg:h-[2000px]",
        )}
      >
        <div className={"h-full w-full top-0"}>
          <Suspense>
            <DonutScene targetRef={targetRef} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MademoiselleContainer;
