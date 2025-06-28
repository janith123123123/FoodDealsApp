import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from "react-native";

import 'react-native-reanimated';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, setFontsloaded] = useState(false);

  useEffect(() => {
    async function prepare () {
      try {
        await Font.loadAsync({
          ...Ionicons.font,
          ...MaterialIcons.font,
        });
      }catch(e) {          console.warn('Font loading Error:',e);
      }finally{
        setFontsloaded(true)
      }
    }       prepare();
  }, []);
  
  
  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
  <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
    <RootLayoutNav />
  </View>);
  
}

function RootLayoutNav() {

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
   );
}



