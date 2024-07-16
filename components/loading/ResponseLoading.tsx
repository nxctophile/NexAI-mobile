import nex from "@/assets/images/nex-white-stroke-100.png";
import loadingGif from '@/resources/loading.gif';
import { styles } from "@/styles/loading/ResponseLoadingStyle";
import { View, Image, Text } from "react-native";

export default function ResponseLoading() {
  return (
    <View style={styles.response}>
      <View style={styles.nexaiResponse}>
        <Image style={styles.nexaiLogo} source={nex} />
        <Text style={styles.nexaiText}>NexAI</Text>
      </View>
      <Image style={styles.loading} source={loadingGif} />
    </View>
  );
}
