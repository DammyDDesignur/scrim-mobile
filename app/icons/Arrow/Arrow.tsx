import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

type IconType = {
  color?: string;
};

const Arrow = ({ color = "white" }: IconType) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: "center", justifyContent: "center", padding: 20 },
      ]}
    >
      <Svg width="52" height="16" viewBox="0 0 52 16" fill="none">
        <Path
          d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM51.7071 8.70711C52.0976 8.31659 52.0976 7.68342 51.7071 7.2929L45.3431 0.928936C44.9526 0.538412 44.3195 0.538412 43.9289 0.928936C43.5384 1.31946 43.5384 1.95263 43.9289 2.34315L49.5858 8L43.9289 13.6569C43.5384 14.0474 43.5384 14.6805 43.9289 15.0711C44.3195 15.4616 44.9526 15.4616 45.3431 15.0711L51.7071 8.70711ZM1 9L51 9L51 7L1 7L1 9Z"
          fill={color}
        />
        <Path
          d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM51.7071 8.70711C52.0976 8.31659 52.0976 7.68342 51.7071 7.2929L45.3431 0.928936C44.9526 0.538412 44.3195 0.538412 43.9289 0.928936C43.5384 1.31946 43.5384 1.95263 43.9289 2.34315L49.5858 8L43.9289 13.6569C43.5384 14.0474 43.5384 14.6805 43.9289 15.0711C44.3195 15.4616 44.9526 15.4616 45.3431 15.0711L51.7071 8.70711ZM1 9L51 9L51 7L1 7L1 9Z"
          fill={color}
          fill-opacity="0.2"
        />
      </Svg>
    </View>
  );
};

export default Arrow;
