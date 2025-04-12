import React, { useEffect, useMemo, useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Material, Mesh } from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { useScroll, useTransform } from "framer-motion";

interface IProps {
  className?: string;
  targetRef: React.RefObject<HTMLDivElement>;
}

const modelPath = "luminescent_bloom.glb";
const BlobModel = ({ targetRef, ...props }: IProps) => {
  const blobRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const { scrollYProgress } = useScroll({ target: targetRef });
  const { nodes } = useLoader(
    GLTFLoader,
    `/models/${modelPath}`,
  ) as unknown as {
    nodes: { mesh_0: Mesh };
    materials: Record<string, Material>;
  };
  const prevScroll = useRef(0);
  const currentPosition = useRef({ x: 0, y: 0 });

  // const viewports = useTransform(viewport.width, [], []);

  console.log();

  const translateY = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [viewport.width / -4.5, 0, viewport.width / 4.5],
  );

  useFrame(() => {
    const targetX = translateX.get();
    const targetY = translateY.get();

    currentPosition.current.x = THREE.MathUtils.lerp(
      currentPosition.current.x,
      targetX,
      0.04,
    );
    currentPosition.current.y = THREE.MathUtils.lerp(
      currentPosition.current.y,
      targetY,
      0.04,
    );

    if (blobRef.current) {
      blobRef.current.position.x = currentPosition.current.x;
      blobRef.current.position.y = currentPosition.current.y;

      blobRef.current.rotation.x += 0.003;
      blobRef.current.rotation.y += 0.003;
    }
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      const delta = latestValue - prevScroll.current;

      if (delta > 0.001 && blobRef.current) {
        blobRef.current.rotation.x += 0.005;
        blobRef.current.rotation.y += 0.005;
      } else if (delta < -0.001 && blobRef.current) {
        blobRef.current.rotation.x -= 0.008;
      }

      prevScroll.current = latestValue;
    });
  }, [scrollYProgress]);

  const materialConfig = useMemo(
    () => ({
      thickness: 0.2,
      transmission: 1,
      ior: 1.2,
      chromaticAberration: 0.04,
      backside: true,
    }),
    [],
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        position={[-1.5, 2, 0]}
        scale={viewport.width / 5.5}
        ref={blobRef}
        geometry={nodes.mesh_0.geometry}
        rotation={[0.521, -0.335, -0.521]}
      >
        <MeshTransmissionMaterial
          {...materialConfig}
          transmissionSampler={false}
          samples={2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload(`/models/${modelPath}`);

export default BlobModel;

// const config = useControls("Config", {
//   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
//   roughness: { value: 0, min: 0, max: 1, step: 0.01 },
//   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
//   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
//   chromaticAberration: { value: 0.02, min: 0, max: 1 },
//   backside: { value: true },
// backsideThickness:{ value:
//   0.05, min: 0, max: 1
// }
// });
