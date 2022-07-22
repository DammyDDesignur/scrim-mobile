import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../../config/colors";
import Button from "../Button";
import ScrimButton from "../ScrimButton";

const Scrimmmm = () => {
  return (
    <View style={styles.container}>
      <Button
        mode="text"
        style={{ paddingHorizontal: 0 }}
        contentStyle={styles.scrimText}
        Icon={
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../../assets/profile/minion-small.png")}
          />
        }
        text="Scrimmmm"
      />

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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  scrimText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "Moderat-Bold",
  },
});
export default Scrimmmm;
