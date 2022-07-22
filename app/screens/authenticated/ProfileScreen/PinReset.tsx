import React from "react";

import { Dimensions, View, StyleSheet, ScrollView } from "react-native";
import { Text, TextInput } from "react-native-paper";
import colors from "../../../config/colors";
import ScrimButton from "../../../components/reusables/ScrimButton";
import routes from "../../../routes";
import Button from "../../../components/reusables/Button";

const { width, height } = Dimensions.get("window");

const PinReset = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.editContainer}>
        <Text style={styles.text}>Kindly input new pin</Text>
        <TextInput
          theme={{ roundness: 15 }}
          style={styles.input}
          mode="outlined"
          label="Old Pin"
        />
        <TextInput
          theme={{ roundness: 15 }}
          style={styles.input}
          mode="outlined"
          label="New Pin"
        />
        <TextInput
          theme={{ roundness: 15 }}
          style={styles.input}
          mode="outlined"
          label="Retype Pin"
        />
      </View>

      <View style={styles.nextContainer}>
        <Button
          color="error"
          mode="outlined"
          text="Cancel"
          style={{ paddingHorizontal: 25 }}
          onPress={() => navigation.navigate(routes.PROFILE)}
        />
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
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: "Moderat-Bold",
    textAlign: "center",
  },
  input: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
export default PinReset;
