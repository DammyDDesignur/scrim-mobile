import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Modal,
} from "react-native";

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
import RNModal from "../../../components/reusables/RNModal";

const snapPoints = [1, "30%"];

const HomeScreen = () => {
  const [amount, setAmount] = React.useState<string>("|");

  const [modalVisible, setModalVisible] = React.useState(false);
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
          <View style={styles.balanceContainer}>
            <View style={styles.hanger}></View>
            <View style={styles.balance}>
              <Text style={styles.balanceText}>Balance</Text>
              <Button
                style={{ paddingHorizontal: 0, paddingVertical: 0 }}
                Icon={
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../../assets/profile/icon-small.png")}
                  />
                }
                mode="text"
                textColor="white"
                text={"3,180"}
                contentStyle={styles.text}
              />
            </View>
          </View>
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
                fontSize: 13,
              }}
              style={{ width: 100 }}
            />
            {/* <ScrimButton mode="white" onPress={handlePresentModalPress} /> */}
            <ScrimButton mode="white" onPress={() => setModalVisible(true)} />
          </View>
        </View>
        <RNModal
          animationType="slide"
          visible={modalVisible}
          statusBarTranslucent={true}
          onRequestClose={() => {
            alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <Text>hello world</Text>
        </RNModal>
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
    // backgroundColor: colors.warning,
    // width: "45%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.tertiary,
    backgroundColor: colors.tertiary,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  balanceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 10,
    fontFamily: "Moderat-Bold",
    color: colors.light,
    textTransform: "uppercase",
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
    fontFamily: "Moderat-Bold",
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
    color: colors.white,
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
  hanger: {
    backgroundColor: "transparent",
    height: 70,
    width: 100,
    padding: 5,
    position: "absolute",
    top: 0,
    left: "35%",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: colors.warning,
    alignSelf: "center",
  },
});

export default HomeScreen;
