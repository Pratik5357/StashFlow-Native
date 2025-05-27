import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import GoogleLogo from "../../assets/Svg/GoogleLogo";

export default function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <View className="flex-1 flex-col justify-center items-center bg-gray-800 relative">
      {/* Background Circle */}
      <View className="absolute -top-20 w-[800px] h-[600px] rounded-full bg-[#f6f6f6]" />

      {/* Card Container */}
      <View className="absolute w-10/12 h-[500px] rounded-2xl bg-white border border-slate-100 flex-1 justify-center items-center px-8">
        <Text className="pt-4 p-4 text-[30px] text-center font-extrabold text-gray-600">
          Welcome Back to StashFlow
        </Text>

        {/* Input Container with Outline */}
        <View className="w-full justify-start items-center bg-white rounded-2xl border border-gray-300 mt-4">
          <TextInput
            className="w-full p-3 px-5 h-[50px] border-b border-gray-200 placeholder:text-gray-400"
            placeholder="Enter username or email"
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            className="w-full p-3 px-5 h-[50px] placeholder:text-gray-400"
            placeholder="Enter password"
            secureTextEntry
            placeholderTextColor="#9CA3AF"
          />
        </View>
        <View className="flex-row items-center justify-between w-full mt-3">
          <Pressable
            className="flex-row items-center"
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View
              className={`w-5 h-5 rounded border border-gray-400 mr-2 ${
                rememberMe ? "bg-blue-500" : "bg-white"
              }`}
            />
            <Text className="text-gray-600">Remember me</Text>
          </Pressable>

          <Text
            className="text-blue-500 font-semibold"
            onPress={() => console.log("Navigate to Forgot Password")}
          >
            Forgot password?
          </Text>
        </View>

        {/* Sign In Button */}
        <View className="w-full bg-gray-700 rounded-xl p-3 mt-5">
          <Text className="text-white text-center text-lg font-semibold">
            Sign In
          </Text>
        </View>

        {/* Sign Up Prompt */}
        <View className="flex-row justify-center items-center w-full mt-5">
          <Text className="text-gray-500">Don't have an account? </Text>
          <Text
            className="text-blue-500 font-semibold"
            onPress={() => console.log("Navigate to Sign Up")}
          >
            Sign Up
          </Text>
        </View>

        <View className="mt-5 border-t border-gray-200 w-full pt-8 p-3">
          <View className="flex-row justify-center items-center border border-gray-200 p-3 rounded-lg gap-3">
            <GoogleLogo size={24} />
            <Text className="text-gray-600 text-lg font-semibold ml-2">
              Sign in with Google
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
