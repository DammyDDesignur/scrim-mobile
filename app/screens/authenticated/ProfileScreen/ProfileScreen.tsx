import React, { useCallback, useMemo, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { Avatar, TextInput } from "react-native-paper";
import Button from "../../../components/reusables/Button";
import colors from "../../../config/colors";
import Profile from "../../../icons/Profile";
import Verified from "../../../icons/Verified";
import routes from "../../../routes";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import ScrimButton from "../../../components/reusables/ScrimButton";
import { useFocusEffect } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ProfileScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState<number>(0);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => [1, "50%", "90%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    setIndex(index);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      bottomSheetRef.current?.close();
      return () => bottomSheetRef.current?.close();
    }, [])
  );
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: colors.light }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.gText}>Profile Pic</Text>
            <Avatar.Icon
              size={40}
              style={{ borderRadius: 15 }}
              icon="white-balance-sunny"
            />
          </View>
          <View style={styles.profileInfoContainer}>
            <Avatar.Image
              size={150}
              source={require("../../../assets/profile/pic.png")}
            />
            <View style={styles.infos}>
              <LinearGradient
                style={styles.verified}
                colors={["#623CEA", "#7000FF", "#09CAEE"]}
              >
                <Verified />
                <Text style={styles.verifiedText}>Verified</Text>
              </LinearGradient>
              <Text style={styles.username}>@Nagamoto</Text>
              <Button mode="outlined" style={{ width: 110 }} text="Change DP" />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.gText}>Info</Text>
            <View style={{ padding: 10 }}>
              <View style={{ marginVertical: 5 }}>
                <Text style={styles.gText}>Username</Text>
                <Text
                  style={[styles.gText, styles.username, { color: "#000" }]}
                >
                  @Nagamoto
                </Text>
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={styles.gText}>Email</Text>
                <Text
                  style={[styles.gText, styles.username, { color: "#000" }]}
                >
                  Nagamoto@email.com
                </Text>
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={styles.gText}>Password</Text>
                <Text
                  style={[styles.gText, styles.username, { color: "#000" }]}
                >
                  **************
                </Text>
              </View>
              <View style={{ marginVertical: 5 }}>
                <Button
                  onPress={() => navigation.navigate(routes.PROFILE_EDIT)}
                  mode="outlined"
                  style={{ alignSelf: "flex-end" }}
                  text="Edit"
                />
              </View>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.gText}>Pin Reset</Text>
            <View style={styles.pinResetContainer}>
              <Text style={[styles.gText, styles.username, { color: "#000" }]}>
                **************
              </Text>
              <Button
                // onPress={() => navigation.navigate(routes.PROFILE_PINRESET)}
                onPress={() => bottomSheetRef.current.expand()}
                mode="outlined"
                style={{ width: 110 }}
                text="Reset"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomSheet
        enablePanDownToClose={true}
        enableOverDrag={true}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        ref={bottomSheetRef}
        index={index}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetScrollView>
            <View
              style={{
                padding: 20,
              }}
            >
              <Text style={styles.gText}>Kindly input new pin</Text>
              <TextInput
                theme={{ roundness: 15 }}
                style={styles.input}
                mode="outlined"
                label="Old Pin"
              />
              <TextInput
                theme={{ roundness: 15 }}
                style={styles.input}
                mode="outlined"
                label="New Pin"
              />
              <TextInput
                theme={{ roundness: 15 }}
                style={styles.input}
                mode="outlined"
                label="Retype Pin"
              />
              <View style={styles.action}>
                <Button
                  text="Cancel"
                  mode="text"
                  color="error"
                  contentStyle={{ width: "auto", fontSize: 15 }}
                  onPress={() => bottomSheetRef.current.close()}
                />
                <ScrimButton />
              </View>
            </View>
          </BottomSheetScrollView>
        </GestureHandlerRootView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    padding: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  infos: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    height: 150,
    flex: 1,
  },
  infoContainer: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderRadius: 30,
    marginVertical: 20,
  },
  verified: {
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: 120,
  },
  verifiedText: {
    color: colors.white,
    fontFamily: "Moderat",
    fontWeight: "800",
    marginLeft: 10,
  },
  username: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: "Moderat",
    fontWeight: "800",
  },
  gText: {
    fontFamily: "Moderat",
    fontSize: 20,
    color: colors.black,
  },
  pinResetContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  input: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
export default ProfileScreen;
