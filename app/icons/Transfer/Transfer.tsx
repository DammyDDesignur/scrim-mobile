import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, G } from "react-native-svg";

type IconType = {
  color?: string;
};

const Transfer = ({ color = "#4F5255" }: IconType) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: "center", justifyContent: "center" },
      ]}
    >
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path
          d="M6.16689 5.2668L13.2419 2.90846C16.4169 1.85013 18.1419 3.58346 17.0919 6.75846L14.7336 13.8335C13.1502 18.5918 10.5502 18.5918 8.96689 13.8335L8.26689 11.7335L6.16689 11.0335C1.40856 9.45013 1.40856 6.85846 6.16689 5.2668Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          opacity="0.34"
          d="M8.4248 11.375L11.4081 8.3833"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Transfer;
