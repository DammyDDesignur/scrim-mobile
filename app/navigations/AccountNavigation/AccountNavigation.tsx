import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "../../routes";
import colors from "../../config/colors";
import { Text, View } from "react-native";
import AccountScreen from "../../screens/authenticated/AccountScreen";
import Account from "../../icons/Account";

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: (props) => (
            <HeaderComponent
              icon={<Account color={colors.primary} />}
              text="Accounts"
            />
          ),
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: colors.white },
          headerBackVisible: false,
        }}
        name={routes.ACCOUNT}
        component={AccountScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigation;

const HeaderComponent = ({ icon, text }) => (
  <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
    <View>
      {icon}
      <Text style={{ color: "transparent" }}>Scrim</Text>
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
