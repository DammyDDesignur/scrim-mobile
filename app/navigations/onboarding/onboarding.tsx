import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../../screens/onboarding/slides";
import Signup from "../../screens/onboarding/authentication/signup";
import routes from "../../routes";
import colors from "../../config/colors";
import EmailVerification from "../../screens/onboarding/authentication/signup/EmailVerification";

const Stack = createNativeStackNavigator();

const onboarding = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        headerTitleAlign: "center",
        headerShown: true,
        headerStyle: { backgroundColor: colors.light },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.ONBOARDING}
        component={Onboarding}
      />
      <Stack.Screen name={routes.AUTHENTICATION_SIGNUP} component={Signup} />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.AUTHENTICATION_EMAILVERIFICATION}
        component={EmailVerification}
      />
    </Stack.Navigator>
  );
};

export default onboarding;
