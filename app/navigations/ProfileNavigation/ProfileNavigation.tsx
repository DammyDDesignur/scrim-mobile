import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "../../routes";
import colors from "../../config/colors";
import Profile from "../../icons/Profile";
import { Text, View } from "react-native";
import ProfileScreen from "../../screens/authenticated/ProfileScreen";
import EditProfileScreen from "../../screens/authenticated/ProfileScreen/EditProfileScreen";
import PinReset from "../../screens/authenticated/ProfileScreen/PinReset";

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: (props) => (
            <HeaderComponent Icon={Profile} text="Profile" />
          ),
          headerTitleAlign: "center",
          headerBackVisible: false,
        }}
        name={routes.PROFILE}
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: "Profile",
          headerStyle: { backgroundColor: colors.light },
        }}
        name={routes.PROFILE_EDIT}
        component={EditProfileScreen}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitle: "Pin Reset",
          headerStyle: { backgroundColor: colors.light },
        }}
        name={routes.PROFILE_PINRESET}
        component={PinReset}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;

const HeaderComponent = ({ Icon, text }) => (
  <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
    <View style={{ marginRight: 20 }}>
      <Icon color={colors.primary} />
    </View>
    <Text
      style={{
        fontSize: 20,
        color: colors.primary,
        fontFamily: "Moderat",
      }}
    >
      {text}
    </Text>
  </View>
);
