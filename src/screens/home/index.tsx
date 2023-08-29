import { Canvas } from "@react-three/fiber/native";
import React, { Suspense, useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View, Text } from "react-native";

//import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  //const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingHorizontal: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Shoe")}>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          Nike Shoe
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Avatar")}>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          Ready me Avatar Glb
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AvatarObj")}>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          Ready me Avatar Obj
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
