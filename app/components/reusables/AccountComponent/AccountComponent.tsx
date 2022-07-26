import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../../config/colors";
import Button from "../Button";

import { Octicons } from "@expo/vector-icons";

const AccountComponent = ({ title, logo, username, onDelete, onAdd }) => {
  return (
    <View style={styles.container}>
      <Button
        style={{
          paddingHorizontal: 0,
        }}
        mode="text"
        text={title}
        contentStyle={{ fontSize: 13, width: 80, textAlign: "center" }}
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
            onPress={onDelete}
            mode="text"
            style={{ backgroundColor: colors.light, ...styles.btn }}
          />
        ) : (
          <Button
            icon="plus"
            onPress={onAdd}
            mode="contained"
            style={styles.btn}
          />
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginVertical: 5,
  },
  text: {
    fontFamily: "Moderat-Bold",
    fontSize: 12,
    flex: 1,
    textAlign: "center",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
});
export default AccountComponent;
