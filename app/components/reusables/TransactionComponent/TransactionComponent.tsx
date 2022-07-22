import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../../config/colors";
import Button from "../Button";

import { Octicons } from "@expo/vector-icons";

const TransactionComponent = ({ title, logo, username }) => {
  return (
    <View style={styles.container}>
      <Button
        style={{ padding: 0 }}
        mode="text"
        text={title}
        textColor={colors.black}
        Icon={<Image source={logo} style={{ width: 20, height: 20 }} />}
      />
      <Text style={styles.text}>{username ? username : "------"}</Text>
      <>
        {Boolean(username) ? (
          <Button
            Icon={
              <Octicons
                name="trash"
                size={20}
                style={{ paddingHorizontal: 3 }}
                color={colors.primary}
              />
            }
            mode="text"
            style={{ backgroundColor: colors.light }}
          />
        ) : (
          <Button icon="plus" mode="contained" />
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
  text: {
    fontFamily: "Moderat",
    fontSize: 12,
    fontWeight: "800",
  },
});
export default TransactionComponent;
