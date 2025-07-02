import React from 'react';
import { Pressable, Text, View } from 'react-native';
import tw from 'twrnc';
import { COLORS } from '../design/tokens';
export default function Button({ text, iconLeft, iconRight, onPress, accessibilityLabel }) {
  return (
    <Pressable
      style={({ pressed }) => tw`flex-row items-center justify-center bg-indigo-500 dark:bg-indigo-400 py-3 rounded-xl mt-6 shadow ${pressed ? 'opacity-80' : ''}`}
      android_ripple={{ color: COLORS.accent }}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      {iconLeft && <View style={tw`mr-2`}>{iconLeft}</View>}
      <Text style={tw`text-base font-bold text-white`}>{text}</Text>
      {iconRight && <View style={tw`ml-2`}>{iconRight}</View>}
    </Pressable>
  );
}
