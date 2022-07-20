import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, G } from "react-native-svg";

type IconType = {
  color?: string;
};

const Account = ({ color = "#4F5255" }: IconType) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: "center", justifyContent: "center" },
      ]}
    >
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path
          d="M18.3332 10.8332V7.49984C18.3332 3.33317 16.6665 1.6665 12.4998 1.6665H7.49984C3.33317 1.6665 1.6665 3.33317 1.6665 7.49984V12.4998C1.6665 16.6665 3.33317 18.3332 7.49984 18.3332H11.6665"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <G opacity="0.4">
          <Path
            d="M9.12549 5.8335L8.25049 13.7252"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M11.7588 5.8335L10.8838 13.7252"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M6.27441 8.4668H14.1661"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M5.8335 11.1006H13.7252"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </Svg>
    </View>
  );
};

export default Account;
