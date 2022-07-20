import React from "react";

import { Dimensions, View, StyleSheet, ScrollView, Image } from "react-native";
import { Text, TextInput } from "react-native-paper";
import colors from "../../../../config/colors";

import ScrimButton from "../../../../components/reusables/ScrimButton";
import routes from "../../../../routes";

const { width, height } = Dimensions.get("window");

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Success Screen</Text>
      <View style={styles.imgView}>
        <Image
          style={styles.img}
          source={require("../../../../assets/onboarding/MinionStar.png")}
        />
      </View>
      <View style={styles.nextContainer}>
        <ScrimButton
          onPress={() => navigation.navigate(routes.AUTHENTICATED)}
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
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: colors.primary,
    fontSize: 35,
    marginHorizontal: 35,
    fontFamily: "Moderat",
    fontWeight: "700",
    textAlign: "center",
  },
  imgView: {
    width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width,
    height: 350,
    resizeMode: "contain",
  },
});
export default SuccessScreen;
