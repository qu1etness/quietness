"use client";
import { ServicesBlock } from "@/components/home/service-block/services-block";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const ServiceContainer = () => {
  const containerRef = useRef(null);

  return (
    <div className={"mt-20 w-full mb-30 flex"} ref={containerRef}>
      <ServicesBlock containerRef={containerRef} />
      <div
        className={
          "flex-1 w-full max-h-min flex items-center gap-3 lg:ml-10 md:ml-6 ml-2 mt-40"
        }
      >
        <div className={"bg-white h-2 w-4 sm:w-11"}></div>
        <span
          className={cn(
            "text-[60px] font-medium lowercase font-antonio ",
            "sm:text-[90px] sm:mr-4",
            "md:text-[110px]",
            "lg:text-[150px]",
            "xl:text-[170px]",
          )}
        >
          serv
          <br />
          ices
        </span>
        <div className={"flex-1 sm:w-full bg-white h-2"}></div>
      </div>
    </div>
  );
};

export { ServiceContainer };
