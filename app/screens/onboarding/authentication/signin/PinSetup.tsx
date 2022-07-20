import React from "react";

import {
  Dimensions,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  GestureResponderEvent,
  ScrollView,
} from "react-native";
import { Text, TextInput } from "react-native-paper";
import colors from "../../../../config/colors";
import Constants from "expo-constants";
import SafeScreen from "../../../../components/reusables/SafeScreen";
import ScrimButton from "../../../../components/reusables/ScrimButton";
import routes from "../../../../routes";

const { width, height } = Dimensions.get("window");

const PinSetup = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.text}>Set Up Pin</Text>
        <Text style={styles.subText}>
          Input a combination that you would easily remember.
        </Text>
      </View>
      <View style={styles.minContainer}>
        <Text style={styles.pin}>Pin</Text>
        <TextInput
          theme={{ roundness: 15 }}
          style={styles.input}
          mode="outlined"
          secureTextEntry
          maxLength={4}
        />
        <Text style={styles.pin}>Retype Pin</Text>
        <TextInput
          theme={{ roundness: 15 }}
          style={styles.input}
          mode="outlined"
          secureTextEntry
          maxLength={4}
        />
      </View>
      <View style={styles.nextContainer}>
        <ScrimButton
          onPress={() =>
            navigation.navigate(routes.AUTHENTICATION_SUCESSSCREEN)
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: "100%",
    backgroundColor: colors.light,
  },
  minContainer: {
    height: "80%",
    width,
    padding: 30,
    flex: 1,
  },
  nextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 20,
    padding: 30,
  },
  text: {
    color: colors.primary,
    fontSize: 35,
    marginHorizontal: 35,
    fontFamily: "Moderat",
    fontWeight: "700",
  },
  subText: {
    fontFamily: "Moderat",
    fontSize: 18,

    marginHorizontal: 35,
    marginTop: 35,
  },
  singin: {
    fontFamily: "Moderat",
    fontSize: 15,
  },
  pin: {
    color: colors.primary,
    fontSize: 35,
    fontFamily: "Moderat",
    fontWeight: "700",
  },
  input: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
export default PinSetup;
