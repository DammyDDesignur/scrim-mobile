import React from "react";

import { Dimensions, View, StyleSheet, ScrollView, Image } from "react-native";
import { Text, TextInput } from "react-native-paper";
import colors from "../../../../config/colors";

import ScrimButton from "../../../../components/reusables/ScrimButton";
import routes from "../../../../routes";

const { width, height } = Dimensions.get("window");

const EmailVerification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image
          style={styles.img}
          source={require("../../../../assets/onboarding/Thumbs.png")}
        />
      </View>
      <View>
        <Text style={styles.text}>A scrim mail has been sent to your mail</Text>
        <Text style={styles.subText}>
          Kindly go through your mail inbox{" "}
          <Text style={{ color: colors.primary, fontWeight: "800" }}>
            (Usermail@mail.com)
          </Text>{" "}
          for your verification mail
        </Text>
      </View>

      <View style={styles.nextContainer}>
        <Text style={{ color: colors.primary, fontWeight: "800", marginBottom:20 }}>
          Set Up Pin
        </Text>

        <ScrimButton
          onPress={() => navigation.navigate(routes.AUTHENTICATION_SIGNIN)}
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
    display: "flex",
    justifyContent: "space-around",
  },
  minContainer: {
    height: "80%",
    width,
    padding: 30,
  },
  nextContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: colors.primary,
    fontSize: 30,
    marginHorizontal: 35,
    fontFamily: "Moderat-regular",
    fontWeight: "500",
    textAlign: "center",
    marginBottom : 50
  
  },
  subText: {
    marginHorizontal: 35,
    fontFamily: "Moderat-Light",
    fontSize: 17,
    textAlign: "center",
  },
  singin: {
    fontFamily: "Moderat",
    fontSize: 15,
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
    resizeMode: "contain",
    marginBottom : -100
  },
});
export default EmailVerification;
