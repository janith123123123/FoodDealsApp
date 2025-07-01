import { SearchProvider } from '@/context/SearchResultsContext';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DealsProvider } from '../context/DealsContext';

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
    <SearchProvider>
    <GestureHandlerRootView>
      <DealsProvider>
        <SafeAreaProvider>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <RootLayoutNav />
        </View>
        </SafeAreaProvider>
      </DealsProvider>
      </GestureHandlerRootView>
    </SearchProvider>
  );
  
}

function RootLayoutNav() {

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name='foodDetails' 
        options={{ headerShown: false, 
          presentation: 'transparentModal',
          animation: 'slide_from_bottom',
          contentStyle:{backgroundColor: 'transparent'}}} 
      />
      <Stack.Screen name="searchScreen" 
        options={{ headerShown: false, 
          animation: 'default',
          }} 
      />  
    </Stack>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

