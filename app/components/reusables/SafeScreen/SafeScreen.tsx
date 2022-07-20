import React, { Children } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import Constants from "expo-constants";
type SafeType = {
  style?: any;
  children?: React.ReactNode;
};
const SafeScreen = ({ style, children }: SafeType) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
export default SafeScreen;
