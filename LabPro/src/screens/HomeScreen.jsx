import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View>
        <Text>Slow Down !!!</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color:COLORS.primary }}>
          Home Screen Under Construction
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
