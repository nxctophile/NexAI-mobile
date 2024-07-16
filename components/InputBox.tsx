import { styles } from "@/styles/TextboxStyle";
import { Dimensions, Pressable, TextInput, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import sendRequest from "@/lib/Request";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const { width: screenWidth } = Dimensions.get("window");

export default function Textbox({ setLoading }) {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const conversation = useSelector(
    (state: RootState) => state.conversation.value
  );

  async function handleSend() {
    // Send the user's message to the server
    // and handle the response
    if (userInput.length !== 0) {
      setLoading(true);
      setUserInput("");
      await sendRequest(userInput, dispatch, conversation);
      setLoading(false);
    }
  }
  return (
    <View style={[styles.textboxContainer, { width: screenWidth }]}>
      <View style={styles.addButtonContainer}>
        <Pressable
          android_ripple={{
            color: "#444",
            borderless: false,
            radius: 22,
          }}
          // skipcq: JS-0417
          style={({ pressed }) => [
            styles.addButton,
            {
              opacity: pressed ? 0.6 : 1,
            },
          ]}
        >
          <Ionicons name="add-circle-outline" size={26} color="#888" />
        </Pressable>
      </View>
      <TextInput
        value={userInput}
        onChangeText={setUserInput}
        style={styles.textbox}
        placeholderTextColor="#888"
        placeholder="Type a message..."
      />
      {userInput.length !== 0 && (
        <View style={styles.menuButton}>
          <Pressable
            onPress={handleSend}
            android_ripple={{
              color: "#444",
              borderless: false,
              radius: 22,
            }}
            // skipcq: JS-0417
            style={({ pressed }) => [
              styles.sendButton,
              {
                opacity: pressed ? 0.6 : 1,
              },
            ]}
          >
            <Ionicons name="send" size={20} color="#888" />
          </Pressable>
        </View>
      )}

      {userInput.length === 0 && (
        <View style={styles.micButtonContainer}>
          <Pressable
            android_ripple={{
              color: "#444",
              borderless: false,
              radius: 22,
            }}
            // skipcq: JS-0417
            style={({ pressed }) => [
              styles.micButton,
              {
                opacity: pressed ? 0.6 : 1,
              },
            ]}
          >
            <MaterialIcons name="mic" size={26} color="#888" />
          </Pressable>
        </View>
      )}
    </View>
  );
}
