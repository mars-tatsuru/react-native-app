import { StatusBar } from "expo-status-bar";
import { Link, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useNavigation, NavigationProp } from "@react-navigation/native";

interface pageNameProps {
  menu: undefined;
}

export default function Card({
  cardTitle,
  cardText,
  image,
}: {
  cardTitle: string;
  cardText: string;
  image: ImageSourcePropType;
}) {
  return (
    <View>
      <Pressable style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.cardTitle}>{cardTitle}</Text>
        <Text style={styles.cardText}>{cardText}</Text>
        <View style={styles.cardBottom}>
          <Text style={styles.price}>￥600円/730Kcal </Text>
          <Ionicons name={"arrow-forward"} size={20} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    marginBottom: 20,
    width: Dimensions.get("window").width - 20,
  },

  image: {
    width: 200,
    height: 150,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },

  cardText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#9B9BAB",
    lineHeight: 18,
  },

  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  price: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 15,
  },
});
