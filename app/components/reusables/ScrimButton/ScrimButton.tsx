import React from "react";
import {
  View,
  StyleSheet,
  GestureResponderEvent,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../../../config/colors";
import Arrow from "../../../icons/Arrow";

type ScrimButtonType = {
  onPress: (event: GestureResponderEvent) => void;
  style?: any;
  mode?: "primary" | "white";
  color?: string;
};

const ScrimButton = ({
  onPress,
  style,
  mode = "primary",
  color,
}: ScrimButtonType) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: mode === "primary" ? colors.primary : colors.white,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 100,
    },
  });
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Arrow color={mode === "primary" ? colors.white : colors.primary} />
        <Text style={{ color: "transparent" }}>scrimming</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ScrimButton;
