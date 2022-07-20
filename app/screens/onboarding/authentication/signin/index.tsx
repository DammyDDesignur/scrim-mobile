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
    <View style={styles.container}>
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
    </View>
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
    justifyContent: "space-between",
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
  input: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
export default SignIn;
