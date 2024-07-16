import ConversationContainer from "@/components/ConversationContainer";
import Topbar from "@/components/Topbar";
import InputBox from "@/components/InputBox";
import { View } from "react-native";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [sidebarState, setSidebarState] = useState(false);
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Topbar setSidebarState={setSidebarState} />
      {sidebarState && (
        <Sidebar setSidebarState={setSidebarState} />
      )}
      <ConversationContainer loading={loading} />
      <InputBox setLoading={setLoading} />
    </View>
  );
}
