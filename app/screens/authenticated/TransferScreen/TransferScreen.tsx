import React from "react";
import { View, StyleSheet, Text, ScrollView, StatusBar } from "react-native";
import SafeScreen from "../../../components/reusables/SafeScreen";
import colors from "../../../config/colors";
import Transfer from "../../../icons/Transfer";

const TransferScreen = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container}>
        <View>
          <Text>Hello World</Text>
          <Transfer color={colors.primary} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    display: "flex",
    flexDirection: "row",
  },
});
export default TransferScreen;
