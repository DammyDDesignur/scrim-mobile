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
import Button from "../../../../components/reusables/Button";

const { width, height } = Dimensions.get("window");

const SignIn = ({ navigation }) => {
  return (
    <SafeScreen>
      <ImageBackground
        source={require("../../../../assets/onboarding/create-bg.png")}
        style={styles.container}
      >
        <View>
          <Button
            onPress={() => navigation.goBack()}
            icon="arrow-left"
            mode="text"
            iconSize={25}
            iconColor={colors.black}
            style={{
              backgroundColor: colors.white,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginVertical: 30,
              alignSelf: "flex-start",
            }}
          />
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
              style={[
                styles.singin,
                { color: colors.primary, fontFamily: "Moderat-Bold" },
              ]}
            >
              Create one!
            </Text>
          </Text>
          <ScrimButton
            onPress={() => navigation.navigate(routes.AUTHENTICATION_PINSETUP)}
          />
        </View>
      </ImageBackground>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: "100%",
    backgroundColor: colors.light,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  minContainer: {
    padding: 15,
    height: "50%",
  },
  nextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: colors.primary,
    fontSize: 28,
    fontFamily: "Moderat-Bold",
  },
  subText: {
    fontFamily: "Moderat",
    fontSize: 15,
    color: colors.black,
    width: "80%",
    marginTop: 10,
  },
  singin: {
    fontFamily: "Moderat",
    fontSize: 14,
  },
  input: {
    paddingHorizontal: 5,
    marginVertical: 10,
    height: 50,
  },
});
export default SignIn;
