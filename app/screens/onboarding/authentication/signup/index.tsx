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

const SignUp = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../../../assets/onboarding/create-bg.png")}
      >
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.subText}>
          Create a scrim account withing seconds and spread love 👻
        </Text>
        <View style={styles.minContainer}>
          <TextInput
            theme={{ roundness: 15 }}
            style={styles.input}
            mode="outlined"
            label="Email"
          />
          <TextInput
            theme={{ roundness: 15 }}
            style={styles.input}
            mode="outlined"
            label="Username"
          />
          <TextInput
            theme={{ roundness: 15 }}
            style={styles.input}
            mode="outlined"
            label="Country"
          />
          <TextInput
            theme={{ roundness: 15 }}
            style={styles.input}
            mode="outlined"
            label="Password"
          />
          <TextInput
            theme={{ roundness: 15 }}
            style={styles.input}
            mode="outlined"
            label="Retype Password"
          />
        </View>
        <View style={styles.nextContainer}>
          <Text style={styles.singin}>
            Got an account?{" "}
            <Text
              onPress={() => navigation.navigate(routes.AUTHENTICATION_SIGNIN)}
              style={{ color: colors.primary, fontWeight: "800" }}
            >
              Sign In
            </Text>
          </Text>
          <ScrimButton
            onPress={() =>
              navigation.navigate(routes.AUTHENTICATION_EMAILVERIFICATION)
            }
          />
        </View>
      </ImageBackground>
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
    width,
    padding: 30,
  },
  nextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 15,
  },
  text: {
    color: colors.primary,
    fontSize: 30,
    marginHorizontal: 15,
    fontFamily: "Moderat-Bold",
  },
  subText: {
    marginHorizontal: 15,
    fontFamily: "Moderat",
    fontSize: 18,
    color: colors.black,
    width: "80%",
  },
  singin: {
    fontFamily: "Moderat",
    fontSize: 14,
  },
  input: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
export default SignUp;
