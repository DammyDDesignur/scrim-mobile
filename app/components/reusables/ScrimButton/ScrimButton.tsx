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
  mode?: "contained" | "outlined" | "text";
  color?: string;
};

const ScrimButton = ({
  onPress,
  style,
  mode = "contained",
  color,
}: ScrimButtonType) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Arrow color={color} />
        <Text style={{ color: "transparent" }}>scrimming</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
});
export default ScrimButton;
