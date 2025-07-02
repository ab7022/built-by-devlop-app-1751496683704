import React, { useEffect, useRef } from 'react';
import { View, Text, FlatList, Animated, Pressable, AccessibilityInfo } from 'react-native';
import tw from 'twrnc';
import Button from '../components/Button';
import { COLORS } from '../design/tokens';
import { Feather } from '@expo/vector-icons';
const DATA = [
  { id: '1', title: 'Lightning Fast Expo Setup', desc: 'Start coding instantly with Expo 52.' },
  { id: '2', title: 'Beautiful Dark Mode', desc: 'Switches automatically with system.' },
  { id: '3', title: 'Animated UI', desc: 'Smooth micro-interactions out of the box.' },
];
export default function HomeScreen() {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(anim, { toValue: 1, friction: 7, useNativeDriver: true }).start();
  }, []);
  return (
    <View style={tw`flex-1 bg-gray-50 dark:bg-black px-6 pt-16`}> 
      <Animated.Text
        style={[tw`text-2xl font-bold text-black dark:text-white mb-6`, {
          transform: [{ scale: anim }],
          opacity: anim
        }]}
        accessible accessibilityRole="header"
      >
        🚀 Your React Native Starter
      </Animated.Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Animated.View style={{
            ...tw`mb-5 bg-white dark:bg-gray-900 rounded-2xl shadow p-5`,
            transform: [{ translateY: Animated.multiply(anim, index * 10) }],
            opacity: anim
          }}
          accessible accessibilityLabel={item.title}
          >
            <Text style={tw`text-lg font-semibold text-indigo-600 dark:text-indigo-300 mb-1`}>{item.title}</Text>
            <Text style={tw`text-gray-700 dark:text-gray-300`}>{item.desc}</Text>
          </Animated.View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-10`}
      />
      <Button text="See More" iconRight={<Feather name="chevron-right" size={20} color="#fff" />} onPress={() => {}} accessibilityLabel="See more features (demo)" />
      <Text style={tw`mt-12 text-xs text-center text-gray-400 dark:text-gray-600`}>This is a free version of Devlop.app. Upgrade to premium for more screens and features.</Text>
    </View>
  );
}
