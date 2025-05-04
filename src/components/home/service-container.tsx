"use client";
import { ServicesBlock } from "@/components/home/service-block/services-block";
import { useRef } from "react";

const ServiceContainer = () => {
  const containerRef = useRef(null);

  return (
    <div className={"h-[200vh] mt-20 w-full border-2"} ref={containerRef}>
      <ServicesBlock containerRef={containerRef} />
    </div>
  );
};

export { ServiceContainer };
