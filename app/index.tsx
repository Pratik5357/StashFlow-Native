import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  return (
      <View className="flex-1 flex-col justify-center items-center bg-gray-800 relative overflow-hidden">
        {/* Background Circle */}
        <View className="absolute -top-20 w-[800px] h-[600px] rounded-full bg-[#f6f6f6]" />

        {/* Card Container */}
        <View className="absolute w-10/12 rounded-2xl bg-white border border-slate-100 flex-1 justify-center items-center px-8 py-5 gap-3">
          <Text className="p-2 text-[40px] text-center font-extrabold text-gray-600">
            Welcome to StashFlow!
          </Text>
          <Text className="text-gray-500 text-lg">
            Your personal finance management app.
          </Text>
          <Text className="text-gray-500 text-lg">
            Please sign in or sign up to continue.
          </Text>
          <View className="flex-row justify-center items-center w-full gap-3 mt-5">
            <Text className="text-blue-500 font-semibold text-lg" onPress={() => router.push("/(auth)/signIn")}>
              Sign In
            </Text>
            <Text className="text-blue-500 font-semibold text-lg" onPress={() => router.push("/(auth)/signUp")}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
  );
}
