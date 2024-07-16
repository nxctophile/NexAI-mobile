import { RootState } from "@/redux/store";
import { styles } from "@/styles/ConversationContainerStyles";
import { ConversationType } from "@/types/types";
import { Dimensions, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "./HeroSection";
import Prompt from "./conversation/Prompt";
import Response from "./conversation/Response";
import { edit } from "@/lib/Actions";
import { useEffect, useRef } from "react";
import ResponseLoading from "./loading/ResponseLoading";
const { height: screenHeight } = Dimensions.get("window");

export default function ConversationContainer({loading} : {loading: boolean}) {

  const scrollViewRef = useRef<ScrollView>(null);

  const conversation: ConversationType[] = useSelector(
    (state: RootState) => state.conversation.value
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [conversation]);

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.conversationContainerScrollView}
      contentContainerStyle={styles.conversationContainer}
    >
      <View style={styles.mainSection}>
        {conversation.length === 0 && <HeroSection />}
        
        {conversation.map((message, index) => {
          return message.isPrompt ? (
            <Prompt
              key={index}
              command={message.message}
              edit={edit(inputRef, message.message)}
            />
          ) : (
            <Response
              key={index}
              response={message.message}
              isRegenerated={false}
            />
          );
        })}

        {(conversation.length > 0 && loading) && <ResponseLoading />}
      </View>
    </ScrollView>
  );
}
