import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import OnboardingSlide from "./app/screens/onboarding/slides";
import { useFonts } from "expo-font";

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
      <OnboardingSlide />
    </PaperProvider>
  );
}
