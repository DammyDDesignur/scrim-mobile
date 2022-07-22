import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import colors from "../../../config/colors";
import Transfer from "../../../icons/Transfer";

import ScrimButton from "../../../components/reusables/ScrimButton";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../../components/reusables/Button";
const TransferScreen = () => {
  const [amount, setAmount] = React.useState<string>("|");
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: colors.light }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.gText}>Transfer History</Text>
            <Button
              text="Filter"
              iconPosition="right"
              style={{
                backgroundColor: colors.white,
                borderColor: "transparent",
                // paddingHorizontal: 20,
                justifyContent: "space-between",
                width: 120,
              }}
              textColor={colors.black}
              Icon={<Ionicons name="filter" size={24} color={colors.black} />}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gText: {
    fontFamily: "Moderat",
    fontSize: 20,
    color: colors.black,
  },
});
export default TransferScreen;
