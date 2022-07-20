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
import SafeScreen from "../../../components/reusables/SafeScreen";
import colors from "../../../config/colors";
import Transfer from "../../../icons/Transfer";

import VirtualKeyboard from "react-native-virtual-keyboard";
import ViewWithPng from "../../../components/reusables/ViewWithPng";
import { Button } from "react-native-paper";
import ScrimButton from "../../../components/reusables/ScrimButton";

const TransferScreen = () => {
  const [amount, setAmount] = React.useState<string>("|");
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../../assets/profile/icon-small.png")}
          />
        </View>
        <Text style={styles.amount}>{amount}</Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.rateContainer}>
            <Text style={styles.rate}>= N60,000/$100</Text>
          </View>
        </View>
        <View>
          <VirtualKeyboard
            rowStyle={{ paddingVertical: 15 }}
            decimal={true}
            clearOnLongPress={true}
            color={colors.white}
            pressMode="string"
            onPress={(val: string) => setAmount(val)}
          />
        </View>
        <View style={styles.action}>
          <Button style={styles.btn} color={colors.white} mode="outlined">
            Deposit
          </Button>
          <ScrimButton mode="white" onPress={() => console.log("hi")} />
        </View>
      </View>
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
  btn: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.white,
  },
  container: {
    backgroundColor: colors.primary,
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  amount: {
    color: colors.white,
    textAlign: "center",
    fontFamily: "Moderat",
    fontSize: 30,
    marginVertical: 20,
  },
  rate: {
    color: colors.white,
    textAlign: "center",
    fontFamily: "Moderat",
    fontSize: 15,
    marginVertical: 10,
  },
  rateContainer: {
    backgroundColor: colors.tertiary,
    borderRadius: 50,
    paddingHorizontal: 10,
    width: "40%",
  },
});
export default TransferScreen;
