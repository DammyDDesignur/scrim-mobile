import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";

import SafeScreen from "../../../components/reusables/SafeScreen";
import colors from "../../../config/colors";

import { LinearGradient, LinearGradientPoint } from "expo-linear-gradient";

import { Button, Avatar } from "react-native-paper";

import ScrimButton from "../../../components/reusables/ScrimButton";
import ViewWithPng from "../../../components/reusables/ViewWithPng";
import Scrimmmm from "../../../components/reusables/Scrimmmm";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <SafeScreen style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.headContainer}>
          <View>
            <Text style={styles.text}>Hey Nagamoto 👽</Text>
            <Text style={styles.subText}>
              Who would you try to scrim at today {"🤲🏿"}
            </Text>
          </View>
          <Avatar.Icon
            size={40}
            style={{ borderRadius: 15 }}
            icon="white-balance-sunny"
          />
        </View>
        <View style={styles.cardContainer}>
          <ImageBackground
            resizeMode="stretch"
            style={styles.card}
            source={require("../../../assets/profile/Card.png")}
          >
            <ViewWithPng style={{ backgroundColor: colors.tertiary }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../../assets/profile/icon-small.png")}
              />
              <Text style={styles.WithPngText}>Scrim Token</Text>
            </ViewWithPng>

            <Text style={styles.balance}>3,180</Text>
            <ViewWithPng style={{ backgroundColor: colors.tertiary }}>
              <Text style={styles.WithPngText}> = N60,000/$100</Text>
            </ViewWithPng>
          </ImageBackground>
        </View>
        <Scrimmmm />
        <View style={styles.action}>
          <Text style={[styles.text, { color: colors.black, margin: 10 }]}>
            Quick Actions
          </Text>
          <ScrollView decelerationRate="fast" horizontal style={{ width }}>
            <Card1 />
            <Card2 />
            <Card3 />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  action: {
    // padding: 10,
  },

  balance: {
    color: colors.warning,
    fontSize: 60,
    fontFamily: "Moderat",
  },
  container: {
    backgroundColor: colors.light,
    height: "100%",
  },
  headContainer: {
    width,
    padding: 10,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  text: {
    color: colors.primary,
    fontSize: 25,
    fontFamily: "Moderat",
    fontWeight: "700",
  },
  subText: {
    fontFamily: "Moderat",
    fontSize: 15,
    marginTop: 15,
  },

  WithPngText: {
    color: colors.white,
    marginHorizontal: 5,
    fontSize: 15,
    fontFamily: "Moderat",
  },
  cardContainer: {
    padding: 5,
  },
  card: {
    height: 250,
    borderRadius: 30,
    overflow: "hidden",
    padding: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default HomeScreen;

const Card1 = () => {
  return (
    <LinearGradient
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      colors={["#623CEA", "#7000FF", "#09CAEE"]}
      style={style.container}
    >
      <Text style={style.text}>Tip your favorite creator today</Text>
      <ScrimButton
        mode="white"
        color={colors.primary}
        onPress={() => console.log("hi")}
        style={{ width: "70%", alignSelf: "flex-end" }}
      />
    </LinearGradient>
  );
};
const Card2 = () => {
  return (
    <LinearGradient
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      colors={["#FCDC4D", "#2FBF71", "#623CEA"]}
      style={style.container}
    >
      <Text style={style.text}>Make a friend smile today</Text>
      <ScrimButton
        mode="white"
        color={colors.primary}
        onPress={() => console.log("hi")}
        style={{ width: "70%", alignSelf: "flex-end" }}
      />
    </LinearGradient>
  );
};
const Card3 = () => {
  return (
    <LinearGradient
      start={[1.0, 0.0]}
      end={[0.0, 1.0]}
      colors={["#68B684", "#791EFA", "#EF2D56"]}
      style={style.container}
    >
      <Text style={style.text}>Surprise your favorite sibling</Text>
      <ScrimButton
        mode="white"
        color={colors.primary}
        onPress={() => console.log("hi")}
        style={{ width: "70%", alignSelf: "flex-end" }}
      />
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    height: 250,
    width: 250,
    marginHorizontal: 10,
    borderRadius: 30,
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    color: colors.white,
    fontFamily: "Moderat",
    fontSize: 30,
    width: "70%",
  },
});
