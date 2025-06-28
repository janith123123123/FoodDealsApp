import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import React from "react";


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#ccc',
      tabBarStyle: {
        paddingTop: 7,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 50,
        backgroundColor: '#E95322',
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '700',
      }
    }}>
      <Tabs.Screen
      name="index"
      options={{tabBarLabel: "Home", 
      headerShown: false,
      tabBarIcon:({color, size }) => (<Ionicons name = 'home-outline' size={24} color={color}/>),
      }}
      />
      <Tabs.Screen
      name="cart"
      options={{tabBarLabel: "Cart", 
      title:'Cart',
      tabBarIcon:({color, size }) => (<Ionicons name = 'cart-outline' size={24} color={color}/>),
      }}
      />
      <Tabs.Screen
      name="favourite"
      options={{tabBarLabel: "Favourite", 
      title:'Favourite',
      tabBarIcon:({color, size }) => (<Ionicons name = 'heart-outline' size={24} color={color}/>),
      }}
      />
      <Tabs.Screen
      name="profile"
      options={{tabBarLabel: "Profile", 
      title:'Profile',
      tabBarIcon:({color, size }) => (<Ionicons name = 'person-outline' size={24} color={color}/>),
      }}
      />
    </Tabs>

  );
}