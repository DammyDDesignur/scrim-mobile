import React from "react";

import { Dimensions, View, StyleSheet, Text, Image } from "react-native";
import colors from "../../../../config/colors";

import ScrimButton from "../../../../components/reusables/ScrimButton";
import routes from "../../../../routes";
import SafeScreen from "../../../../components/reusables/SafeScreen";

const { width, height } = Dimensions.get("window");

const EmailVerification = ({ navigation }) => {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            resizeMode="center"
            source={require("../../../../assets/onboarding/Thumbs.png")}
          />
        </View>
        <View>
          <Text style={styles.text}>
            A scrim mail has been sent to your mail
          </Text>
          <Text style={styles.subText}>
            Kindly go through your mail inbox{" "}
            <Text style={{ color: colors.primary, fontWeight: "800" }}>
              (Usermail@mail.com)
            </Text>{" "}
            for your verification mail
          </Text>
        </View>

        <View style={styles.nextContainer}>
          <Text
            style={{
              color: colors.primary,
              marginVertical: 15,
            }}
          >
            Set Up Pin
          </Text>

          <ScrimButton
            onPress={() => navigation.navigate(routes.AUTHENTICATION_SIGNIN)}
          />
        </View>
      </View>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: "100%",
    backgroundColor: colors.light,
    display: "flex",
    justifyContent: "space-around",
  },
  nextContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 35,
  },
  text: {
    color: colors.primary,
    fontSize: 22,
    marginHorizontal: 35,
    fontFamily: "Moderat-Bold",
    textAlign: "center",
  },
  subText: {
    marginHorizontal: 50,
    marginVertical: 15,
    fontFamily: "Moderat-Light",
    fontSize: 17,
    textAlign: "center",
  },
  imgView: {
    width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 150,
    height: 150,
  },
});
export default EmailVerification;
