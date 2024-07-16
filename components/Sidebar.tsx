import { clearMessages } from "@/redux/conversation/conversationSlice";
import { styles } from "@/styles/SidebarStyle";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import { useDispatch } from "react-redux";

export default function Sidebar({ setSidebarState }) {
    const dispatch = useDispatch();
    const handleNewChat = () => {
        dispatch(clearMessages());
        setSidebarState(false);
    }
  return (
    <Modal animationType="fade">
      <BlurView
        tint="dark"
        intensity={50}
        experimentalBlurMethod="dimezisBlurView"
        style={styles.sidebarContainer}
      >
        <View style={styles.sidebar}>
          <Pressable
          onPress={handleNewChat}
            android_ripple={{
              color: "#353535",
              borderless: false,
              radius: 100,
            }}
            // skipcq: JS-0417
            style={({ pressed }) => [
              styles.button,
              {
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Ionicons name="add-circle-outline" size={24} color="#aaa" />
            <Text style={styles.buttonLabel}>New chat</Text>
          </Pressable>
          {/* <Text style={styles.historyTitle}>Recent chats</Text> */}
          <ScrollView
            style={styles.recentChatsScrollview}
            contentContainerStyle={styles.recentChatsContainer}
          >
            <Text style={styles.noRecentChats}>No recent chats</Text>
          </ScrollView>
          <View style={styles.bottomButtons}>
            <Pressable
              android_ripple={{
                color: "#353535",
                borderless: false,
                radius: 100,
              }}
              // skipcq: JS-0417
              style={({ pressed }) => [
                styles.loginButton,
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <MaterialIcons name="login" size={24} color="#aaa" />
              <Text style={styles.buttonLabel}>Login to save chats</Text>
            </Pressable>
            <Pressable
              android_ripple={{
                color: "#353535",
                borderless: false,
                radius: 100,
              }}
              // skipcq: JS-0417
              style={({ pressed }) => [
                styles.settingsButton,
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Ionicons name="settings-sharp" size={20} color="#aaa" />
              <Text style={styles.buttonLabel}>Settings</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          onPress={() => setSidebarState(false)}
          android_ripple={{
            color: "#353535",
            borderless: false,
            radius: 26,
          }}
          // skipcq: JS-0417
          style={({ pressed }) => [
            styles.closeSidebarButton,
            {
              opacity: pressed ? 0.8 : 1,
            },
          ]}
        >
          <Ionicons name="close-circle-outline" size={30} color="#aaa" />
        </Pressable>
      </BlurView>
    </Modal>
  );
}
