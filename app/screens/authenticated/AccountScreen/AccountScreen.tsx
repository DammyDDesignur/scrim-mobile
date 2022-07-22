import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AccountComponent from "../../../components/reusables/AccountComponent";
import colors from "../../../config/colors";
const medias = [
  {
    logo: require("../../../assets/profile/twitter.png"),
    title: "Twitter",
    username: "@UsmanGurowa",
  },
  {
    logo: require("../../../assets/profile/instagram.png"),
    title: "Instagram",
    username: "@UsmanGurowa",
  },
  {
    logo: require("../../../assets/profile/clubhouse.png"),
    title: "Clubhouse",
    username: "@UsmanGurowa",
  },
  {
    logo: require("../../../assets/profile/snapchat.png"),
    title: "Snapchat",
    username: "@UsmanGurowa",
  },
  {
    logo: require("../../../assets/profile/tiktok.png"),
    title: "TikTok",
    username: "",
  },
];

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.gText, { textAlign: "center" }]}>
        Here you can be able to add or remove social media accounts on Scrim.
      </Text>
      <View style={styles.headerContainer}>
        <Text style={[styles.gText, { fontSize: 15 }]}>Platform</Text>
        <Text style={[styles.gText, { fontSize: 15 }]}>Username</Text>
        <Text style={[styles.gText, { fontSize: 15 }]}>Action</Text>
      </View>
      {medias.map((media) => {
        return (
          <AccountComponent
            key={media.title}
            title={media.title}
            logo={media.logo}
            username={media.username}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    padding: 20,
  },
  gText: {
    fontFamily: "Moderat",
    fontSize: 15,
    color: colors.black,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
});
export default AccountScreen;
