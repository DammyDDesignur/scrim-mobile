import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";

import colors from "../../../config/colors";

import VirtualKeyboard from "react-native-virtual-keyboard";

import ScrimButton from "../../../components/reusables/ScrimButton";

import Button from "../../../components/reusables/Button";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetDraggableView,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RNBottomSheetBackDrop } from "../../../components/reusables/RNBottomSheet";
import SingleSend from "../../../components/reusables/SingleSend";
import BulkSend from "../../../components/reusables/BulkSend";

const snapPoints = [1, "30%"];

const HomeScreen = () => {
  const [amount, setAmount] = React.useState<string>("|");
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = React.useCallback((index: number) => {
    if (index == 0) {
      bottomSheetModalRef.current.dismiss();
    }
  }, []);

  React.useEffect(() => {
    return bottomSheetModalRef.current.dismiss();
  }, []);
  return (
    <>
      <StatusBar style="light" />
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/profile/Hanger.png")}
            resizeMode="center"
            style={styles.balanceContainer}
          >
            <Text style={styles.balanceText}>Balance</Text>
            <Button
              style={styles.balance}
              Icon={
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/profile/icon-small.png")}
                />
              }
              text={"3,180"}
              contentStyle={styles.text}
            />
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
            <Button
              mode="contained"
              color="tertiary"
              contentStyle={{ width: "auto" }}
              text="= N60,000/$100"
            />
          </View>
          <View>
            <VirtualKeyboard
              rowStyle={{ paddingVertical: 10 }}
              decimal={true}
              clearOnLongPress={true}
              color={colors.warning}
              textStyle={styles.keyPadText}
              pressMode="string"
              onPress={(val: string) => setAmount(val)}
              backspaceImg={require("../../../assets/backspace.png")}
            />
          </View>
          <View style={styles.action}>
            <Button
              text="Deposit"
              mode="outlined"
              color="white"
              contentStyle={{
                fontSize: 15,
              }}
              style={{ width: 100 }}
            />
            <ScrimButton mode="white" onPress={handlePresentModalPress} />
          </View>
        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          detached={true}
          enablePanDownToClose={true}
          enableOverDrag
          enableDismissOnClose={true}
          backdropComponent={RNBottomSheetBackDrop}
          // handleComponent={
          //   <Button onPress={() => alert("hi")} iconSize={10} icon="close" />
          // }
        >
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetDraggableView>
              <Button
                onPress={() => alert("hi")}
                iconSize={10}
                icon="close"
                style={styles.closeBtn}
              />
              <View>
                <Text style={styles.modalTitle}>Send Money</Text>
                <SingleSend />
                <BulkSend />
              </View>
            </BottomSheetDraggableView>
          </GestureHandlerRootView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
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
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  balance: {
    backgroundColor: colors.warning,
    width: "45%",
    transform: [{ rotate: "-5.36deg" }],
    borderWidth: 2,
    borderColor: colors.tertiary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 25,
  },
  balanceContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    marginBottom: 20,
    justifyContent: "center",
  },
  balanceText: {
    fontSize: 15,
    fontFamily: "Moderat",
    color: colors.white,
    marginBottom: 5,
    transform: [{ rotate: "-5.36deg" }],
  },
  container: {
    backgroundColor: colors.primary,
    height: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "space-around",
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
    fontSize: 25,
    fontFamily: "Moderat-Bold",
    color: colors.primary,
    marginHorizontal: 10,
  },
  keyPadText: {
    fontFamily: "Moderat-Bold",
  },
  modalTitle: {
    textAlign: "center",
    fontFamily: "Moderat-Bold",
    color: colors.primary,
    fontSize: 15,
  },
  closeBtn: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    position: "absolute",
    top: 0,
    right: 5,
    marginTop: -20,
    zIndex: 100000,
  },
});

export default HomeScreen;
