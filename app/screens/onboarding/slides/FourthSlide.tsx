import React from "react";
import { Dimensions, View, StyleSheet, Image, Text } from "react-native";

import colors from "../../../config/colors";

import { useNavigation } from "@react-navigation/native";
import routes from "../../../routes";
import Button from "../../../components/reusables/Button";

type RouteTypes = {
  navigate: (value: string) => void;
};

const { width, height } = Dimensions.get("window");
const FourthSlide = () => {
  const { navigate } = useNavigation<RouteTypes>();
  return (
    <View style={styles.container}>
      <View style={styles.minContainer}>
        <Text style={[styles.text, { color: colors.primary, marginTop: 20 }]}>
          Welcome
        </Text>
        <Text style={styles.text}>Start paying with social</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../../assets/onboarding/Minion.png")}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => navigate(routes.AUTHENTICATION_SIGNUP)}
            style={styles.btn}
            mode="outlined"
            text="Create an account"
          />

          <Button
            onPress={() => navigate(routes.AUTHENTICATION_SIGNIN)}
            style={styles.btn}
            mode="contained"
            text="Sign In"
          />
        </View>
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
    justifyContent: "center",
  },
  minContainer: {
    height: "80%",
    width,
  },
  text: {
    fontSize: 40,
    marginHorizontal: 42,
    fontFamily: "Moderat-Bold",
  },
  imgView: {
    width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },
  img: {
    width: "60%",
    height: "80%",
    resizeMode: "contain",
  },
  btnContainer: {
    paddingHorizontal: 30,
    alignItems: "center",
  },
  btn: {
    marginVertical: 10,
    width: "70%",
  },
});
export default FourthSlide;
