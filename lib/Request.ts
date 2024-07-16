import {
  addMessage,
  setMessageAtIndex,
} from "@/redux/conversation/conversationSlice";
import { setSong } from "@/redux/music/songInfoSlice";
import { clearSuggestion } from "@/redux/suggestions/suggestionStateSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { ConversationType } from "@/types/types";

export default async function sendRequest(
  prompt: string,
  dispatch: Dispatch,
  conversation: ConversationType[],
  index: number | undefined = undefined
) {
    const generateResponse = async (prompt: string) => {

      const generatedResponse = await fetch(
        `https://nexai-server.vercel.app/api?prompt=${prompt}`
      );

      if (generatedResponse.ok) return await generatedResponse.json();
      else return false;
    };

    dispatch(clearSuggestion());

    if (prompt.length > 0) {
      if (
        prompt.toLowerCase().includes("play") &&
        prompt.toLowerCase().includes("rhythmie")
      ) {
        dispatch(
          addMessage({
            isRegenerated: false,
            isPrompt: true,
            message: prompt,
          })
        );

        const filteredQuery = prompt
          .toLowerCase()
          .split("play")[1]
          .split("on rhythmie")[0]
          .trim();

        const generatedResults = await fetch(
          `https://rhythmie-api.vercel.app/api/search?query=${filteredQuery}`
        );
        const parsedGeneratedResults = await generatedResults.json();

        const currentSong = parsedGeneratedResults.data.songs.results[0];

        const generatedResponse = await fetch(
          `https://rhythmie-api.vercel.app/api/songs/${currentSong.id}`
        );
        const parsedGeneratedResponse = await generatedResponse.json();

        dispatch(setSong(parsedGeneratedResponse));
        dispatch(
          addMessage({
            isRegenerated: false,
            isPrompt: false,
            message: `Playing ${currentSong.title} by ${currentSong.primaryArtists} on Rhythmie`,
          })
        );

        if (!generatedResults.ok || !generatedResponse.ok)
          dispatch(
            addMessage({
              isRegenerated: false,
              isPrompt: false,
              message:
                "Sorry, I was unable to generate a response. Please try again.",
            })
          );
      } else {
        dispatch(
          addMessage({
            isRegenerated: false,
            isPrompt: true,
            message: prompt,
          })
        );

        if (index) {
          const response = await generateResponse(
            conversation[index - 1].message
          );

          if (response) {
            dispatch(
              setMessageAtIndex({
                isRegenerated: true,
                isPrompt: false,
                message: response.response,
                index,
              })
            );
          } else {
            dispatch(
              addMessage({
                isRegenerated: false,
                isPrompt: false,
                message:
                  "Sorry, I was unable to generate a response. Please try again.",
              })
            );
          }
        } else {
          const response = await generateResponse(prompt);
          if (response) {
            dispatch(
              addMessage({
                isRegenerated: false,
                isPrompt: false,
                message: response.response,
              })
            );
          } else {
            dispatch(
              addMessage({
                isRegenerated: false,
                isPrompt: false,
                message:
                  "Sorry, I was unable to generate a response. Please try again.",
              })
            );
          }
        }
      }
    } else {
      if (index) {
        const response = await generateResponse(
          conversation[index - 1].message
        );

        if (response) {
          dispatch(
            setMessageAtIndex({
              isRegenerated: true,
              isPrompt: false,
              message: response.response,
              index,
            })
          );
        } else {
          dispatch(
            addMessage({
              isRegenerated: false,
              isPrompt: false,
              message:
                "Sorry, I was unable to generate a response. Please try again.",
            })
          );
        }
      }
  };
}
