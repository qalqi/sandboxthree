import { Canvas } from "@react-three/fiber/native";
import React, { Suspense, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import NikeShoeWalk from "../../models/shoe2";
import { Experience } from "../../components/Experience";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "green",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <Suspense
        fallback={
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="#000" />
          </View>
        }
      >
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      </Suspense>
    </View>
  );
};

export default HomeScreen;
