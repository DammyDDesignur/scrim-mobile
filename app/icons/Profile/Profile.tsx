import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

type IconType = {
  color?: string;
};

const Profile = ({ color = "#4F5255" }: IconType) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: "center", justifyContent: "center" },
      ]}
    >
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path
          opacity="0.4"
          d="M10.1331 9.05817C10.0498 9.04984 9.9498 9.04984 9.85814 9.05817C7.8748 8.9915 6.2998 7.3665 6.2998 5.3665C6.2998 3.32484 7.9498 1.6665 9.9998 1.6665C12.0415 1.6665 13.6998 3.32484 13.6998 5.3665C13.6915 7.3665 12.1165 8.9915 10.1331 9.05817Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.9666 12.1335C3.94993 13.4835 3.94993 15.6835 5.9666 17.0252C8.25827 18.5585 12.0166 18.5585 14.3083 17.0252C16.3249 15.6752 16.3249 13.4752 14.3083 12.1335C12.0249 10.6085 8.2666 10.6085 5.9666 12.1335Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Profile;
