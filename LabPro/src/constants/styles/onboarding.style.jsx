import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../theme";
const { width, height } = Dimensions.get("window");

const OnboardingStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    paddingHorizontal: 30,
    paddingTop: 30,
    alignItems: "center",
  },
  skipDiv: {
    alignSelf: "flex-end",
  },
  imageContainer: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.47,
    padding: 20,
  },
  imageDiv: {
    flex: 0.85,
    resizeMode: "contain",
  },
  indicators: {
    height: height * 0.04,
  },
  indicatorsContainer: {
    flexDirection: "row",
  },
  indicator: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.grey,
    marginHorizontal: 3,
    borderRadius: 8,
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    // marginTop: 0,
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.grey,
    fontSize: SIZES.small,
    marginTop: 10,
    maxWidth: 340,
    textAlign: "center",
  },
  titleAndroid: {
    color: COLORS.black,
    fontSize: SIZES.large,
    fontWeight: "bold",
    // marginTop: 0,
    textAlign: "center",
  },
  subtitleAndroid: {
    color: COLORS.grey,
    fontSize: SIZES.medium,
    marginTop: 10,
    maxWidth: 340,
    textAlign: "center",
  },
  btn: {
    width: 358,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: COLORS.primary,
    marginBottom: 20,
    borderRadius: 16,
  },
  btnSignup: {
    width: 358,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: COLORS.primary,

    borderRadius: 16,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1.25,
  },
  btnText2: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1.25,
  },
});

export default OnboardingStyle;
