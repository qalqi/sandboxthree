import { Canvas } from "@react-three/fiber/native";
import React, { Suspense, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import NikeShoeWalk from "../../models/shoe2";

const ShoeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
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

export default ShoeScreen;
