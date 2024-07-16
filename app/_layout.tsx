import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Poppins_400Regular,
  Poppins_200ExtraLight,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { styles } from "@/styles/global";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_200ExtraLight,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.mainContainer}>
        <Slot />
      </SafeAreaView>
    </Provider>
  );
}
