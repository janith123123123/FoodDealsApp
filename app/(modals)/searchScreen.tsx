import { useLocalSearchParams } from 'expo-router';
import React from "react";
import { Text, View } from "react-native";

export default function SearchScreen() {
  const { query } = useLocalSearchParams();

  return (
    <View style={{ padding: 20 }}>
      <Text>Search result for: {query}</Text>
    </View>
  );
}