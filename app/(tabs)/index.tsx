import { StyleSheet } from "react-native";
import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}

export default function LandingScreen({ navigation }: Props) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.subtitle}>The best place to get started!</Text>
      <Button title="Get Started" onPress={() => router.push("/register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
});
