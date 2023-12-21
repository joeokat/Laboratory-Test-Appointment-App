import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../theme";

const { width, height } = Dimensions.get("window");

const loginStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    gap: 30,
  },
  backIcon: {
    width: 34,
    height: 34,
    backgroundColor: "#39B44A40",
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    gap: 20,
  },
  greeting: {
    gap: 8,
  },
  header: {
    width: width * 0.68,
    height: 32,
    fontSize: 26,
  },
  subtitle: {
    width: width * 0.6,
    height: 23,
    fontSize: 14,
    letterSpacing: 0.4,
    color: COLORS.grey,
  },
  textInputDiv: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  textInput: {
    width: width * 0.93,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.grey,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1.25,
  },
  loginBtn: {
    width: width * 0.93,
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
  createAccDiv: {
    gap: 25,
    backdgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPassword: {
    fontSize: 16,
    letterSpacing: 1.25,
  },
  createAccBtn: {
    width: width * 0.93,
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: COLORS.primary,
  },
  accountText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: SIZES.medium,
    letterSpacing: 1.25,
    color: COLORS.primary,
  },
  alternative: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  horizontal: {
    width: width * 0.415,
    height: 2,
    backgroundColor: COLORS.grey,
  },
});

export default loginStyles;
