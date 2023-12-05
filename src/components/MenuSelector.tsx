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
import MenuSelectorCard from "src/components/MenuSelectorCard";

/***********************
 * images
 *********************/
import Bread from "src/assets/images/bread.png";

/***********************
 * Dimensions width
 *********************/
const { width } = Dimensions.get("window");

/***********************
 * main render
 *********************/
export default function MenuSelector({
  menuBarTitle,
  menuBarBadge,
  selectors,
}: {
  menuBarTitle: string;
  menuBarBadge: string;
  selectors: {
    id: number;
    title: string;
    image?: ImageSourcePropType;
    price: number;
  }[];
}) {
  return (
    <View style={styles.cardMiddle}>
      <View style={styles.menuBar}>
        <Text style={styles.menuBarTitle}>{menuBarTitle}</Text>
        {menuBarBadge === "true" && (
          <View style={styles.menuBarBadge}>
            <Text style={styles.menuBarBadgeText}>必須</Text>
          </View>
        )}
      </View>
      <View style={styles.menuSelectorWrapper}>
        {selectors.map((selector) => (
          <MenuSelectorCard
            key={selector.id}
            menuSelectorText={selector.title}
            menuSelectorImage={selector.image}
            menuSelectorPrice={selector.price}
          />
        ))}
      </View>
    </View>
  );
}

/**********************
 * styles
 *********************/
const styles = StyleSheet.create({
  cardMiddle: {
    marginTop: 10,
  },

  menuBar: {
    backgroundColor: "#35784A",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  menuBarTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 18,
  },

  menuBarBadge: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 10,
    backgroundColor: "#F3C13A",
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },

  menuBarBadgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 12,
  },

  menuSelectorWrapper: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  menuSelector: {
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 10,
    width: width / 4 - 20,
  },

  menuSelectorText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    lineHeight: 12,
  },

  menuSelectorImage: {
    width: 50,
    height: 30,
  },
});
