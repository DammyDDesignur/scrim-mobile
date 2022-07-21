import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/authenticated/HomeScreen";
import routes from "../../routes";
import Home from "../../icons/Home";
import colors from "../../config/colors";
import ProfileScreen from "../../screens/authenticated/ProfileScreen";
import Profile from "../../icons/Profile";
import Account from "../../icons/Account";
import AccountScreen from "../../screens/authenticated/AccountScreen";
import Transfer from "../../icons/Transfer";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Badge } from "react-native-paper";

import TransferNavigation from "../TransferNavigation";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import ProfileNavigation from "../ProfileNavigation";
import AccountNavigation from "../AccountNavigation";

const Tab = createBottomTabNavigator();

const Authenticated = () => {
  const route = useRoute();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarLabel: ({ focused }) => (focused ? null : <Text>Home</Text>),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} Icon={Home} />
          ),
        })}
        name={routes.AUTHENTICATED_HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarLabel: ({ focused }) =>
            focused ? null : <Text>Transfer</Text>,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} Icon={Transfer} />
          ),
        })}
        name={routes.AUTHENTICATED_TRANSFER}
        component={TransferNavigation}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarLabel: ({ focused }) => (focused ? null : <Text>Account</Text>),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} Icon={Account} />
          ),
        })}
        name={routes.AUTHENTICATED_ACCOUNT}
        component={AccountNavigation}
      />

      <Tab.Screen
        options={({ navigation }) => ({
          tabBarLabel: ({ focused }) => (focused ? null : <Text>Profile</Text>),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} Icon={Profile} />
          ),
        })}
        name={routes.AUTHENTICATED_PROFILE}
        component={ProfileNavigation}
      />
    </Tab.Navigator>
  );
};

export default Authenticated;

const TabBarIcon = ({ Icon, focused }) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderTopWidth: 5,
      borderColor: focused ? colors.primary : "transparent",
      backgroundColor: focused ? colors.light : "transparent",
      height: "100%",
      marginTop: -2,
      width: "100%",
    },
    iconStyle: {},
  });
  return (
    <View style={styles.container}>
      <Icon color={focused ? colors.primary : colors.black} />
    </View>
  );
};
