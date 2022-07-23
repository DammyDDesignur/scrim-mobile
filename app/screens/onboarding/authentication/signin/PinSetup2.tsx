import React from "react";

import {
  Dimensions,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Keyboard,
} from "react-native";

import colors from "../../../../config/colors";

import ScrimButton from "../../../../components/reusables/ScrimButton";
import routes from "../../../../routes";

import { KeycodeInput } from "react-native-keycode";
import SafeScreen from "../../../../components/reusables/SafeScreen";

const { width, height } = Dimensions.get("window");

const PinSetup2 = ({ navigation }) => {
  const [pin, setPin] = React.useState("");
  return (
    <SafeScreen>
      <ImageBackground
        source={require("../../../../assets/onboarding/pin-bg.png")}
        style={styles.container}
      >
        <View>
          <Text
            style={[
              styles.subText,
              { color: colors.primary, marginBottom: 30 },
            ]}
          >
            The very last one 🚀
          </Text>
          <Text style={styles.text}>Set Up Pin</Text>
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
            onComplete={(value) => {
              Keyboard.dismiss();
            }}
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
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: colors.light,
    padding: 20,
  },
  minContainer: {
    paddingVertical: 30,
    flex: 1,
  },
  nextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 30,
  },
  text: {
    color: colors.primary,
    fontSize: 28,
    fontFamily: "Moderat-Bold",
  },
  subText: {
    fontFamily: "Moderat",
    fontSize: 16,
    marginTop: 25,
    width: "80%",
    color: colors.black,
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
