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
import TransferScreen from "../../screens/authenticated/TransferScreen";
import Transfer from "../../icons/Transfer";

import { Badge } from "react-native-paper";

import TransferNavigation from "../TransferNavigation";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const Tab = createBottomTabNavigator();

const Authenticated = () => {
  return (
    <Tab.Navigator
      // activeColor={colors.primary}
      // inactiveColor={colors.black}
      // barStyle={{ backgroundColor: colors.light }}
      // screenOptions={{
      //   tabBarColor: colors.light,
      // }}
      // tabBar={{tab}}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <View>
                <Badge
                  size={12}
                  style={{ backgroundColor: colors.primary }}
                ></Badge>
              </View>
            ) : (
              <Text>Home</Text>
            ),
          tabBarIcon: ({ color, focused }) => (
            <Home color={focused ? colors.primary : colors.black} />
          ),
        }}
        name={routes.AUTHENTICATED_HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <View>
                <Badge
                  size={12}
                  style={{ backgroundColor: colors.primary }}
                ></Badge>
              </View>
            ) : (
              <Text>Transfer</Text>
            ),
          tabBarIcon: ({ color, focused }) => (
            <Transfer color={focused ? colors.primary : colors.black} />
          ),
        }}
        name={routes.AUTHENTICATED_TRANSFER}
        component={TransferNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <View>
                <Badge
                  size={12}
                  style={{ backgroundColor: colors.primary }}
                ></Badge>
              </View>
            ) : (
              <Text>Account</Text>
            ),
          tabBarIcon: ({ color, focused }) => (
            <Account color={focused ? colors.primary : colors.black} />
          ),
        }}
        name={routes.AUTHENTICATED_ACCOUNT}
        component={AccountScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <View>
                <Badge
                  size={12}
                  style={{ backgroundColor: colors.primary }}
                ></Badge>
              </View>
            ) : (
              <Text>Profile</Text>
            ),
          tabBarIcon: ({ color, focused }) => (
            <Profile color={focused ? colors.primary : colors.black} />
          ),
        }}
        name={routes.AUTHENTICATED_PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default Authenticated;

const TabButton = ({ onPress, icon, color, focused, label }) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // borderWidth: 1,
      // borderTopWidth: 5,
      // width: "100%",
      //   backgroundColor: "white",
    },
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View>{icon}</View>
        {focused ? (
          <Badge style={{ backgroundColor: colors.primary }} size={10}></Badge>
        ) : (
          <Text>{label}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
