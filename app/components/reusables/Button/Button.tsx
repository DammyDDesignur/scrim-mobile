import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useTheme } from "react-native-paper";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type ButtonType = {
  children?: React.ReactNode;
  mode?: "outlined" | "contained" | "text";
  color?: "primary" | "secondary" | "error" | "warning" | "success";
  text?: string;
  onPress?: () => void;
  icon?: any | string;
  Icon?: React.ReactNode;
  iconSize?: number;
  style?: ViewStyle;
  contentStyle?: TextStyle;
  iconColor?: string;
  textColor?: string;
};

const Button = ({
  children,
  mode = "contained",
  color = "primary",
  text,
  onPress,
  icon,
  Icon,
  iconColor,
  iconSize = 20,
  style,
  contentStyle,
  textColor,
}: ButtonType) => {
  const { colors } = useTheme();
  const modes = {
    outlined: {
      borderWidth: 2,
      borderColor: colors[color],
    },
    contained: {
      backgroundColor: colors[color],
      borderWidth: 2,
      borderColor: colors[color],
    },
    text: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: "transparent",
    },
  };
  const modeText = {
    outlined: {
      color: textColor ? textColor : colors[color],
    },
    contained: {
      color: textColor ? textColor : "#fff",
    },
    text: {
      color: textColor ? textColor : colors[color],
    },
  };
  const styles = StyleSheet.create({
    container: {
      borderRadius: 30,
      padding: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontFamily: "Moderat",
      fontSize: 15,
      fontWeight: "bold",
      marginLeft: Icon || icon ? 5 : 0,
    },
  });

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.container, modes[mode], style]}>
        {icon && (
          <MaterialCommunityIcons
            size={iconSize}
            color={iconColor || modeText[mode].color}
            name={icon}
          />
        )}
        <View>{Icon && <>{Icon}</>}</View>
        {text ? (
          <Text style={[styles.text, modeText[mode], contentStyle]}>
            {text}
          </Text>
        ) : (
          <>{children}</>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
