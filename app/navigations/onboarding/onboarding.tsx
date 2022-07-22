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
import { View } from "react-native";
import Button from "../../components/reusables/Button";
import PinSetup2 from "../../screens/onboarding/authentication/signin/PinSetup2";

const Stack = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        title: "",
        headerShown: true,
        headerStyle: { backgroundColor: colors.light },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitleAlign: "left",
        headerTitle: ({ children, tintColor }) => (
          <Button
            onPress={() => navigation.goBack()}
            icon="arrow-left"
            mode="text"
            iconSize={25}
            iconColor={colors.black}
            style={{
              backgroundColor: colors.white,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
          />
        ),
      })}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.ONBOARDING_INDEX}
        component={OnboardingSlides}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          animation: "slide_from_right",
          headerTitle: ({ children, tintColor }) => (
            <Button
              onPress={() => navigation.goBack()}
              icon="arrow-left"
              mode="text"
              iconSize={25}
              iconColor={colors.black}
              style={{
                backgroundColor: colors.white,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />
          ),
        })}
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
        options={{ animation: "slide_from_right", headerTitle: null }}
        name={routes.AUTHENTICATION_PINSETUP}
        component={PinSetup}
      />
      <Stack.Screen
        options={{ animation: "slide_from_right", headerTitle: null }}
        name={routes.AUTHENTICATION_PINSETUP2}
        component={PinSetup2}
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

// const CustomHeader = () => (
//  return (<></>)
// )
