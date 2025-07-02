import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Pressable, Image, AccessibilityInfo } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../design/tokens';
import { Feather } from '@expo/vector-icons';
const logo = require('../design/logo.png');
export default function WelcomeScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 1200, useNativeDriver: true }).start();
  }, []);
  return (
    <View style={tw`flex-1 bg-white dark:bg-black justify-center items-center px-8`}>
      <Animated.View style={[tw`items-center`, { opacity: fadeAnim }]}> 
        <Image
          source={logo}
          style={tw`w-28 h-28 mb-6 rounded-full bg-gray-100 dark:bg-gray-900`}
          accessible accessibilityLabel="Devlop.app logo"
        />
        <Text style={tw`text-3xl font-extrabold text-black dark:text-white mb-2`}>Welcome to Devlop.app</Text>
        <Text style={tw`text-base text-gray-700 dark:text-gray-300 mb-10 text-center`}>A blazing fast, beautiful starter app for React Native. Light & dark, animated, and ready for you!</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go to Home Screen"
          style={({ pressed }) => tw`flex-row items-center bg-indigo-500 dark:bg-indigo-400 px-6 py-3 rounded-2xl shadow-lg ${pressed ? 'opacity-80' : ''}`}
          android_ripple={{ color: COLORS.accent }}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={tw`text-lg font-bold text-white mr-2`}>Get Started</Text>
          <Feather name="arrow-right" size={22} color="#fff" style={tw`mt-0.5`} />
        </Pressable>
      </Animated.View>
      <Text style={tw`absolute bottom-10 text-xs text-gray-400 dark:text-gray-500`}>
        Powered by Devlop.app Free
      </Text>
    </View>
  );
}
