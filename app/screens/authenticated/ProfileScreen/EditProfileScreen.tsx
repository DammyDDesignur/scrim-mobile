import React from "react";

import { Dimensions, View, StyleSheet, ScrollView } from "react-native";
import { Text, TextInput } from "react-native-paper";
import colors from "../../../config/colors";
import Constants from "expo-constants";
import ScrimButton from "../../../components/reusables/ScrimButton";
import routes from "../../../routes";

const { width, height } = Dimensions.get("window");

const EditProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.editContainer}>
        <Text style={styles.text}>Edit Info</Text>
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
          label="Email"
        />
      </View>
      <View style={styles.editContainer}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          theme={{ roundness: 15 }}
          style={styles.input}
          mode="outlined"
          label="New Password"
        />
        <TextInput
          theme={{ roundness: 15 }}
          style={styles.input}
          mode="outlined"
          label="Retype Password"
        />
      </View>

      <View style={styles.nextContainer}>
        <ScrimButton onPress={() => navigation.navigate(routes.PROFILE)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: "100%",
    backgroundColor: colors.light,
    padding: 30,
  },
  editContainer: {
    marginBottom: 50,
  },
  nextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: "Moderat",
    fontWeight: "700",
  },
  input: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
export default EditProfileScreen;
