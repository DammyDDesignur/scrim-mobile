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
const SecondSlide = ({ handleNext }: SlideType) => {
  return (
    <>
      <ImageBackground
        source={require("../../../assets/onboarding/SecondSlide.png")}
        resizeMode="contain"
        style={styles.container}
      >
        <View style={styles.minContainer}>
          <Text style={styles.text}>
            Scrim. It's your money. Do it your way.
          </Text>
          <View style={styles.imgView}>
            <Image
              style={styles.img}
              source={require("../../../assets/onboarding/Plane.png")}
            />
          </View>
        </View>
        <View style={styles.controls}>
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
    backgroundColor: colors.secondary,
    display: "flex",
    justifyContent: "center",
  },
  controls: {
    padding: 10,
    width,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
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
    fontFamily: "Moderat",
    fontWeight: "700",
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
export default SecondSlide;
