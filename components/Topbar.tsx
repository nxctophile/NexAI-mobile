import { styles } from "@/styles/TopbarStyle";
import { Dimensions, Pressable, Text, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {BlurView} from "expo-blur";
const { width: screenWidth } = Dimensions.get("window");

export default function Topbar({setSidebarState}) {
  return (
    <View style={[styles.topbarContainer, { width: screenWidth }]}>
      <BlurView tint="dark" intensity={55} experimentalBlurMethod="dimezisBlurView"  style={styles.topbar}>
      <View style={styles.menuButton}>
        <Pressable
          onPress={() => setSidebarState(true)}
          android_ripple={{
            color: "#444",
            borderless: false,
            radius: 40,
          }}
          // skipcq: JS-0417
          style={({ pressed }) => [
            styles.menu,
            {
              opacity: pressed ? 0.6 : 1,
            },
          ]}
        >
          <Ionicons
            name="menu"
            size={30}
            color="#aaa"
          />
        </Pressable>
      </View>
      <Text style={styles.appName}>NexAI</Text>
      <View style={styles.menuButton}>
        <Pressable
          android_ripple={{
            color: "#444",
            borderless: false,
            radius: 40,
          }}
          // skipcq: JS-0417
          style={({ pressed }) => [
            styles.menu,
            {
              opacity: pressed ? 0.6 : 1,
            },
          ]}
        >
          <MaterialIcons name="account-circle" size={30} color="#aaa" />
        </Pressable>
      </View>
      </BlurView>
    </View>
  );
}
