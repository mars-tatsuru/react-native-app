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
  menu: { menuType: string };
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
  // const navigation = useNavigation<NavigationProp<pageNameProps>>();

  // const handlePress = () => {
  //   navigation.navigate("menu", { menuType: cardTitle });
  // };

  return (
    <Link href={`menu/${cardTitle}`} style={styles.link}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.cardTitle}>{cardTitle}</Text>
        <Text style={styles.cardText}>{cardText}</Text>
        <View style={styles.cardBottom}>
          <Text style={styles.price}>￥600円/730Kcal </Text>
          <Ionicons name={"arrow-forward"} size={20} />
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    width: Dimensions.get("window").width - 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },

  card: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
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
