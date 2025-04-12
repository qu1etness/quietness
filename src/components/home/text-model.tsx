import { Text } from "@react-three/drei";
import React from "react";
import { useThree } from "@react-three/fiber";

const TextModel = () => {
  const { viewport } = useThree();

  return (
    <group>
      <Text
        fontStyle={"normal"}
        fontSize={viewport.width / 2.5}
        font="fonts/Anton-Regular.ttf"
        fontWeight={"bold"}
        position={[0, 6, -10]}
        anchorX="center"
        anchorY="middle"
      >
        MADEMOISELLE
      </Text>
    </group>
  );
};

export default TextModel;
