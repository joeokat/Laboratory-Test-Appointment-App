import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import images from "../constants/images";
import { COLORS, onboardingStyle } from "../constants";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: images.welcomeGreetingOne,
    title: "Empower your well-being",
    subtitle:
      "With LabPro, you're in command of your health. Discover and book lab tests tailored to your needs, then choose from a network of accredited labs. We put your well-being in your hands",
  },
  {
    id: 2,
    image: images.welcomeGreetingTwo,
    title: "Effortless health monitoring ",
    subtitle:
      "LabPro streamlines the process of health monitoring. Select the tests you require, schedule appointments. Prioritize your health, the professional way.",
  },
  {
    id: 3,
    image: images.welcomeGreetingThree,
    title: "Elevate your health experience",
    subtitle: `LabPro redefines how you manage your health. Experience a new era of healthcare as we connect you to accredited labs, simplify test bookings, and provide insights to empower your well-being. Welcome to a healthier you with LabPro!
    `,
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const ref = useRef(null);

  const Slide = ({ item }) => {
    const Footer = () => {
      return (
        <View style={onboardingStyle.indicators}>
          <View style={onboardingStyle.indicatorsContainer}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  onboardingStyle.indicator,
                  currentSlideIndex == index && {
                    backgroundColor: COLORS.primary,
                    width: 30,
                    height: 8,
                    borderRadius: 8,
                  },
                ]}
              ></View>
            ))}
          </View>
        </View>
      );
    };

    return (
      <View style={onboardingStyle.container}>
        <View style={onboardingStyle.skipDiv}>
          {currentSlideIndex == slides.length - 1 ? null : (
            <TouchableOpacity
              onPress={() => navigation.replace("AccountAccess")}
            >
              <Text>Skip</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={onboardingStyle.imageContainer}>
          <Image source={item.image} style={onboardingStyle.imageDiv} />
        </View>
        <Footer />

        <View
          style={{
            marginBottom: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Platform.OS === "android" && (
            <View
              style={{
                marginBottom: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={onboardingStyle.titleAndroid}>{item.title}</Text>
              <Text style={onboardingStyle.subtitleAndroid}>
                {item.subtitle}
              </Text>
            </View>
          )}
          {Platform.OS === "ios" && (
            <View>
              <Text style={onboardingStyle.title}>{item.title}</Text>
              <Text style={onboardingStyle.subtitle}>{item.subtitle}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = (e) => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
    >
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <View>
        {currentSlideIndex == slides.length - 1 ? (
          <View>
            <TouchableOpacity
              style={[onboardingStyle.btn]}
              onPress={() => navigation.replace("AccountAccess")}
            >
              <Text style={onboardingStyle.btnText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={[onboardingStyle.btn]} onPress={goNextSlide}>
            <Text style={onboardingStyle.btnText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
