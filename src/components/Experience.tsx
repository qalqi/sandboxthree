/* eslint-disable react/no-unknown-property */
// @ts-nocheck
import {
  Environment,
  OrbitControls,
  useTexture,
} from "@react-three/drei/native";
import { useThree } from "@react-three/fiber";

import { Avatar } from "./Avatar";
import BG from "../models/avatar/textures/youtubeBackground.jpg";
import { ActivityIndicator, View } from "react-native";

export const Experience = () => {
  const texture = useTexture(BG);
  const viewport = useThree((state) => state.viewport);
  console.log({ viewport });
  return (
    <>
      {/* <OrbitControls /> */}
      {/*       <Avatar position={[0, -3, 5]} scale={2} />
       */}
      <Environment preset="sunset" />
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};
