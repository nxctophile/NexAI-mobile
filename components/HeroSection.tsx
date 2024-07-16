import { styles } from "@/styles/HeroSectionStyle";
import { View, Image, Text, Pressable, Dimensions } from "react-native";
import nexAiLogo from "@/assets/images/nex-white-stroke-100.png";
import code from "@/resources/code.png";
import idea from "@/resources/idea.png";
import question from "@/resources/question.png";
import quote from "@/resources/quote.png";
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

export default function HeroSection() {
  return (
    <View style={[styles.heroContainer, { height: screenHeight - 150, width: screenWidth }]}>
      <Image source={nexAiLogo} style={styles.heroImage} />
      <Text style={styles.heroText}>How can I help you today?</Text>

      <View style={styles.featureContainer}>
        <View style={styles.featureRow}>
          <View style={styles.featureCard}>
            <Pressable
              android_ripple={{
                color: "#353535",
                borderless: false,
                radius: 100,
              }}
              // skipcq: JS-0417
              style={({ pressed }) => [
                styles.feature,
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Image source={question} style={styles.featureImage} />
              <Text style={styles.featureText}>What can NexAI do?</Text>
            </Pressable>
          </View>
          <View style={styles.featureCard}>
            <Pressable
              android_ripple={{
                color: "#353535",
                borderless: false,
                radius: 100,
              }}
              // skipcq: JS-0417
              style={({ pressed }) => [
                styles.feature,
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Image source={code} style={styles.featureImage} />
              <Text style={styles.featureText}>Help me fix this code</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.featureRow}>
          <View style={styles.featureCard}>
            <Pressable
              android_ripple={{
                color: "#353535",
                borderless: false,
                radius: 100,
              }}
              // skipcq: JS-0417
              style={({ pressed }) => [
                styles.feature,
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Image source={idea} style={styles.featureImage} />
              <Text style={styles.featureText}>Give me project ideas</Text>
            </Pressable>
          </View>
          <View style={styles.featureCard}>
            <Pressable
              android_ripple={{
                color: "#353535",
                borderless: false,
                radius: 100,
              }}
              // skipcq: JS-0417
              style={({ pressed }) => [
                styles.feature,
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Image source={quote} style={styles.featureImage} />
              <Text style={styles.featureText}>Write an essay for me</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
