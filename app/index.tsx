import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  useEffect(() => {
    console.log("Index page loaded");
    
    setTimeout(()=> router.replace("/(auth)/signIn"),1000)
  }, []);

  return (
    <SafeAreaView>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-5xl">Welcome to StashFlow</Text>
    </View>
    </SafeAreaView>
  );
}
