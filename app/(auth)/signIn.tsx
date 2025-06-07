import axios from "axios";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import GoogleLogo from "../../assets/Svg/GoogleLogo";

export default function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleSignIn = async () => {
    await axios.post("http://192.168.0.100:3000/api/users/login", user).then((res) => {
      if (res.status === 200) { 
        console.log("User logged in successfully:", res.data);
        router.push("/");
      }
    }).catch((err) => {
      console.error("Error logging in:", err.response ? err.response.data : err.message);
    }); 
  };

  return (
    <View className="flex-1 flex-col justify-center items-center bg-gray-800 relative overflow-hidden gap-1">
      {/* Background Circle */}
      <View className="absolute -top-20 w-[800px] h-[600px] rounded-full bg-[#f6f6f6]" />

      {/* Card Container */}
      <View className="absolute w-10/12 rounded-2xl bg-white border border-slate-100 flex-1 justify-center items-center px-8 py-5 gap-3">
        <Text className="p-2 text-nowrap text-[40px] text-center font-extrabold text-gray-600">
          Sign in
        </Text>

        {/* Input Container with Outline */}
        <View className="w-full justify-center items-center gap-3 bg-white border-gray-300">
          <TextInput
            className="w-full p-3 px-5 h-[50px] border border-gray-200 rounded-md focus:border-blue-500 focus:border-2"
            placeholder="Enter username or email"
            placeholderTextColor="#9CA3AF"
            onChangeText={(text) => setUser({ ...user, username: text })}
          />
          <TextInput
            className="w-full p-3 px-5 h-[50px] border border-gray-200 rounded-md focus:border-blue-500 focus:border-2"
            placeholder="Enter password"
            secureTextEntry
            placeholderTextColor="#9CA3AF"
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
        </View>
        <View className="w-full flex-row items-center justify-between">
          <Pressable
            className="flex-row items-center justify-center"
            onPress={() => setRememberMe(!rememberMe)}
          >
            <Checkbox.Android
              status={rememberMe ? "checked" : "unchecked"}
              onPress={() => setRememberMe(!rememberMe)}
              color="#3B82F6" // Tailwind blue-500
              uncheckedColor="#9CA3AF" // Tailwind gray-400
            />
            <Text className="text-gray-600 text-sm">Remember me</Text>
          </Pressable>

          <Pressable onPress={() => console.log("Navigate to Forgot Password")}>
            <Text className="text-blue-500 font-semibold text-sm">
              Forgot password?
            </Text>
          </Pressable>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity onPress={handleSignIn} className="w-full bg-gray-700 rounded-xl p-3">
          <Text className="text-white text-center text-lg font-semibold">
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Sign Up Prompt */}
        <View className="flex-row justify-center items-center w-full">
          <Text className="text-gray-500">Don't have an account? </Text>
          <Text
            className="text-blue-500 font-semibold"
            onPress={() => router.push("/(auth)/signUp")}
          >
            Sign Up
          </Text>
        </View>

        <View className="border-t border-gray-200 w-full p-4 mt-1">
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
