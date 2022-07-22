import React from "react";
import {
  View,
  StyleSheet,
  GestureResponderEvent,
  Text,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../../../config/colors";
import Arrow from "../../../icons/Arrow";
import Button from "../Button";

type ScrimButtonType = {
  onPress: (event: GestureResponderEvent) => void;
  style?: any;
  mode?: "primary" | "white";
  color?: string;
};

const arrows = {
  primary: require("../../../assets/arrow-white.png"),
  white: require("../../../assets/arrow-primary.png"),
};

const ScrimButton = ({
  onPress,
  style,
  mode = "primary",
  color,
}: ScrimButtonType) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: colors[mode] }]}>
        <Image
          resizeMode="center"
          style={{ width: 60, height: 20 }}
          source={arrows[mode]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },
});

export default ScrimButton;
