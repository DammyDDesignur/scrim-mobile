import React from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  GestureResponderEvent,
} from "react-native";
import { Text } from "react-native-paper";
import ScrimButton from "../../../components/reusables/ScrimButton";
import colors from "../../../config/colors";

type SlideType = {
  handleNext?: (event: GestureResponderEvent) => void;
};

const { width, height } = Dimensions.get("window");
const FirstSlide = ({ handleNext }: SlideType) => {
  return (
    <ImageBackground
      source={require("../../../assets/onboarding/FirstSlide.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.minContainer}>
        <Text style={styles.text}>Payment for social birds</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../../assets/onboarding/socials.png")}
          />
        </View>
      </View>
      <View style={styles.controls}>
        <Image
          style={{ width: 50 }}
          resizeMode="center"
          source={require("../../../assets/onboarding/step1.png")}
        />
        <ScrimButton mode="white" onPress={handleNext} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: "100%",
    backgroundColor: colors.primary,
    display: "flex",
    justifyContent: "center",
  },
  controls: {
    paddingHorizontal: 28,
    width,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  minContainer: {
    height: "70%",
    width,
  },
  text: {
    color: colors.white,
    fontSize: 40,
    marginVertical: 20,
    marginHorizontal: 42,
    fontFamily: "Moderat-Bold",
  },
  imgView: {
    width,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 350,
  },
});
export default FirstSlide;
