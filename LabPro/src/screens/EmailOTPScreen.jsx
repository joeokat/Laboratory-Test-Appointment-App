import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS } from "../constants";

const EmailOTPScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View>
        <Text>Verification Screen</Text>
        <Text
          style={{ color: COLORS.primary, fontSize: 18, fontWeight: "bold" }}
        >
          OTP Email Verification under construction
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EmailOTPScreen;
