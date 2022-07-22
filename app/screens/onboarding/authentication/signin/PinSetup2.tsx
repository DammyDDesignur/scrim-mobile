import React from "react";

import {
  Dimensions,
  View,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";

import colors from "../../../../config/colors";

import ScrimButton from "../../../../components/reusables/ScrimButton";
import routes from "../../../../routes";

import { KeycodeInput } from "react-native-keycode";

const { width, height } = Dimensions.get("window");

const PinSetup2 = ({ navigation }) => {
  const [pin, setPin] = React.useState("");
  return (
    <ImageBackground
      source={require("../../../../assets/onboarding/pin-bg.png")}
      style={styles.container}
    >
      <View>
        <Text
          style={[styles.subText, { color: colors.primary, marginBottom: 30 }]}
        >
          The very last one 🚀
        </Text>
        <Text style={styles.text}>Retype Pin</Text>
        <Text style={styles.subText}>
          Input a combination that you would easily remember.
        </Text>
      </View>
      <View style={styles.minContainer}>
        <KeycodeInput
          textColor={colors.primary}
          tintColor={colors.tertiary}
          value={pin}
          onChange={(val: string) => setPin(val)}
          numeric={true}
          autoFocus={false}
        />
      </View>
      <View style={styles.nextContainer}>
        <ScrimButton
          onPress={() =>
            navigation.navigate(routes.AUTHENTICATION_SUCESSSCREEN)
          }
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: "100%",
    backgroundColor: colors.light,
    flex: 1,
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
export default PinSetup2;
