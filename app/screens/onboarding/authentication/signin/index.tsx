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

const SignIn = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../../assets/onboarding/create-bg.png")}
      style={styles.container}
    >
      <View>
        <Text style={styles.text}>Sign In</Text>
        <Text style={styles.subText}>
          Sign into your account and make some special people happy with your
          scrims {"🚀 🚀"}
        </Text>
      </View>
      <View style={styles.minContainer}>
        <TextInput
          theme={{ roundness: 15 }}
          style={styles.input}
          mode="outlined"
          label="Username / Email"
        />
        <TextInput
          theme={{ roundness: 15 }}
          style={styles.input}
          mode="outlined"
          label="Password"
        />
      </View>
      <View style={styles.nextContainer}>
        <Text style={styles.singin}>
          No account?{" "}
          <Text
            onPress={() => navigation.navigate(routes.AUTHENTICATION_SIGNUP)}
            style={{ color: colors.primary, fontWeight: "800" }}
          >
            Create one
          </Text>
        </Text>
        <ScrimButton
          onPress={() => navigation.navigate(routes.AUTHENTICATION_PINSETUP)}
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
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    padding: 30,
  },
  text: {
    color: colors.primary,
    fontSize: 35,
    marginHorizontal: 15,
    fontFamily: "Moderat-Bold",
  },
  subText: {
    fontFamily: "Moderat",
    fontSize: 18,
    color: colors.black,
    marginHorizontal: 15,
    marginTop: 15,
    width: "80%",
  },
  singin: {
    fontFamily: "Moderat",
    fontSize: 15,
  },
  input: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
export default SignIn;
