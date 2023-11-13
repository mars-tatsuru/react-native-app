import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Link, Stack } from "expo-router";

import SettingIcon from "../assets/images/setting.png";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Sandwich Dominant</Text>
      <Pressable onPress={() => alert("You pressed a button.")}>
        <Image source={SettingIcon} style={styles.image} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#35784A",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 1,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: 24,
    height: 24,
  },
});
