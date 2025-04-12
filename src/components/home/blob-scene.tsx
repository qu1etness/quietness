"use client";
import { Canvas } from "@react-three/fiber";
import BlobModel from "@/components/home/blob-model";
import { Environment } from "@react-three/drei";
import React, { Suspense } from "react";
import TextModel from "@/components/home/text-model";

interface IProps {
  className?: string;
  targetRef: React.RefObject<HTMLDivElement>;
}

const BlobScene = ({ className, targetRef }: IProps) => {
  return (
    <Canvas
      className={className}
      frameloop={"always"}
      performance={{
        min: 0.2,
        max: 1,
        current: 1,
        debounce: 200,
      }}
      dpr={[0.1, 1.5]}
      shadows
      gl={{ antialias: false }}
    >
      <Environment preset={"city"} />
      <Suspense>
        <TextModel />
        <BlobModel targetRef={targetRef} />
      </Suspense>
    </Canvas>
  );
};

export default BlobScene;
