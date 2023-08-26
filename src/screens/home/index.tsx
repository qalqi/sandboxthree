import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import NikeShoeWalk from "../../models/shoe2";

const HomeScreen = ({ navigation }) => {
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "yellow",
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
        <Canvas>
          <ambientLight />
          <NikeShoeWalk />
        </Canvas>
      </Suspense>
    </View>
  );
};

export default HomeScreen;
