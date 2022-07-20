import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingSlides from "../../screens/onboarding/slides";
import Signup from "../../screens/onboarding/authentication/signup";
import routes from "../../routes";
import colors from "../../config/colors";
import EmailVerification from "../../screens/onboarding/authentication/signup/EmailVerification";
import SignIn from "../../screens/onboarding/authentication/signin";
import PinSetup from "../../screens/onboarding/authentication/signin/PinSetup";
import SuccessScreen from "../../screens/onboarding/authentication/signin/SuccessScreen";

const Stack = createNativeStackNavigator();

const Onboarding = () => {
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
        name={routes.ONBOARDING_INDEX}
        component={OnboardingSlides}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.AUTHENTICATION_SIGNUP}
        component={Signup}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.AUTHENTICATION_EMAILVERIFICATION}
        component={EmailVerification}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.AUTHENTICATION_SIGNIN}
        component={SignIn}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.AUTHENTICATION_PINSETUP}
        component={PinSetup}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name={routes.AUTHENTICATION_SUCESSSCREEN}
        component={SuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
