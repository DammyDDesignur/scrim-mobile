import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../../config/colors";
import Button from "../Button";
import ScrimButton from "../ScrimButton";

const BulkSend = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 40, height: 40, alignSelf: "flex-start" }}
        source={require("../../../assets/profile/bulk-send.png")}
      />
      <View style={styles.sendContainer}>
        <Text style={styles.scrimText}>Bulk Send</Text>
        <Text style={styles.descText}>Send scrims to your geng !</Text>
      </View>

      <ScrimButton mode="primary" onPress={() => console.log("hi")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  scrimText: {
    color: colors.tertiary,
    fontSize: 15,
    fontFamily: "Moderat-Bold",
  },
  descText: {
    fontSize: 12,
  },
  sendContainer: {
    display: "flex",
    marginLeft: 10,
    flex: 1,
  },
});
export default BulkSend;
