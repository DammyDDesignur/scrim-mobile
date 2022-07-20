import React from "react";
import { View, StyleSheet } from "react-native";

const ViewWithPng = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
});
export default ViewWithPng;
