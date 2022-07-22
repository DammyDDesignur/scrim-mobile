import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "../../routes";
import TransferScreen from "../../screens/authenticated/TransferScreen";
import colors from "../../config/colors";
import Transfer from "../../icons/Transfer";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const TransferNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: (props) => (
            <HeaderComponent Icon={Transfer} text="Transfer" />
          ),
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: colors.white },
          headerBackVisible: false,
        }}
        name={routes.TRANSFER}
        component={TransferScreen}
      />
    </Stack.Navigator>
  );
};

export default TransferNavigation;

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
