import React from "react";
import { Ionicons } from "@expo/vector-icons";

const TabBarIcon = ({ focused, name }: { focused: boolean; name: string }) => {
  let iconName:
    | "md-home"
    | "md-home-outline"
    | "md-menu"
    | "md-menu-outline"
    | "md-person"
    | "md-person-outline" = "md-home-outline";
  if (name === "home") {
    iconName = focused ? "md-home" : "md-home-outline";
  } else if (name === "menu") {
    iconName = focused ? "md-menu" : "md-menu-outline";
  } else if (name === "person") {
    iconName = focused ? "md-person" : "md-person-outline";
  }

  return (
    <Ionicons
      name={iconName}
      size={focused ? 20 : 20}
      color={focused ? "blue" : "gray"}
    />
  );
};

export default TabBarIcon;
