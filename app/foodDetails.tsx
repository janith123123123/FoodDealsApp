import { useRouter } from "expo-router";
import React, { useEffect } from 'react';
import { Dimensions, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const foodDetails = () => {
  const router = useRouter();

  //from here
  const translateY= useSharedValue(0);
  const maxTranslate = screenHeight * 0.91;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value}],
  }));

  const onDismiss =() =>{
    setTimeout(() =>{
      router.back();
    },50);
    
  };

  const panGesture = Gesture.Pan().onUpdate((e) =>{
    if (e.translationY > 0) {
      translateY.value = e.translationY;
    }else {
      translateY.value = 0;
    }
  })
  .onEnd(()=> {
    if (translateY.value > 100) {
      translateY.value = withTiming(maxTranslate,{duration:200}, ()=>
      {
        runOnJS(onDismiss)();
      });
    } else {
      translateY.value = withSpring(0);

    }
  });

  useEffect(() => {
    translateY.value = maxTranslate;
    translateY.value =withTiming(0,{ duration:300});
  },[]);

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    const opacity = 0.3 - (translateY.value / maxTranslate) * 0.3;
    return {
      opacity: Math.max(0,Math.min(0.3, opacity)),
    };
  });
  //to here is the botomsheet logic

  return (
    <SafeAreaView style={styles.overlay}>  
    <Animated.View style={[styles.background, backgroundAnimatedStyle]}>
      <Pressable style={{ flex: 1 }} onPress={onDismiss} />
    </Animated.View>

    
    <GestureDetector gesture={panGesture}>
    <Animated.View style={[styles.sheetcontainer,animatedStyle]}>
      <TouchableOpacity onPress={() => {
          translateY.value = withTiming(maxTranslate, { duration: 200 }, () => {
            runOnJS(onDismiss)();
          });
        }}>
      <View style={styles.dragIndicator} />
      </TouchableOpacity>
      <View style={{marginTop:60}}>
      </View>
      <Text style={{marginTop: 100}}>foodDetails</Text>
      
      
    </Animated.View>
    </GestureDetector>
    </SafeAreaView>
    
  )
}

console.log('✅ foodDetails.tsx loaded!');
export default foodDetails



const styles = StyleSheet.create({
 
  safeArea: {
    flex: 1,
    backgroundColor: '#F5CB58',
    paddingHorizontal: 16,
    paddingVertical: 25,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // fills entire screen
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex:1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 10,
  },
  sheetcontainer: {
    height: screenHeight * 0.91,
    width:'100%',
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    elevation: 10,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    zIndex:2
  },
  backButton: {
    alignSelf:'flex-end',
  },
  title:{
    fontSize:22,
    fontWeight:'600',
    marginTop:20,
    textAlign:'center',
  }
});