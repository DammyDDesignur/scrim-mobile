import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import OnboardingSlide from "./app/screens/onboarding/slides";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./app/navigations/onboarding";
import Authenticated from "./app/navigations/authenticated";
import AppNavigation from "./app/navigations/app";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: "#7000FF",
    secondary: "#16032E",
    tertiary: "#a1b2c3",
    warning: "#FCDC4D",
    error: "#EF2D56",
    success: "#2FBF71",
  },
};

export default function App() {
  const [loaded] = useFonts({
    Moderat: require("./app/assets/fonts/Moderat-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* <Onboarding /> */}
        <Authenticated />
        {/* <AppNavigation /> */}
      </NavigationContainer>
    </PaperProvider>
  );
}
