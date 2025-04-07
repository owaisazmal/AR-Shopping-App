import { Tabs } from 'expo-router';
import React from 'react';
import Home from "../../assets/Home.svg"
import Cart from "../../assets/Cart.svg"
import Favorite from "../../assets/Favorite.svg"
import Account from "../../assets/Account.svg"
import SignIn from '..';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{ headerShown: false, headerBackButtonDisplayMode: "minimal"}} >
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Home width={40} height={40} color={color}/>,
        }} 
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'saved',
          headerShown: false,
          tabBarIcon: ({ color }) => <Cart width={40} height={40} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ar"
        options={{
          title: 'ar',
          headerShown: false,
          tabBarIcon: ({ color }) => <Favorite width={40} height={40} color={color} />,
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: 'details',
          headerShown: false,
          href: "/",
          tabBarIcon: ({ color }) => <Account width={40} height={40} color={color} />,
        }}
      />

    </Tabs>
  );
}
