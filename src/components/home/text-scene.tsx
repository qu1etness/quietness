import { Canvas } from "@react-three/fiber";
import TextModel from "@/components/home/text-model";
import { Suspense } from "react";

const TextScene = () => {
  return (
    <Canvas>
      <Suspense>
        <TextModel />
      </Suspense>
    </Canvas>
  );
};

export default TextScene;
