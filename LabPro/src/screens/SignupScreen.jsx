import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig.js";
import { Ionicons } from "@expo/vector-icons";
import { signUpStyles } from "../constants";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVissible, setIsVissible] = useState(true);

  useEffect(() => {
    setIsVissible(!(email && password && confirmPassword));
  }, [email, password, confirmPassword]);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert(
        "Password Mismatch",
        "Password do not match. Please try again."
      );
      return;
    }

    // if (email) {
    //   Alert.alert("Email Already exist", "Kindly login with email");
    // }

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.replace("EmailOTPScreen", { email });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Signup error:", errorCode, errorMessage);
      });
  };

  return (
    <SafeAreaView style={signUpStyles.viewContainer}>
      <View style={signUpStyles.container}>
        <View style={signUpStyles.topStack}>
          <TouchableOpacity
            style={signUpStyles.backIcon}
            onPress={() => navigation.replace("LoginScreen")}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text>SignupScreen Indicator</Text>
        </View>
        <View style={signUpStyles.formContainer}>
          <View style={signUpStyles.greeting}>
            <Text style={signUpStyles.header}>Create an account</Text>
            <Text style={signUpStyles.subtitle}>
              Sign up and get started now
            </Text>
          </View>
          <View style={signUpStyles.textInputDiv}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              keyboardType="email-address"
              inputMode="email"
              style={signUpStyles.textInput}
            />
            <TextInput
              label="Password"
              placeholder="Password"
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              style={signUpStyles.textInput}
            />
            <TextInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry
              placeholder="Confirm password"
              style={signUpStyles.textInput}
            />
          </View>
          <TouchableOpacity
            style={[
              signUpStyles.createAccount,
              isVissible && signUpStyles.disabledBtn,
            ]}
            onPress={handleSignUp}
            disabled={isVissible}
          >
            <Text style={signUpStyles.createAccountText}>
              Create an Account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={signUpStyles.externalLogins}>
          <View style={signUpStyles.alternative}>
            <View style={signUpStyles.horizontal} />
            <Text>Or</Text>
            <View style={signUpStyles.horizontal} />
          </View>
          <TouchableOpacity style={signUpStyles.externalLinks}>
            <Text>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={signUpStyles.externalLinks}>
            <Text>Continue with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={signUpStyles.externalLinks}>
            <Text>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>
            Already have an account?
            <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
              <Text>Log In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
