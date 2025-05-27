import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Checkbox } from 'react-native-paper';
import GoogleLogo from "../../assets/Svg/GoogleLogo";

export default function SignUp() {
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const router = useRouter();

  return (
    <View className="flex-1 flex-col justify-center items-center bg-gray-800 relative overflow-hidden">
      {/* Background Circle */}
      <View className="absolute -top-20 w-[800px] h-[600px] rounded-full bg-[#f6f6f6]" />

      {/* Card Container */}
      <View className="absolute w-10/12 rounded-2xl bg-white border border-slate-100 flex-1 justify-center items-center px-8 py-5 gap-3">
        <Text className="p-2 text-[40px] text-center font-extrabold text-gray-600">
          Sign up
        </Text>

        {/* Input Fields */}
        <View className="w-full justify-center items-center bg-white gap-3">
          <TextInput
            className="w-full p-3 px-5 h-[50px] border border-gray-200 rounded-md focus:border-blue-500 focus:border-2"
            placeholder="Full Name"
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            className="w-full p-3 px-5 h-[50px] border border-gray-200 rounded-md focus:border-blue-500 focus:border-2"
            placeholder="Email Address"
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            className="w-full p-3 px-5 h-[50px] border border-gray-200 rounded-md focus:border-blue-500 focus:border-2"
            placeholder="Create Password"
            secureTextEntry
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Accept Terms & Policy */}
        <View className="flex-row items-center w-full">
      <Checkbox.Android
        status={acceptedPolicy ? "checked" : "unchecked"}
        onPress={() => setAcceptedPolicy(!acceptedPolicy)}
        color="#3B82F6" // Tailwind blue-500
        uncheckedColor="#9CA3AF" // Tailwind gray-400
      />
      <Pressable
        onPress={() => setAcceptedPolicy(!acceptedPolicy)}
        className="flex-1"
      >
        <Text className="text-gray-600 text-sm">
          I accept the{" "}
          <Text
            className="text-blue-500 font-semibold"
            onPress={() => console.log("Navigate to Terms")}
          >
            Terms & Privacy Policy
          </Text>
        </Text>
      </Pressable>
    </View>

        {/* Sign Up Button */}
        <View className="w-full bg-gray-700 rounded-xl p-3">
          <Text className="text-white text-center text-lg font-semibold">
            Create Account
          </Text>
        </View>

        {/* Sign In Prompt */}
        <View className="flex-row justify-center items-center w-full">
          <Text className="text-gray-500">Already have an account? </Text>
          <Text
            className="text-blue-500 font-semibold"
            onPress={() => router.push("/(auth)/signIn")}
          >
            Sign In
          </Text>
        </View>

        {/* Google Signup */}
        <View className="border-t border-gray-200 w-full p-4 mt-1">
          <View className="flex-row justify-center items-center border border-gray-200 p-3 rounded-lg gap-3">
            <GoogleLogo size={24} />
            <Text className="text-gray-600 text-lg font-semibold ml-2">
              Sign up with Google
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
