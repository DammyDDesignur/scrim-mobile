import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "../../routes";
import Onboarding from "../onboarding";
import Authenticated from "../authenticated";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ animation: "slide_from_right", headerShown: false }}
        name={routes.ONBOARDING}
        component={Onboarding}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right", headerShown: false }}
        name={routes.AUTHENTICATED}
        component={Authenticated}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

//   screenOptions={{
//     title: "",
//     headerTitleAlign: "center",
//     headerShown: true,
//     headerStyle: { backgroundColor: colors.light },
//     headerShadowVisible: false,
//   }}
