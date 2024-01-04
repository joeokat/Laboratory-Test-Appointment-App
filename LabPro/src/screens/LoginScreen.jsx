import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { loginStyles } from "../constants";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.replace("HomeScreen");
      })
      .catch((error) => {
        if (email === "") {
          Alert.alert("Login Error", "Enter your email");
        } else if (password === "") {
          Alert.alert("Login Error", "Enter password");
        } else if (!auth?.email) {
          Alert.alert("Login Error", "Email does not exist");
        } else if (!auth?.password) {
          Alert.alert("Login Error", "Wrong password");
        } else {
          const errorMessage = error.errorMessage;
          console.log(errorMessage);
        }
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={loginStyles.viewContainer}>
      <SafeAreaView>
        <View style={loginStyles.container}>
          <TouchableOpacity
            style={loginStyles.backIcon}
            onPress={() => navigation.replace("AccountAccess")}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              style={loginStyles.icon}
            />
          </TouchableOpacity>
          <View style={loginStyles.formContainer}>
            <View style={loginStyles.greeting}>
              <Text style={loginStyles.header}>Welcome back,</Text>
              <Text style={loginStyles.subtitle}>Sign in to your account</Text>
            </View>
            <View style={loginStyles.textInputDiv}>
              <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={loginStyles.textInput}
                placeholder="Email"
                keyboardType="email-address"
                inputMode="email"
              />
              <TextInput
                label="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={loginStyles.textInput}
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={loginStyles.loginBtn}
              onPress={handleSignIn}
            >
              <Text style={loginStyles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles.createAccDiv}>
            <TouchableOpacity>
              <Text style={loginStyles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={loginStyles.alternative}>
              <View style={loginStyles.horizontal} />
              <Text>Or</Text>
              <View style={loginStyles.horizontal} />
            </View>
            <TouchableOpacity
              style={loginStyles.createAccBtn}
              onPress={() => navigation.replace("SignupScreen")}
            >
              <Text style={loginStyles.accountText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
