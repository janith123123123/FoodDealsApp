import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './Home';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsloaded] = useState(false);

  useEffect(() => {
    async function prepare () {
      try {
        await Font.loadAsync({
          ...Ionicons.font,
          ...MaterialIcons.font,
        });
      }catch(e) {
        console.warn('Font loading Error:',e);
      }finally{
        setFontsloaded(true)
      }
    }
    prepare();
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
    <View style={{ flex: 1}} onLayout={onLayoutRootView}>
      <HomeScreen/>
    </View>
  );
   
}

registerRootComponent(App);
