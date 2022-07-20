import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../../screens/authenticated/HomeScreen";
import routes from "../../routes";
import Home from "../../icons/Home";
import colors from "../../config/colors";
import ProfileScreen from "../../screens/authenticated/ProfileScreen";
import Profile from "../../icons/Profile";
import Account from "../../icons/Account";
import AccountScreen from "../../screens/authenticated/AccountScreen";
import TransferScreen from "../../screens/authenticated/TransferScreen";
import Transfer from "../../icons/Transfer";

import TransferNavigation from "../TransferNavigation";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const Tab = createMaterialBottomTabNavigator();

const Authenticated = () => {
  return (
    <Tab.Navigator
      activeColor={colors.primary}
      inactiveColor={colors.black}
      barStyle={{ backgroundColor: colors.light }}
      screenOptions={{
        tabBarColor: colors.light,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
        name={routes.AUTHENTICATED_HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: "Transfer",
          tabBarLabel: "Transfer",
          tabBarIcon: ({ color }) => <Transfer color={color} />,
        }}
        name={routes.AUTHENTICATED_TRANSFER}
        component={TransferNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => <Account color={color} />,
        }}
        name={routes.AUTHENTICATED_ACCOUNT}
        component={AccountScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <Profile color={color} />,
        }}
        name={routes.AUTHENTICATED_PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default Authenticated;

const TabButton = ({ onPress, children, color, focused }) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderTopWidth: 5,
      width: "100%",
      //   backgroundColor: "white",
    },
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>{children}</View>
    </TouchableOpacity>
  );
};
