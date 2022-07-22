import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/authenticated/HomeScreen";
import routes from "../../routes";
import Home from "../../icons/Home";
import colors from "../../config/colors";
import Profile from "../../icons/Profile";
import Account from "../../icons/Account";
import Transfer from "../../icons/Transfer";

import { useRoute } from "@react-navigation/native";

import TransferNavigation from "../TransferNavigation";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import ProfileNavigation from "../ProfileNavigation";
import AccountNavigation from "../AccountNavigation";

const Tab = createBottomTabNavigator();

const Authenticated = () => {
  const [current, setCurrent] = React.useState<boolean>(true);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: current ? colors.primary : colors.white,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              navigation={navigation}
              current={current}
              setCurrent={setCurrent}
              focused={focused}
              Icon={Home}
            />
          ),
        })}
        name={routes.AUTHENTICATED_HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              navigation={navigation}
              current={current}
              setCurrent={setCurrent}
              focused={focused}
              Icon={Transfer}
            />
          ),
        })}
        name={routes.AUTHENTICATED_TRANSFER}
        component={TransferNavigation}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              navigation={navigation}
              current={current}
              setCurrent={setCurrent}
              focused={focused}
              Icon={Account}
            />
          ),
        })}
        name={routes.AUTHENTICATED_ACCOUNT}
        component={AccountNavigation}
      />

      <Tab.Screen
        options={({ navigation }) => ({
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              navigation={navigation}
              current={current}
              setCurrent={setCurrent}
              focused={focused}
              Icon={Profile}
            />
          ),
        })}
        name={routes.AUTHENTICATED_PROFILE}
        component={ProfileNavigation}
      />
    </Tab.Navigator>
  );
};

export default Authenticated;

const TabBarIcon = ({
  Icon,
  focused,
  current = false,
  setCurrent,
  navigation,
}) => {
  const route = useRoute();
  const handleTab = () => {
    if (route.name === routes.AUTHENTICATED_HOME) {
      navigation.navigate(route.name);
      setCurrent(true);
    } else {
      navigation.navigate(route.name);
      setCurrent(false);
    }
  };
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderTopWidth: 5,
      borderColor: current
        ? "transparent"
        : focused
        ? colors.primary
        : "transparent",
      backgroundColor: current
        ? "transparent"
        : focused
        ? colors.light
        : "transparent",
      height: "100%",
      marginTop: -2,
      width: "80%",
    },
    iconStyle: {},
  });
  return (
    <TouchableWithoutFeedback onPress={handleTab}>
      <View style={styles.container}>
        <Icon
          color={
            current ? colors.white : focused ? colors.primary : colors.black
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
