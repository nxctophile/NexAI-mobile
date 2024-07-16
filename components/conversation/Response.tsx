import nex from "@/assets/images/nex-white-stroke-100.png";
import RhythmieComponent from "../music/RhythmieComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ResponseComponentTypes } from "../../types/types";
import Markdown from "react-native-markdown-display";
import { View, Image, Text, Pressable } from "react-native";
import { styles } from "@/styles/conversation/ResponseStyle";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { useState } from "react";
import { removeMarkdownFormatting } from "@/lib/scripts";
import { franc } from "franc";
import { iso6393 } from "iso-639-3";

/**
 * Renders the response component with various interactive elements including copy to clipboard functionality, dynamic markdown rendering, and optional integration with the RhythmieComponent based on the response content.
 * @param {ResponseComponentTypes} props - The properties passed to the Response component, including the response to be displayed.
 * @returns The Response component populated with the provided response content, interactive elements, and potentially the RhythmieComponent.
 */

export default function Response({
  response,
  isRegenerated,
}: ResponseComponentTypes) {
  /**
   * Equality function for useSelector to avoid unnecessary re-renders.
   * @returns {boolean} Always returns true indicating equality.
   */
  const equalityFunction = () => {
    return true;
  };

  const song = useSelector(
    (state: RootState) => state.songInfo.value,
    equalityFunction
  );

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechActiveStyles, setSpeechActiveStyles] = useState({ backgroundColor: "transparent" });

  const speak = () => {
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
      setSpeechActiveStyles({ backgroundColor: "transparent" });
    } else {
      const langCode = franc(response);
      const langInfo = iso6393.find(l => l.iso6393 === langCode);
      if (langInfo) {
        const ietfLangTag = langInfo.iso6391 ? langInfo.iso6391 : langInfo.iso6393;
        Speech.speak(removeMarkdownFormatting(response), {language: ietfLangTag});
      } else {
        Speech.speak(removeMarkdownFormatting(response));
      }
      setIsSpeaking(true);
      setSpeechActiveStyles({ backgroundColor: "#333" });
    }
  };

  const markdownStyles = {
    body: {
      color: "#eee",
      fontFamily: "Poppins_400Regular",
    },
    code_block: {
      color: "#eee",
      backgroundColor: "#0f0f0f",
    },
    code_inline: {
      color: "#eee",
      backgroundColor: "#0f0f0f",
    },
    fence: {
      color: "#eee",
      backgroundColor: "#0f0f0f",
    },
    strong: {
      fontSize: 18,
      fontFamily: "Poppins_600SemiBold",
      fontWeight: "normal",
    },
  };

  return (
    <View style={styles.response}>
      <View style={styles.nexaiResponse}>
        <View style={styles.nexai}>
          <Image style={styles.nexaiLogo} source={nex} />
          <Text style={styles.nexaiText}>
            {isRegenerated && <> Re: </>}
            NexAI
          </Text>
        </View>
        <Pressable onPress={speak} style={[styles.speechButton, speechActiveStyles]}>
          <MaterialIcons name="volume-up" size={20} color="#eee" />
        </Pressable>
      </View>

      {response && (
        <>
          <Markdown style={markdownStyles}>{response}</Markdown>

          {song && response?.includes("Rhythmie") && (
            <RhythmieComponent song={song} />
          )}
        </>
      )}

      <View style={styles.bottom} />
    </View>
  );
}
