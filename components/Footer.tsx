import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import accountIcon from "../assets/images/icon_account.png";
import menuIcon from "../assets/images/icon_menu.png";
import orderIcon from "../assets/images/icon_order.png";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Pressable
        style={styles.footerBtn}
        onPress={() => alert("You pressed a button.")}
      >
        <Image source={menuIcon} style={styles.image} />
        <Text style={styles.headerText}>menu</Text>
      </Pressable>
      <Pressable
        style={styles.footerBtn}
        onPress={() => alert("You pressed a button.")}
      >
        <Image source={orderIcon} style={styles.image} />
        <Text style={styles.headerText}>order</Text>
      </Pressable>
      <Pressable
        style={styles.footerBtn}
        onPress={() => alert("You pressed a button.")}
      >
        <Image source={accountIcon} style={styles.image} />
        <Text style={styles.headerText}>account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  footerBtn: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#35784A",
  },
  image: {
    width: 32,
    height: 32,
  },
});
