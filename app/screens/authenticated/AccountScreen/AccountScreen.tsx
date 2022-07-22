import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AccountComponent from "../../../components/reusables/AccountComponent";
import colors from "../../../config/colors";

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import Button from "../../../components/reusables/Button";
import ScrimButton from "../../../components/reusables/ScrimButton";
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
  const [index, setIndex] = React.useState<number>(1);
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => ["25%", "70%"], []);
  const handleSheetChanges = React.useCallback((index: number) => {
    setIndex(index);
  }, []);

  const renderBackdrop = React.useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        onPress={() => bottomSheetRef.current.close()}
        pressBehavior="collapse"
        appearsOnIndex={1}
      />
    ),
    []
  );

  React.useEffect(() => {
    if (bottomSheetRef.current) bottomSheetRef.current.close();

    return bottomSheetRef.current.close();
  }, []);
  return (
    <>
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
              onDelete={() => bottomSheetRef.current.expand()}
              onAdd={() => alert("adding")}
              key={media.title}
              title={media.title}
              logo={media.logo}
              username={media.username}
            />
          );
        })}
      </View>
      <BottomSheet
        enablePanDownToClose={true}
        enableOverDrag={true}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        ref={bottomSheetRef}
        index={index}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetScrollView>
          <View
            style={{
              padding: 20,
              paddingHorizontal: 30,
              height: "100%",
            }}
          >
            <View style={styles.imgView}>
              <Image
                style={{ width: 150, height: 150 }}
                source={require("../../../assets/profile/gear.png")}
              />
            </View>
            <Text
              style={[
                styles.gText,
                {
                  textAlign: "center",
                  fontFamily: "Moderat-Bold",
                  fontSize: 25,
                  marginBottom: 20,
                },
              ]}
            >
              Kindly Confirm Action
            </Text>
            <Text style={[styles.gText]}>
              Are you sure you want to remove your Twitter Account from Scrim?
            </Text>

            <View style={styles.action}>
              <Button
                text="Cancel"
                mode="text"
                color="error"
                contentStyle={{ width: "auto", fontSize: 15 }}
                onPress={() => bottomSheetRef.current.close()}
              />
              <ScrimButton />
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
    padding: 20,
  },
  imgView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  gText: {
    fontFamily: "Moderat",
    fontSize: 15,
    color: colors.black,
    textAlign: "center",
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
