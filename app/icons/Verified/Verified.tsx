import React from "react";
import { View, StyleSheet } from "react-native";
import { Badge } from "react-native-paper";
import Svg, { Path, G } from "react-native-svg";

type IconType = {
  color?: string;
  style?: any;
};

const Verified = ({ color = "#fff", style }: IconType) => {
  return (
    <View style={style}>
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <Path
            d="M6.55623 1.39373L3.43748 2.56873C2.71873 2.83748 2.13123 3.68748 2.13123 4.44998V9.09373C2.13123 9.83123 2.61873 10.8 3.21248 11.2437L5.89998 13.25C6.78123 13.9125 8.23123 13.9125 9.11248 13.25L11.8 11.2437C12.3937 10.8 12.8812 9.83123 12.8812 9.09373V4.44998C12.8812 3.68123 12.2937 2.83123 11.575 2.56248L8.45623 1.39373C7.92498 1.19998 7.07498 1.19998 6.55623 1.39373Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            opacity="0.4"
            d="M5.65625 7.41874L6.6625 8.42499L9.35 5.73749"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </View>
    </View>
  );
};

export default Verified;
