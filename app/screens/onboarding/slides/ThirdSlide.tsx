import { StatusBar } from "expo-status-bar";
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
const ThirdSlide = ({ handleNext }: SlideType) => {
  return (
    <>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../../../assets/onboarding/ThirdSlide.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.minContainer}>
          <Text style={styles.text}>
            Easy & Secure--pay anyone online by their social media handle.
          </Text>
          <View style={styles.imgView}>
            <Image
              style={styles.img}
              source={require("../../../assets/onboarding/People.png")}
            />
          </View>
        </View>
        <View style={styles.controls}>
          <Image
            style={{ width: 50 }}
            resizeMode="center"
            source={require("../../../assets/onboarding/step3.png")}
          />
          <ScrimButton onPress={handleNext} />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: "100%",
    backgroundColor: colors.light,
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
    color: colors.primary,
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
    height: "90%",
  },
  img: {
    width: "75%",
    height: "100%",
    resizeMode: "contain",
  },
});
export default ThirdSlide;
