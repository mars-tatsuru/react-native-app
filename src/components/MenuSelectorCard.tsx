import { Link, Tabs } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  ImageSourcePropType,
} from "react-native";

/***********************
 * components
 *********************/

/***********************
 * main render
 *********************/
export default function MenuSelectorCard({
  menuSelectorText,
  menuSelectorImage,
  menuSelectorPrice,
}: {
  menuSelectorText: string;
  menuSelectorImage?: ImageSourcePropType;
  menuSelectorPrice: number;
}) {
  return (
    <View style={styles.menuSelector}>
      <Text style={styles.menuSelectorText}>{menuSelectorText}</Text>
      {menuSelectorImage && (
        <Image source={menuSelectorImage} style={styles.menuSelectorImage} />
      )}
      <Text style={styles.menuSelectorText}>+¥{menuSelectorPrice}</Text>
    </View>
  );
}

/**********************
 * styles
 *********************/
const styles = StyleSheet.create({
  menuSelector: {
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 10,
    width: "23%",
  },

  menuSelectorText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000",
    lineHeight: 12,
  },

  menuSelectorImage: {
    marginTop: 8,
    marginBottom: 8,
    width: 30,
    height: 30,
  },
});
