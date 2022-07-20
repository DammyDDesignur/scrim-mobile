import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import SafeScreen from "../../../components/reusables/SafeScreen";
import colors from "../../../config/colors";
import Transfer from "../../../icons/Transfer";

import VirtualKeyboard from "react-native-virtual-keyboard";
import ViewWithPng from "../../../components/reusables/ViewWithPng";
import { Button } from "react-native-paper";
import ScrimButton from "../../../components/reusables/ScrimButton";
import Constants from "expo-constants";

const HomeScreen = () => {
  const [amount, setAmount] = React.useState<string>("|");
  return (
    <>
      <StatusBar style="light" />

      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/profile/Hanger.png")}
          resizeMode="center"
          style={styles.balanceContainer}
        >
          <Text style={styles.balanceText}>Balance</Text>
          <ViewWithPng style={styles.balance}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/profile/icon-small.png")}
            />
            <Text style={styles.text}>3,180</Text>
          </ViewWithPng>
        </ImageBackground>
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
            rowStyle={{ paddingVertical: 10 }}
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
  balance: {
    backgroundColor: colors.warning,
    width: "45%",
    transform: [{ rotate: "-5deg" }],
    borderWidth: 2,
    borderColor: colors.tertiary,
  },
  balanceContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 15,
    fontFamily: "Moderat",
    color: colors.white,
    marginBottom: 5,
    transform: [{ rotate: "-5deg" }],
  },
  container: {
    backgroundColor: colors.primary,
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    paddingVertical: Constants.statusBarHeight,
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
  text: {
    fontSize: 20,
    fontFamily: "Moderat",
    fontWeight: "700",
    color: colors.primary,
    marginHorizontal: 10,
  },
});
export default HomeScreen;
