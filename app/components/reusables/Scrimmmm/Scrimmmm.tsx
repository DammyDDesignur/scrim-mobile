import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../../config/colors";
import ScrimButton from "../ScrimButton";
import ViewWithPng from "../ViewWithPng";

const Scrimmmm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scrimViewInner}>
        <ViewWithPng style={{ paddingHorizontal: 0 }}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../../assets/profile/minion-small.png")}
          />
          <Text style={styles.scrimText}>Scrimmmm</Text>
        </ViewWithPng>
      </View>
      <ScrimButton mode="white" onPress={() => console.log("hi")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    padding: 20,
  },
  scrimText: {
    color: colors.white,
    marginHorizontal: 5,
    fontSize: 18,
    fontFamily: "Moderat",
  },
  WithPngText: {
    color: colors.white,
    marginHorizontal: 5,
    fontSize: 15,
    fontFamily: "Moderat",
  },
  scrimViewInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Scrimmmm;
