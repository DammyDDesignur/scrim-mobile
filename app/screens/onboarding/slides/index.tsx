import React, { ReactEventHandler } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import colors from "../../../config/colors";
import ThirdSlide from "./ThirdSlide";
import { Button } from "react-native-paper";
import ScrimButton from "../../../components/reusables/ScrimButton";
import Arrow from "../../../icons/Arrow";
import FourthSlide from "./FourthSlide";

const { width, height } = Dimensions.get("window");
const OnboardingSlide = () => {
  const [screen, setScreen] = React.useState<number>(0);
  const slides = 3;
  const scrollView = React.useRef<any>();
  const handleNext = () => {
    if (screen > slides * width || screen < 0) return;
    scrollView.current.scrollTo({ x: screen + width, y: 0, animated: true });
  };

  const handleGetPosition = (event: any) => {
    setScreen(event.nativeEvent.contentOffset.x);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={handleGetPosition}
        ref={scrollView}
        disableIntervalMomentum={true}
        snapToInterval={width}
        decelerationRate={0.8}
        horizontal
        style={styles.scroll}
      >
        <FirstSlide handleNext={handleNext} />
        <SecondSlide handleNext={handleNext} />
        <ThirdSlide handleNext={handleNext} />
        <FourthSlide />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width,
  },
  scroll: {
    height: "100%",
    width,
  },
});
export default OnboardingSlide;
