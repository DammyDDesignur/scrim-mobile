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

const SignUp = ({ navigation }) => {
  return (
    <SafeScreen>
      <ScrollView style={styles.container}>
        <ImageBackground
          style={{
            flex: 1,
            padding: 20,
            display: "flex",
            justifyContent: "space-between",
            height: height,
          }}
          source={require("../../../../assets/onboarding/create-bg.png")}
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
            <Text style={styles.text}>Create Account</Text>
            <Text style={styles.subText}>
              Create a scrim account withing seconds and spread love 👻
            </Text>
          </View>
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
                onPress={() =>
                  navigation.navigate(routes.AUTHENTICATION_SIGNIN)
                }
                style={[
                  styles.singin,
                  { color: colors.primary, fontFamily: "Moderat-Bold" },
                ]}
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
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: "100%",
    backgroundColor: colors.light,
  },
  minContainer: {
    paddingHorizontal: 15,
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
export default SignUp;
