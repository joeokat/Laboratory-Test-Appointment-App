import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../theme";
const { width, height } = Dimensions.get("window");

const signUpStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    gap: 30,
  },
  topStack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
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
    width: width * 0.7,
    height: 32,
    fontSize: 26,
  },
  subtitle: {
    width: width * 0.7,
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
    width: width * 0.94,
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
  createAccount: {
    width: width * 0.94,
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 16,
  },
  createAccountText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: SIZES.medium,
    letterSpacing: 1.25,
    color: "#fff",
  },
  disabledBtn: {
    backgroundColor: COLORS.grey,
  },
  externalLogins: {
    gap: 15,
  },
  alternative: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  horizontal: {
    width: width * 0.42,
    height: 2,
    backgroundColor: COLORS.grey,
  },
  externalLinks: {
    width: width * 0.94,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.grey,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1.25,
  },
});

export default signUpStyles;
