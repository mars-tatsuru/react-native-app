// import { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import TabBarIcon from "../../components/TabBarIcon";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#35784A",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen
        name="menu"
        options={{
          tabBarLabel: "Menu",
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold",
          },
          title: "Menu",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="menu" />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: "Account",
          title: "Account",
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="person" />
          ),
        }}
      />
    </Tabs>
  );
}
