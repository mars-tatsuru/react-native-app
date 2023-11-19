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
  const navigation = useNavigation<NavigationProp<pageNameProps>>();

  const handleCardPress = () => {
    navigation.navigate("menu");
  };

  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={handleCardPress}>
        <Image source={image} style={styles.image} />
        <Text style={styles.cardTitle}>{cardTitle}</Text>
        <Text style={styles.cardText}>{cardText}</Text>
        <View style={styles.cardBottom}>
          <Text style={styles.cardText}>￥600円/730Kcal </Text>
          <Ionicons name={"arrow-forward"} size={20} color={"#9B9BAB"} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    height: 180,
    width: Dimensions.get("window").width / 2 - 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },

  cardText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#9B9BAB",
  },

  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 130,
    height: 100,
  },

  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
