import React from "react";
import { Dimensions, View, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import colors from "../../../config/colors";

import { useNavigation } from "@react-navigation/native";
import routes from "../../../routes";

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
          >
            Create an account
          </Button>
          <Button style={styles.btn} mode="contained">
            Sign In
          </Button>
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
    fontFamily: "Moderat",
    fontWeight: "700",
  },
  imgView: {
    width,
    // flex: 1,
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
  },
  btn: {
    marginVertical: 10,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 100,
  },
});
export default FourthSlide;
