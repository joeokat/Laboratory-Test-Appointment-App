import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../theme";

const { width, height } = Dimensions.get("window");

const accountAccessStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 30,
    gap: 20,
  },
  imgContainer: {
    flex: 0.55,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.47,
  },
  image: {
    flex: 0.85,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  textHeader: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.black,
  },
  textMain: {
    fontSize: SIZES.small,
    color: COLORS.grey,
    textAlign: "center",
    maxWidth: 340,
  },
  buttonsContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  loginBtn: {
    width: 358,
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 16,
  },
  loginText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: SIZES.medium,
    letterSpacing: 1.25,
    color: "#fff",
  },
  signUpBtn: {
    width: 358,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.primary,
    padding: 16,
    borderRadius: 16,
  },
  signUpText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1.25,
  }
});

export default accountAccessStyle;
