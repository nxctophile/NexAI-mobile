import { useEffect, useRef, useCallback } from "react";
import { PromptComponentTypes } from "../../types/types";
import { Text, View } from "react-native";
import { styles } from "@/styles/conversation/PromptStyle";

/**
 * Renders a prompt component with copy functionality and automatic scrolling to the latest command.
 * @param {PromptComponentTypes} props Contains the command to display and interact with in the prompt.
 * @returns {JSX.Element} A JSX element representing the prompt interface.
 */

export default function Prompt({ command }: PromptComponentTypes) {
  const bottomRef = useRef(null);
  const copiedTextRef = useRef(null);

  // useEffect(() => {
  //   if (bottomRef.current)
  //     bottomRef.current.scrollIntoView({ behavior: "smooth" });
  // }, [command]);

  return (
    <View style={styles.promptContainer}>
      {/* <View style={styles.promptActions}>
        <View ref={copiedTextRef} style={styles.copiedPrompt}>
          Copied to clipboard
        </View>
        <Pressable
          onPress={() => handleCopy(command)}
          style={styles.prompt-action prompt-copy-Pressable"
        >
          <span style={styles.material-symbols-outlined}>content_copy</span>
        </Pressable>
        <Pressable onPress={edit} style={styles.prompt-action prompt-report-Pressable}>
          <span style={styles.material-symbols-outlined}>edit</span>
        </Pressable>
      </View> */}

      <Text style={styles.prompt}>{command}</Text>
      <View ref={bottomRef} style={styles.bottom} />
    </View>
  );
}
