import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { images } from "../constants";
import { accountAccessStyle } from "../constants";

const AccountAccess = ({ navigation }) => {
  return (
    <SafeAreaView style={accountAccessStyle.container}>
      <View style={accountAccessStyle.imgContainer}>
        <Image
          source={images.welcomeGreetingFour}
          style={accountAccessStyle.image}
        />
      </View>
      <View style={accountAccessStyle.textContainer}>
        <Text style={accountAccessStyle.textHeader}>
          Your health, your schedule
        </Text>
        <Text style={accountAccessStyle.textMain}>
          LabPro puts you in control. Select the lab tests you need, pick a time
          that suits you, and get back to what matters most. Health, made
          simple.
        </Text>
      </View>
      <View style={accountAccessStyle.buttonsContainer}>
        <TouchableOpacity
          style={accountAccessStyle.loginBtn}
          onPress={() => navigation.replace("LoginScreen")}
        >
          <Text style={accountAccessStyle.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={accountAccessStyle.signUpBtn}
          onPress={() => navigation.replace("SignupScreen")}
        >
          <Text style={accountAccessStyle.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountAccess;
