import { Image, View, Text } from "react-native";
import { Slot, Stack, Link } from "expo-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StatusBar } from "expo-status-bar";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#35784A",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        title: "Sandwich Dominant",
      }}
    ></Stack>
  );
}
